<table>
<colgroup>
<col style="width: 54%" />
<col style="width: 38%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr>
<th><p>Tobias Weckström</p>
<p>Haaga-Helia University of Applied Sciences</p>
<p>ICI003AS2AE-3006</p></th>
<th><p>Exercise 18</p>
<p>26.2.2026</p></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Apache 2

1\. To find out if apache 2 is installed use ‘sudo systemctl status apache2’. In my case it was not installed so I ran ‘sudo apt install apache2’ and checked it was running, after which I used ‘sudo systemctl stop apache2’ to stop it, and then I started working on the other useful commands etc.

2\.

<img src="media/image1.png" style="width:2.94892in;height:1.42073in" alt="A screenshot of a computer AI-generated content may be incorrect." />

There seem to be only a few available config files in the conf dir’s and the mods-available had atleast 120+ mods there according to my quick glance. The enabled mods only seemed to be 29 which makes sense in a fresh install. In the sites available there was only one config ‘000-default.conf’ so I decided to take a look at it using nano, since it was the only enabled site aswell.

<img src="media/image2.png" style="width:3.46296in;height:2.92379in" alt="A screen shot of a computer AI-generated content may be incorrect." /><img src="media/image3.png" style="width:3.37679in;height:2.28217in" alt="A screenshot of a computer screen AI-generated content may be incorrect." />

3-5 I added my own test.html file to the folder which I renamed to index.html and overwrote the sample file. I used ‘sudo a2enmod userdir’ and ‘systemctl restarty apache2’ to restart the system. I believe the a2enmod means “apache2 enable mod” atleast this will help me remember, so to disable it would be a2dismod which seems to work correctly.

6\. First ‘cd’ to home folder and then ‘mkdir public_html’, can check after creation with ls.

<img src="media/image4.png" style="width:6.88958in;height:4.19653in" alt="A computer screen with text and images AI-generated content may be incorrect." />

7-9 I spent several hours trying to get the VM to be able to communicate with my Mac which it is running on so I could access it through my browser…. Had a lot of issues but it all boils down to VirtualBox NIC management, or it could also be VPN residues or similar since I use those, I could not find working solutions, which makes the dhcp not really work or assign any ip addresses to the ubuntu. So I manually added ip addresses and still couldn’t get it to work after disabling firewalls and everything. Eventually I just ‘curl localhost’ from the vm itself to get the webpage I have in the /var/www/html loaded, to in fact see that the apache2 is working as supposed (even though we could come to this conclusion by just taking the status earlier too). I also did the rest of the assignment and password protected everything I just didn’t document that so exactly since my frustration of the network problems… however the password for the tiku user was “tiku1”, just so I don’t forget.
