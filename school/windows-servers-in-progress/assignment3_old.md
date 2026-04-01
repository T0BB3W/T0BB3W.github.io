# assignment3_old

Tobias Weckström                                     Assignment 3                               1 (2)
Haaga-Helia University of Applied Sciences
ICI001AS2AE-3004
                                                     11.2.2025



Task 1: Control Server Chassis Configuration

                         This was set up using the file WindowsServer_DC.vhdx we created in last
                         assignment, setup was easy, since we already did similar actions earlier.

Task 2: Control server configuration

                         Setup and logging in was easy, let’s configure the static IP address of the
                         control server to use as 10.208.0.0/24 for HyperV. In server manager
                         under local server I pressed the blue text next to the Ethernet section to
                         change to the static IP address given in the assignment. After setting it up I
                         got the windows notification if I should allow this pc to be discoverable by
                         other pc’s and devices on this network, I pressed yes so I don’t have to do
                         the 2.3 assignment.

                         I didn’t get the same IP address as specified in the assignment while using
                         `nslookup haaga-helia.fi` (94.237.113.214), but this might just be old
                         information in the documentation. In 2.6 i gave the computer name
                         Controller-Weckstrom , since I don’t know if using ’ö’ might be problematic
                         later.

                         2.7 Disabling the lock screen, this will be beneficial regarding automation
                         and such, since it can cause deadlocks. I searched for gpedit.msc and ran
                         the program, from where I could enable the ”Do not display the lock
                         screen” option.

                         2.8 Was very straightforward aswell and got no errors, however after
                         running `slmgr /ato` once I got the correct notification which I closed, so I
                         ran the command again to grab a screenshot but then I was given the
                         ’wrong’ notification? Hopefully this didn’t break anything.

Task 3: Installing the Control Server’s software

                         Installation step 1 is about installing the AD DS server software on the VM,
                         this was very easy since almost nothing was to be changed.

                         Step 2 is about domain configuration. I named my forest Weckstrom.lan
                         and set the password to Qwerty789. In a real environment the password
                         should not be the same as the machine admin password, since it’s a
                         security risk. Proceeded to go forth with the installation, after which the
                         server restarted. Now the HyperV VM we just configured is a control
                         server. I shut down the control server from HyperV, and shut down the
                         azure labs machine since I’m not using it anymore right now. The latter
                         parts of the document were marked N/A and I couldn’t find the DHCP
                         program on my azure labs machine either so I guess this was it. See the
                         screenshot attached for confirmation.
Tobias Weckström                             Assignment 3   2 (2)
Haaga-Helia University of Applied Sciences
ICI001AS2AE-3004
                                             11.2.2025
