# exercise16_tobias_weckström

1 (2)
Tobias Weckström                                          Exercise 16
Haaga-Helia University of Applied Sciences                9.3.2026
ICI003AS2AE-3006



Find

             Task1: Finding a file with the name test.txt in the home directory is as follows: ‘find
             /home/deesa -type f -name “test.txt”’

             Task2:




                                                             after the last command it basically crawls
the entire filesystem and floods the screen because we did it from root without specifying the docs
directory. But if we used the same command as earlier it would still have the same functionality, so I
believe maybe the task description is flawed in the wording.
               Task3:
 Tobias Weckström                                      Exercise 16                               2 (2)
 Haaga-Helia ammattikorkeakoulu                        9.3.2026
 ICI003AS2AE-3006




Task4:

Task5:




            We use the -i flag which stands for interactive, because it prompts us with a confirmation
            before deleting each file, because sometimes using the find command can affect many
            files at once, so it acts as safety to prevent accidental mass deletion of files.

            Task6: The ‘find . -type d’ command finds and lists all Directories located in the path you
            are in, so in the home directory it shows only a couple directories but from / it will show
            every single directory on the system flooding the screen.

            Task7: find . -mtime 7 , and using the command in the home directory returns nothing
            since I have been doing the exercises as root.

            Task8: The idea behind the command is that find hands each file to grep which opens it
            and checks if “pattern” exists inside, if it does the -l prints just the filename.
