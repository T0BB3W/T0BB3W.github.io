PC parts exercise

General information about the exercise

Note!

**There are computers reserved for this exercise in the cupboard of classroom 5002.**

Do not do the exercise on other computers at Haaga-Helia.

Group members:

**Akseli Laine**

**Harshit Vadera**

**Tobias Weckström**

The aim of the exercise is to learn how to identify computer parts and their meanings, to learn how to do some basic settings in UEFI without the operating system and to share the knowledge with the group members.

How to complete the exercise

Choose one PC per group to carry out the tasks described in this guide.

Take notes during the work.

To answer some of the questions, you will need to search for information on the Internet and in the manual. Write down the necessary information while you are doing the work so that you can look up the information later (the PC manuals are on the course page in Moodle).

The machines are functional. Be careful when opening the machine. The idea is that the machines will still work after this exercise.

**Be careful of static electricity. How?**

Handle components by the edges, place removed components on antistatic mats, touch a grounded metal object or wear an anti-static wrist wrap.

**Do not drop metal objects inside the machine. Why?**

There is a danger of short circuiting

**Do not remove parts unnecessarily. Why?**

More risk of breaking them

**To avoid personal injury and damage to equipment caused by electric shock, the following steps must be taken in the following order? Assume the machine is running.**

1.  Disconnect the power cord (remove all the cables, also remove the screen cable)

2.  Shut off the computer if it’s a laptop

3.  Wait for the computer to completely shut down

 

Other points to note:

**1. UEFI exercise on school machines (to be done at home on a simulator)**

UEFI(**Unified Extensible Firmware Interface**) is a "motherboard program" that is stored in flash memory. UEFI starts the actual operating system and contains the routines needed to process the hardware.

**Update**

Old machines used to use a BIOS program that was permanently programmed into ROM memory. Today's machines use a UEFI program stored in flash memory, which can be reprogrammed. From time to time, motherboard manufacturers release new versions of the UEFI program. The new version can be downloaded from the manufacturer's website and updated with the appropriate software for the motherboard. In this case, make sure that the FLASH update is for the right motherboard.

**Setup**

UEFI includes a setup program to change some settings. Nowadays, most settings are automatic, so "setup" is rarely needed.

Setup can only be enabled before the operating system is started. For about a second at the beginning of a cold boot, the screen will tell you what to do to start setup.

On the machines used in the exercise, setup is started by pressing the F10 function key during a cold boot.

**Password**

In UEFI setup, you can set a password for the machine. The password can be used to protect the boot of the machine or only part of the setup.

Find out how to disable or override the password on your PC. Usually, there is a "jumper" on the motherboard of the machine to "destroy" the password.

 

1.1 How to change the HP8200 Bios password?

**Security \> Create BIOS Administrator Password**

WHEN YOU DEFINE A password, don't forget it. Write it down here:

Make sure the password works. So that "Bios" asks for the password when "setup" is to be started.

**Boot order**

The boot order is the most commonly changed setting.

Check where UEFI tries to boot the operating system. Generally, the CD/DVD drive is specified first and the first hard disk on the machine second.

Under Advanced \> Boot Options, 1st option M.2 SSD 1: Windows Boot Manager, 2nd option USB

**BIOS settings:**

1.2 Find out which setting defines the boot order and change it to the order shown below.

1\. CD/DVD 2. HD 3. USB How to do this setting?

Under Advanced \> Boot Options, the interactive does not provide all functionality as a real bios environment, but by pressing “UEFI Boot Order” you should be able to change it.

1.3 What is the benefit of changing the boot order etc.?

You can have several Operative Systems on different drives in your computer and usb booting is easiest in my opinion when installing new systems

*You can install the os from a usb or cd/ dv deg. If computer hangs up.*

When a power failure causes the machine to shut down what happens after a power failure when the PC "gets power" after the power failure. Find the setting that affects this.

1.4 What does it say happens after a power failure?

I can’t find this particular information in any of the 32 “power” keywords found in the interactive pdf, however usually after power failure the machine boots in some sort of safe mode.

*Setting is not visible in simulator*

*Options are:*

*1. Shut down eg personal computer in LAN network*

*2. Start, work computer*

*3. Start as it was, servers.*

