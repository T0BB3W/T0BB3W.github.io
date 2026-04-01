# nemoclaw_project_tobias_weckström

1 (9)
Tobias Weckström                                       Linux Servers Project Work
Haaga-Helia University of Applied Sciences             23.3.2026
ICI003AS2AE-3006



Setting Up NVIDIA NemoClaw

Installing and Exploring NemoClaw (OpenClaw) AI Agent Framework on Ubuntu Server


Table of Contents

   1. Introduction
   2. Background: NVIDIA and the AI OS Vision
   3. Environment Setup
          o 3.1 Ubuntu Server Installation
          o 3.2 SSH Key Authentication
          o 3.3 NVIDIA GPU Driver Installation
   4. NemoClaw Installation
          o 4.1 Docker Setup
          o 4.2 NVIDIA API Key
          o 4.3 Model Selection
          o 4.4 Tooling Presets
   5. Testing and Results
   6. Challenges
   7. Conclusions
   8. Images
   9. References

1. Introduction

            This report documents the installation and initial exploration of NVIDIA's NemoClaw —
            also marketed as OpenClaw, an AI agent framework that NVIDIA has boldly described
            as the "OS of AI". NVIDIA is currently one of the world's largest companies by market
            capitalisation, and this claim reflects the company's ambition to position its software
            stack as fundamental infrastructure for the next generation of AI-powered computing.

            The project involves setting up a clean Ubuntu Server LTS environment on a physical
            laptop, configuring GPU drivers for an NVIDIA graphics card, installing the Docker-
            based NemoClaw framework, and running initial tests using cloud-hosted large
            language models. The work was carried out as a hands-on installation and research
            project for the Linux Servers course.

            The goal was to understand what agentic AI frameworks look like at the system level —
            how they are deployed, what infrastructure they require, and what practical limitations
            arise when using free-tier cloud model access.



2. Background: NVIDIA and the AI OS Vision

            NVIDIA has grown from a GPU manufacturer primarily known for gaming hardware into
            one of the central pillars of the global AI industry. Its H100 and A100 data centre GPUs
            have become the de facto standard compute hardware for training and running large
            language models (LLMs). As of late 2023, NVIDIA's market valuation has surpassed
 Tobias Weckström                                      Linux Servers Project Work               2 (9)
 Haaga-Helia ammattikorkeakoulu                        23.3.2026
 ICI003AS2AE-3006



             many of the world's largest technology companies, driven almost entirely by AI
             infrastructure demand.

             NemoClaw, officially part of the NVIDIA Agent Intelligence Toolkit and sometimes
             referred to as OpenClaw in developer communities, is an agentic framework that allows
             users to deploy AI agents capable of planning, using tools, executing code, and
             managing files. NVIDIA positions this framework as a foundational layer for AI-native
             workflows, comparing its role to that of an operating system: a platform on which other
             applications and agents can be built and orchestrated.

             This is a significant claim. Traditional operating systems abstract hardware and manage
             resources for application software. If NVIDIA's agent framework genuinely achieves an
             analogous role for AI workloads, abstracting model access, managing context and
             memory, and orchestrating multi-step tasks, the comparison carries real weight. This
             project explores that claim through direct installation and testing.

3. Environment Setup

3.1 Ubuntu Server Installation

             Ubuntu Server LTS was selected as the operating system due to its stability, strong
             community support, and compatibility with NVIDIA's driver ecosystem. The installation
             medium was created by flashing the Ubuntu Server ISO onto an 8 GB USB drive using
             Rufus on a Windows PC.

             The flashing process took notably longer than expected, which was attributed to the age
             and quality of the USB drive used rather than any issue with the software or image. This
             is a common practical consideration when working with older removable media.

             The Ubuntu Server installation itself was straightforward, with only the keyboard layout
             changed from the defaults.

             OpenSSH server was included during the installation, which is standard practice for
             headless server setups and enables remote management from the first boot.

3.2 SSH Key Authentication

             Rather than using password authentication for remote access, SSH key authentication
             was configured using the Ed25519 algorithm, which provides strong security with
             compact key sizes. The key pair was generated on a MacBook using the following
             command:

             ssh-keygen -t ed25519

             The resulting public key was read from the default location:

             cat ~/.ssh/id_ed25519.pub

             The public key string follows the format: [encryption protocol] [key data]
             [user@local-system]. In practice the key data is long enough that it wraps across
 Tobias Weckström                                        Linux Servers Project Work                  3 (9)
 Haaga-Helia ammattikorkeakoulu                          23.3.2026
 ICI003AS2AE-3006



             terminal lines. It is critical to copy the .pub file which is the public key, and never share
             the private key.

             A particularly convenient feature of the Ubuntu Server installer is its ability to import SSH
             public keys directly from a GitHub account. By uploading the public key to GitHub
             beforehand and providing the GitHub username during installation, the authorized key
             was fetched and configured automatically. This saved several manual steps compared
             to traditional SSH key deployment.

