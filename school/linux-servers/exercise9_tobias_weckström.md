# exercise9_tobias_weckström

1 (1)
Tobias Weckström                                         Exercise 9
Haaga-Helia University of Applied Sciences               10.2.2026
ICI003AS2AE-3006



Admin exercises

            I added a new group using sudo addgroup adminexercise , using cat to verify from the
            groups file in /etc. I created the first user test1 using sudo adduser, and the second test2
            using sudo useradd. The useradd command had me answer a bunch of questions also
            regarding the password which I left blank, after which it prompted me 3 more times
            which I also left blank, it said authentication error and moved on to some secondary
            information such as addresses, contacts etc. the useradd command didn’t prompt me
            anything. I moved the both users to the group adminexercise I created earlier, and
            navigated to the passwd file to find the users and their home directories:




            The ,,, in test1 are the empty fields I described just pressing enter earlier. Also creating
            the users using different commands apparently makes them use different shells, test
            using bash and test2 using sh…

            After creating a new .txt file using touch in the home directory and inspecting further, it
            has 664 permissions. A directory with execute permissions means that the user can
            traverse into it, using cd or exact path name, this is critical to have correct permissions
            here to prevent unauthorized vertical privilege escalation. File execute permissions
            means the file is executable, e.g. can run it as a program/script.