Many current processors include support for hardware-based virtualization.

1.5 What settings need to be changed to make virtualization work?

Advanced \> System Options \> Virtualization Technology (VTx) / Virtualization Technology for Directed I/O (VTd)

 

**Examining the PC**

2\. Memories

There are several types of memory. Memory modules can be classified according to their external dimensions and interfaces, e.g. SIMM and DIMM. There are also different memory technologies such as SDRAM, DDR and Rambus.

Memory speed can be expressed in different ways.

\- The traditional way is to express the time it takes to read a memory in nanoseconds (ns).

\- Nowadays, the speed is expressed either as clock speed or as data transfer rate. For example, the clock frequency can be 400MHz. Memories are usually read eight bytes at a time (64 bits), so at 400MHz, 8B\*400M/s = 3200MB/s can be read. Is this correct?

![](media/image2.jpeg) .

**Questions regarding HP8200 memories:**

Find out the type of memory and answer the following questions. For some of the questions, you may need to look up information later on the Internet or in your computer manuals and do them later.

2.1 Can the memory stick be inserted wrong way? If not, what prevents it?

There is an indent in the RAM, allowing it only to be inserted in a particular way.

2.2 How do you know if the memory is in place properly?

It clicks in place, and the plastic part holding it in place will rise up to secure it

2.3 The motherboard has several slots for memory. Does it matter where you put the first 2 memory chips and why?

Yes it matters, you should put the memory chips in pairs in the first channel in a dual channel motherboard, which is the most common. (*use same colour slots*)

2.4 What is the maximum amount of memory (GB) you can put in the machine?

The hp8200 has maximum capacity of 32gb( 4times 16GB= 64GB)

2.5 What type of memory? (Answer e.g. DIMM or SDRAM etc.).

Non-ECC Unbuffered DIMM

2.6 How large is the memory (MB)?

HP8200 has 2gb ram as standard, which amounts to 2048MB

***One is 16000 MB***

2.7 What is the memory speed?

10600MT/s

***2400MHz***

 

**3. About chipsets**

![](media/image4.jpeg)

A chipset implements "additional functions" on the motherboard such as the control needed for memory, buses and most interfaces.

The chipset affects the features of the machine, such as which processor and memory can be used.

There are several ways to determine the type of chipset. You should check the manual of your machine or motherboard for information. When you boot the machine, the type of motherboard/chipset is often indicated at the bottom of the screen.

Sometimes the chipset type can be found on the motherboard or the circuit may be written on the chip itself. If not, an internet search will tell you which chipset the circuit belongs to.

***( If you want to change the chipset you just get a new motherboard)***

A chipset series task

3.1 Find out which chipset is in the HP8200?

Intel Q57 (Socket 775)