3.3 NVIDIA GPU Driver Installation

             With the server running, the next step was installing NVIDIA GPU drivers to enable
             hardware acceleration for AI workloads. Ubuntu provides a driver detection utility that
             was used first to survey available options:

             sudo ubuntu-drivers list --gpgpu

             This returned over twenty driver variants. Rather than manually selecting and potentially
             choosing an incompatible version, the automatic recommendation feature was used:

             sudo ubuntu-drivers install --gpgpu

             After installation, the system was rebooted and the NVIDIA System Management
             Interface was used to verify driver functionality:

             nvidia-smi

             The initial attempt failed because the nvidia-utils package for the installed driver version
             (580) had not been included. Installing the correct utilities package resolved the issue:

             sudo apt install nvidia-utils-580

             After this, nvidia-smi returned correct GPU information, showing the card in an idle
             state at 44°C with no active processes. As a sanity check, immediately after installation
             the GPU was sitting at 55°C with the laptop fans running, confirming that nvidia-smi
             reports live, real-time temperature data.

             A side effect of the driver installation was that the laptop's display output went dark on
             reboot. The server remained fully accessible over SSH, which is the expected and
             preferred interface for a headless server. This is actually a desirable outcome in server
             deployments, particularly on laptops used as low-power passive servers, where a
             working graphical display is unnecessary.



4. NemoClaw Installation

4.1 Docker Setup

             NemoClaw is distributed as a Docker-based application. Docker was not installed on the
             fresh Ubuntu Server image, so it was installed using the apt package manager:
 Tobias Weckström                                      Linux Servers Project Work               4 (9)
 Haaga-Helia ammattikorkeakoulu                        23.3.2026
 ICI003AS2AE-3006



             sudo apt install -y docker.io

             The Docker service was verified and enabled for automatic startup on boot:

             systemctl status docker

             systemctl enable docker

             The current user was added to the docker group to allow running Docker commands
             without sudo:

             sudo usermod -aG docker $USER

             newgrp docker

             After a system reboot to ensure all changes took effect cleanly, the NemoClaw
             installation process was initiated.

4.2 NVIDIA API Key

             NemoClaw requires an NVIDIA API key to access cloud-hosted model inference
             endpoints. This required creating an NVIDIA developer account and generating an API
             key through the NVIDIA developer portal. For this project, a key was generated with a 7-
             day validity period, which is sufficient for evaluation purposes. The API key was entered
             into the CLI during the setup process, after which NemoClaw prompted for model
             selection.

4.3 Model Selection

             NemoClaw presented six cloud model options. The Nemotron 3 Super 120B model was
             selected as the primary choice. Being NVIDIA's own model, it was expected to have the
             best integration and optimisation within the NemoClaw framework, which is particularly
             relevant given that the software was still in alpha at the time of testing.

             A secondary candidate noted during evaluation was Kimi K2.5, which appeared well-
             suited for more specialised use cases including multimodal inputs (image, video, audio),
             complex document processing such as spreadsheets and slide decks, and long-horizon
             multi-step tasks.

4.4 Tooling Presets

             NemoClaw prompts the user to select tooling presets that define which package
             managers and development environments the agent can interact with. The PyPI and
             npm preset was selected, enabling the agent to work with Python packages via pip and
             JavaScript/Node.js packages via npm. Additional tool integrations can be added after
             initial setup.

             The installation process took approximately 30 minutes (1,810 seconds recorded),
             including time spent reviewing configuration options and reading documentation. Upon
             completion, the NemoClaw agent interface was accessible and functional.
 Tobias Weckström                                      Linux Servers Project Work                5 (9)
 Haaga-Helia ammattikorkeakoulu                        23.3.2026
 ICI003AS2AE-3006



5. Testing and Results

            Initial testing of the NemoClaw agent showed that the framework was operational. The
            first prompt submitted to the agent took approximately 30 seconds to return a response.
            This latency was attributed to the agent initialising context and the cold start overhead of
            the cloud model endpoint, rather than any local infrastructure issue.

            The first practical test involved converting a set of PDF documents into Markdown files.
            A directory of PDF files was transferred from a personal laptop to the Ubuntu Server
            using SCP:

            scp -r /local/path maisema@ubuntuserver1tk:~/documents/

            An OpenShell sandbox upload command was then used to make the files available
            within the agent's workspace:

            openshell sandbox upload my-assistant /path/on/host
            /sandbox/.openclaw/workspace/pdfs

            Notably, the agent autonomously created both a /pdfs and a /markdown subdirectory
            within its workspace directory, demonstrating basic agentic behaviour in organising its
            own file environment without explicit instruction.

            However, the conversion task ultimately timed out at approximately 9 minutes without
            completing. The batch of 10 files submitted was too large, and several of the PDFs
            contained detailed images which significantly increased token consumption. The token
            budget for the free-tier cloud model was likely exceeded, causing the agent to stall
            rather than fail gracefully.

            After repeating the onboarding process, single-prompt attempts also consistently timed
            out. This was diagnosed as a server-side capacity issue with NVIDIA's public model
            endpoints rather than a local configuration problem. The timing was significant: the
            software had been released only a few days prior, and the evaluation was being
            conducted at approximately 4:00 PM local time, a period that coincides with overlapping
            peak usage hours across US morning and European afternoon time zones. Free and
            public-tier model endpoints are typically subject to strict rate limits and can become
            effectively unavailable during such demand spikes.



