# InstallingLinuxVBox 1.5 JLS

1



Installing Linux in VirtualBox
Updated 29.9.2018: memory disk, space and pictures JLS

   1. Install VirtualBox (if not in your PC. At the school: classes 5004 and 5005 have the application)
      Download VirtualBox (https://www.virtualbox.org/)
      Double click the downloaded file to install VirtualBox
      Accept default settings of the installation

   2. Download Ubuntu desktop (https://www.ubuntu.com/download/desktop )

       NOTE: torrent download may not work (if firewall prevents). Use mirror downloads.

       Name of the downloaded file is something like:
       ubuntu-18.04.1-desktop-amd64.iso (64 bit version)
       ubuntu-18.04.1-desktop-i386.iso      (32 bit version)
       64 bit version is better but may not work in all computers

   3. Start VirtualBox
   4. Click New

   5. You can use any name but Type must be Linux and Version must be 64 bit or 32 bit depending on
      the version you are installing. (Ubuntu is not important in Version, number of bits is):
                                                                                                  2


6. Next you have to decide how much memory the virtual computer uses. It depends on the size of
   the memory in your computer and on how many virtual computers you want to run
   simultaneously. 4096 MiB is a safe bet. You can change it later if necessary.




7. Create a virtual hard disk.
                                                                                                          3


8. Hard Disk Type; VDI is best here:




9. Select if Virtual Hard Disk file should grow as it is used or if it should be created as maximum size.
   Hints: Dynamically allocated is better for experiments. Fixed size is a bit faster. Use it in production
   servers.
                                                                                                          4



10. Select Virtual Hard Disk location and size. Hint: Create Virtual Hard Disk; 40 GiB would be better:
                                                                                         5


11. Now you have created a virtual computer next you need to install Ubuntu in it.

12. Start the virtual computer.




13. When you start a virtual computer the first time you have to select start-up disk.
    Click the yellow/green icon.
    Select the Ubuntu iso file you just downloaded. Click open and then start.
                                                                6


14. From now on you continue with normal Ubuntu installation.




We are installing  select

Please keep the defaults if you don’t know.



15. Select: Normal installation and Download updates…
                                                                                         7


16. Installation type

FYI: This will erase the Virtual disk booked for Ubuntu (earlier) – not the whole disk

S0, you can keep the default




You will get a few more questions, e.g.

-     Where are you?

and

-     Who you are




Please fill in!
                                                                                                          8




17. When the installation is (finally) ready you are asked to remove the installation media. Just click
    Ok. Press enter if you are asked to. The Virtual computer should restart.
18. Start the virtual Ubuntu (if it didn’t restart automatically).

19. When Ubuntu is running and you have logged in select Install Guest Additions CD image… in
    Devices menu. In Ubuntu installation of guest additions starts now automatically.




    When installation is ready reboot the virtual computer. Now everything should work.
                                                                                             9


Additional

If the virtual computer does not restart close the window. Select Power of the machine.




If you think the Virtual machine is too slow, please increase amount of the processors (in
VirtualBox).