***( HP 8200 intel Q67 express/ HP***

 

**4.Processor**

The processor is the core of the whole computer. The processor is the core of the computer. Although the speed of the memory and the hard disk also have a significant impact on performance.

Usually, you cannot put more than one type of processor on a motherboard. Also, a chipset usually works with only one type of processor. The motherboard also determines the clock speeds used.

Fast processors heat up considerably. That is why we try to cool them in different ways. The faster the processor, often the more heat it generates. At least the processor has a heat sink on top, nowadays also a fan.

Find the answer to the questions in the manuals:

4.1 What is the processor type and clock speed of the HP8200 machines?

The most common types in a hp8200 are Intel Core 2 Duo: 2.66 GHz, 3.00 GHz, 3.33 GHz, or 3.46 GHz, and Intel Core 2 Quad: 2.33 GHz, 2.50 GHz, 2.66 GHz, or 2.83 GHz

4.2 Which socket is in the processor?

755

4.3 What are the different processor options for the motherboard?

Intel Core 2 Duo: E8400, E8500, E8600, or E8700, and Intel Core 2 Quad: Q8200, Q8300, Q8400, or Q8400S

 

**5. Hard disk**

The hard disk is the main data storage medium in a PC. Programs and most data are also stored on the hard disk.

The first hard disks were 5MB in size. Today's disks are more than 100 000 times larger.Today, the hard disk is connected via S-ATA or M.2. Servers usually use SCSI.SATA interface has a separate cable for each disk drive. The cable is much narrower than the PATA interface.

Note that CD drives use the same interface.

Hard disk tasks:

Find the answer to the questions in the manuals except no 5.4.5.1 What type of interface is used for the hard disk? SATA or SATA 3.0

5.2 How many hard disk drives can be installed in an HP800?

There is no model called hp800, the hp8200 also has several submodels, for example the 8200 elite sff typically has space for one 3,5 inch drive, with an option to install a second drive using an hdd caddy in place of an optical drive, supporting a 2,5inch drive

***( 5 sata connectors in hp2800? Hp600)***

5.3 What limits the number of hard disks?

Physical limitations (room inside), sata slots, power supply slots

5.4 What is the size of the hard disk?

3,5inches ***(500 GB \*2 hard drives)***

5.5 What is the difference between the SI system and Microsoft, the most common way of expressing hard disk size?

The main differences revolve around the definition and use of units, The SI system uses powers of 10 for its definitions (1kb=1000 bytes), and Microsoft, along with most software and operating systems, traditionally uses powers of 2 for these measurements in the context of digital storage (1kb=1024 bytes)

5.6 How is the size of a hard disk multiplied according to the SI system?

To the power of 10

**6. Additional cards**

The motherboard is nowadays equipped with e.g. a network interface, a video card and audio circuits. The first additional card to be purchased separately is usually a graphics card, as the one on the motherboard is not sufficient for demanding gaming applications.

For questions about additional cards for the HP8200, see the manuals:6.1 What type of graphics card can you add to the motherboard?

It depends based on specific model form factors, however, most important factors would be the size and power usage.

6.2 What type of network card can you add to the motherboard?

It varies based on the models but usually it has slots for one low-profile PCIe-X1 and one low-profile PCI.

6.3 What other types of slots are available on the motherboard?

Two PCIe x16 slots (one might be occupied by a graphics card)

One PCIe x1 slot

Two PCI slots

***( PCIe) (M.2)***

**7. Other**

The function of a power supply is to convert electricity from the mains into the voltage required by the components of the computer. The power required has been increasing over time.In the first PCs, a 60 W power supply was sufficient.Just a few years ago, office PCs typically had power supplies of 200 to 300W, but today power consumption has dropped to less than 100W at the lowest.Gaming machines have larger power supplies, up to 1kW. The most power is needed at start-up.Therefore, an underpowered power supply can prevent the machine from starting.

The required voltages have also changed. Originally, the processors used a voltage of 5V. In today's processors, the voltage has been lowered to reduce heat dissipation.

Exercises

7.1 Find out what is the power of a power supply?

The computer we are operating on right now, hp prodesk 600 g3 mt business pc, has a 250w power supply

8.Connections

A computer always has interfaces that are needed to connect peripheral devices.Most of the connectors are on the back of the machine. Some connections may also be on the front panel.

Task Connections (manuals)

8.1 What are the connections on the front and rear of the machine and record them here

For the same pc used in the last example;

Front: Audio-out (headphone)/Audio-in (microphone) combo jack, USB 2.0 port with HP Sleep and Charge, USB 2.0 port, USB 3.x ports (2), USB Type-C charging port, and also the case has a slot for an memory card reader, but the motherboard does not support it.

Rear: Audio-in jack, DisplayPort monitor connectors (2), USB 2.0 ports with Wake from S4/S5 (2), USB 3.x ports (4), Audio-out jack for powered audio devices, RJ-45 (network) jack, Power cord connector, and there is also an optional port.

***Latest: USB4 2.0***

9\. Name the parts numbered in the figure.

1\. Power Supply

2\. Heat sink/fan

3\. cr2032 battery

4\. SATA3

5\. X16PCIEXP

6\. X4PCIEXP

7\. X1PCIEXP1

8\.

9\. CMOS

10\. RAM slots

11\. Disk Drive, specifically in the picture HDD drives

12\. Power cord

13\.

14\. HDD LED

15\. SATA cable

<img src="media/image4.jpg" style="width:6.4883in;height:5.1143in" alt="A computer case with a fan and wires Description automatically generated" /><img src="media/image5.jpg" style="width:6.47917in;height:4.91683in" alt="A computer with a fan and wires Description automatically generated with medium confidence" />
