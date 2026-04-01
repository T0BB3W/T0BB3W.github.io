# exercise1_tobias_weckström

1 (1)
Tobias Weckström                                          Exercise 1: Installa0on Ubuntu Server
Haaga-Helia University of Applied Sciences                26.1.2026
ICI003AS2AE



Install newest UbuntuServer with LTS

              LTS is an abbreviation for Long Term Support. This of course means it is a stable
              version which is designed for reliability, with extended maintenance periods. Standard
              LTS versions get 5 years of free security and maintenance updates from Canonical.
              Ubuntu Pro extends support to 10 years in a subscription based model, however
              personal licenses are free for up to five devices.

              Three latest release versions are named: 24.04 Noble Numbat, 22.04 Jammy Jellyfish,
              20.04 Focal Fossa.

              Release Notes are the documentation for each new release or version. They contain
              crucial information about the changes of the software and known issues, these things
              are important as an administrator, you really don’t want updates to introduce security
              flaws or other problems to your systems, and this is exactly why LTS is crucial. One
              security flaw as an example, an error that occurs on ubuntu server installations on
              raspberry pi’s: “The power LED on the Raspberry Pi 2B, 3B, 3A+, 3B+, and Zero 2W
              currently goes off and stays off once the Ubuntu kernel starts booting (LP: #2060942)”

              The system requirements are very flexible and minimal for Ubuntu servers, one more
              reason why it is so popular. It supports architectures like amd64, arm64, armhf, ppc64el,
              riscv64, and s390x. Minimum RAM is 1.5 GB for ISO installs or 1 GB for cloud images,
              with 3 GB+ suggested; storage minimums are 5 GB (ISO) or 4 GB (cloud), ideally 25
              GB+. A 1 GHz+ CPU is standard, though needs vary by workload.

Server Installation

              I installed the newest Ubuntu Server already a while ago, to a vm using VirtualBox
              software, the whole process was extremely straight forward and quick, since I had
              previous experience installing and using all sorts of os including linux, on real hardware
              and virtual machines. I assigned the VM 6 gigs of memory, 4 processor cores and 30gb
              of storage on my M4 macbook air and the installation was so quick that I could not even
              comprehend anything from the cli before it was done. I installed ssh packages with the
              os and after it was complete, I continued by updating and upgrading all packages. The
              keyboard questions were quite funny and it gave me Sweden as result, I think it’s the
              same layout as Finnish anyway so it must be correct.