6. Challenges

            Slow USB flashing The USB drive used for installation media was old and slow,
            resulting in a significantly longer flash time than typical. Using a modern USB 3.0 drive
            would resolve this in future projects.

            Missing nvidia-utils package The automatic driver installer did not include the nvidia-
            utils package for the installed driver version, causing nvidia-smi to be unavailable after
            the initial driver install. Manually identifying and installing the correct version-matched
            utilities package was required.
Tobias Weckström                                     Linux Servers Project Work                6 (9)
Haaga-Helia ammattikorkeakoulu                       23.3.2026
ICI003AS2AE-3006



           Display output after driver install Installing the NVIDIA GPU driver caused the laptop
           display to go dark on reboot. While this was ultimately a non-issue for a headless SSH-
           managed server, it could be disorienting in environments without network access
           configured in advance.

           Cloud model rate limiting The most significant challenge was consistent prompt
           timeouts when using NVIDIA's free-tier cloud model endpoints. This was compounded
           by the timing of the evaluation, being a very new release tested during peak global
           developer hours. The practical solution for production or serious evaluation use is to
           configure private API keys (e.g., Anthropic's Claude, OpenAI) or self-hosted models
           within NemoClaw, bypassing the public endpoints entirely.

           Excessive token usage in batch processing Submitting 10 PDF files simultaneously,
           several containing high-resolution images, caused token usage to spike beyond free-tier
           limits. A more measured approach of processing files one at a time or
           compressing/resizing images before upload would be appropriate for subsequent
           testing.



7. Conclusions

           This project successfully covered the full stack from bare-metal server configuration to
           AI agent framework deployment. Ubuntu Server was installed and configured with SSH
           key authentication, NVIDIA GPU drivers were installed and verified, Docker was set up,
           and NemoClaw was installed and brought to an operational state.

           NVIDIA's claim that NemoClaw represents the "OS of AI" is ambitious, and based on this
           initial exploration, the framework does show genuine potential. The agent demonstrated
           autonomous workspace organisation and was capable of receiving complex instructions.
           The limitations encountered were almost entirely external: the rate-limited public cloud
           endpoints, rather than problems with the framework itself.

           The key learning from this project is that agentic AI frameworks at this stage of maturity
           are best evaluated with dedicated, private model access. Public free-tier endpoints are
           insufficient for meaningful testing, particularly around the launch period of a new
           product. For future work, configuring NemoClaw with private API keys for a model such
           as Claude or a locally-hosted open-source model (such as Mistral or LLaMA via Ollama)
           would allow the agent's actual capabilities to be properly assessed.

           From a systems administration perspective, the project reinforced the value of SSH key
           management, headless server configuration, and Docker as a deployment platform, all
           of which are central to modern Linux server administration.
 Tobias Weckström                          Linux Servers Project Work   7 (9)
 Haaga-Helia ammattikorkeakoulu            23.3.2026
 ICI003AS2AE-3006



7. Images




The available cloud models in the setup.




Last steps of the onboarding
 Tobias Weckström                      Linux Servers Project Work   8 (9)
 Haaga-Helia ammattikorkeakoulu        23.3.2026
 ICI003AS2AE-3006




Installation complete




First interactions with my-assistant
 Tobias Weckström                                        Linux Servers Project Work            9 (9)
 Haaga-Helia ammattikorkeakoulu                          23.3.2026
 ICI003AS2AE-3006




Later in the afternoon the prompts started timing out.




8.References

NVIDIA Corporation. (2026). NVIDIA/NemoClaw — Run OpenClaw more securely inside NVIDIA
OpenShell with managed inference [GitHub repository]. https://github.com/NVIDIA/NemoClaw
NVIDIA Corporation. (2026). NemoClaw — Deploy safer AI assistants with OpenClaw safety
guardrails. https://www.nvidia.com/en-us/ai/nemoclaw/
NVIDIA Corporation. (2026). NemoClaw Quickstart — NVIDIA NemoClaw Developer Guide.
https://docs.nvidia.com/nemoclaw/latest/get-started/quickstart.html
Canonical Ltd. (2023). Ubuntu Server documentation. https://ubuntu.com/server/docs
Docker Inc. (2023). Install Docker Engine on Ubuntu. https://docs.docker.com/engine/install/ubuntu/
OpenSSH Project. (2023). OpenSSH manual pages. https://www.openssh.com/manual.html

Final report compiled with the help of LLM Claude sonnet 4.6, based on extensive notes and
screenshots taken whilst working on the project.
