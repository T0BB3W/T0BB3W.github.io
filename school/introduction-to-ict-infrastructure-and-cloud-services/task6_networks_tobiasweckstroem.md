# Search and explain what Telnet and SSH are.

Telnet is one of the earliest network protocols (1969), it is a simple text-based protocol for remote command-line access to devices over a network. It transmits data, including passwords as plaintext, which is not very good for todays standards. Only use cases I can think of today are accessing legacy systems, and educational purposes.

SSH (secure shell protocol) is a cryptographic network protocol for operating network services securely over unsecured networks. It’s most notable applications are remote login and command-line execution. It was designed as a replacement for Telnet. You basically need to have access to the private key created by either SSH client or SSH server to decrypt the data that was encrypted using the public key. The SSH client is almost always pre-installed on most linux distributions, however the SSH server is often not, this is also the case for newer Windows distributions, Windows 10 v1809 and later.

# Search and explain with your own words why there are multiple different protocols, eg. http, https, etc

There are multiple different protocols since their use cases differ, the encryption, compression, compatability and other variables differ, which makes certain protocols more reliable, secure or faster than others. For example you can not access onion links through regular web browsers, since the Tor network requires all users to encrypt and route their traffic for anonymity.

# Draw how your home network is built. Describe the connection types between devices, (e.g. LAN, WLAN, WAN)

<img src="media/image1.jpeg" style="width:4.42708in;height:3.45594in" alt="A diagram of a network AI-generated content may be incorrect." />

# Resolve what your private IP address is and what your public IP address is.

Winkey + r, type cmd and press enter. Write ipconfig into console and press enter for results. IPv4 Address would be your private ip.

You can find the public IP address for example by going into your routers interface through a web browser and typing in 192.168.1.1, then after logging into the router as an admin you can see WAN IP, Gateways, DNS-Servers etc. There are also other ways to find out the public IP but in a home setting where you are the admin of the network, this is probably the most user friendly method.

## Sources:

<https://en.wikipedia.org/wiki/Telnet>

<https://en.wikipedia.org/wiki/Secure_Shell>
