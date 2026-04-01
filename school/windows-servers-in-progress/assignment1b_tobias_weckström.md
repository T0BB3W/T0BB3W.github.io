# assignment1b_tobias_weckström

Tobias Weckström                                    Assignment 1 b                            1 (1)
Haaga-Helia University of Applied Sciences
ICI001AS2AE-3006
                                                    4.3.2026



DHCP

                         DHCP is short for Dynamic Host Configuration Protocol. It’s a widely used
                         IP protocol and offers immense value since it automatically assigns ip
                         addresses to devices connected to the network using a client-server
                         architecture.

                         The value in this protocol is derived from the fact that you are not required
                         to individually configure network devices manually. DHCP services are
                         available for networks running IPv4 & IPv6 protocols, although the IPv6
                         version is often called DHCPv6.

                         DHCP can be implemented on networks of many sizes ranging from home
                         networks to large Internet Service Provider networks. Most residential
                         network routers have DHCP server capability.

                         DHCP can allocate the addresses as follows:

                         •   Dynamic allocation, network admin reserves a range of IP addresses,
                             each client requests an address from the DHCP server, addresses are
                             leased meaning that the server can reclaim and reallocate the IP
                             addresses that are not renewed inside a controllable time period.

                         •   Automatic Allocation, basically same as dynamic, except the DHCP
                             server permanently assigns an address for the client. Past IP address
                             assignments are tabled by the DHCP server, so that it can assign the
                             client with the same address as before if possible.

                         •   Manual/Static Allocation, network admin maps a unique identifier
                             (client id/mac address) for each client to an IP address, which is
                             offered to the requesting client. This means that the client can retain
                             the address if the identifier or mac address doesn’t change, for
                             example changing the network adapter on your PC could mess things
                             up…



References: https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol
