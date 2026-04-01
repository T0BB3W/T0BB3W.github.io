# exercise13_tobias_weckström

1 (1)
Tobias Weckström                                         Exercise 13
Haaga-Helia University of Applied Sciences               12.2.2026
ICI003AS2AE-3006



Processes

            1. What are the processes?

                Any running program is a process, processes have an owner, PID, priority, and
                controlling terminal. A daemon process is sort of a “lesser” process, which usually
                doesn’t have a terminal, and is system controlled, so basically it powers on and of
                with the system by default.

            2. How would you list all the process in your server?

                Using the man pages I found out that using ‘ps -el’ allowed me to see all processes
                in a long format.

            3. Save this list into the file called: ”yourname_processes”

                I saved the list using ‘ps -el > deesa_processes’ and after that I used nano to open it
                to check it out.

            4. (5)Tell also the command to find if ssh is running on your server

                ‘systemctl status ssh’ I found out it was not running so I used ‘sudo systemctl start
                ssh’ to start it. You can also use ‘sudo systemctl enable ssh’ to have it start on
                startup, this is pretty good for server use cases because let’s face it, you will need
                ssh to use a server most times.
