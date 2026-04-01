# Task 1: Creating a new Windows Server virtual machine in HyperV

Everything was very straightforward, documentation was good and easy to fall back on. This VM will be the base frame for future virtual HyperV server machines, which will be configured later. Some minor tweaks were made to the settings in the Virtual Machine Wizard, including memory allocation and dynamic memory allocation setting set to true. The machine was named WindowsServerTemplate, and the network adapter created earlier was selected. The os installed on this VM was from the bootable image file that could be found on the main VM’s desktop. Processor cores were increased to 4 from the HyperV settings.

# Task 2: Windows server installation

Everything was very straightforward, having installed all different versions of windows before. Just need to remember to eject the ISO file so that it wont boot from that again. Administrator password used was Qwerty789 per instruction.

<img src="media/image1.png" style="width:5.17016in;height:4.38273in" />

# Task 3: Server Manager. Getting to know the server management view

Very simple to read dashboard and easy to find tools from tabs and dropdown menus. The Server Manager is used to install and configure new server programs on the server computer, as well as monitoring status and log info. It is a key tool for managing a Windows domain.

# Task 4: Modeling: Windows server machine initialization

# Task 5: Using the model machine as a basis for several server machines

Sysprep was easy, I had no issues. Sysprep or system prepping means prepping the system for use in another environment. Previously made configs, identifiers, and passwords are removed to make the system neutral, which is good since we will use it as frame for future virtual machines. The sysprep program(exe) can be found via the file explorer but I used the command prompt, since this is a tool everyone working on servers should become familiar with and allows for automatization of configuration using commands.

Task 5 was again very straightforward and basically just to export the mold machine from HyperV into 2 differently named files in a folder called HyperV on the desktop.
