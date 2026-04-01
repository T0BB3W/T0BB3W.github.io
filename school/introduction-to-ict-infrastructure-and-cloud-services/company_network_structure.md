**DroneSupply ICT Infrastructure Plan**

**1. Company Description**

- **Company Name**: DroneSupply

- **Business Field**: Drone Sales, Configuration & Maintenance

- **Size**: 13

- **Locations**: Medium-sized complex in Vantaa including: Office building connected to the main building that includes small storefront, warehouse section with shipping hangar, workshop section with shipping hangar access.

- **Departments**: Sales & Customer Service, Tech service, Warehouse & Logistics, Administration, IT Department, Marketing & Business Development, Research & Development, Training & Education

- **Key Operations**: Import and sale of drones and drone related services domestically.

**2. IT Device Requirements**

**End-User Devices**

| **Department** | **Number of Users** | **Device Type** | **Specifications** |
|----|----|----|----|
| Sales & Customer Service | 4 | MacBook Air | M2, 8GB RAM, 256GB SSD, 13.6" display, macOS Sonoma. For Zoho CRM, email, docs. |
| Tech Service | 1 | iPad Pro | M2, 128GB, 11", iPadOS 18. For drone diagnostics, configuration apps. |
| Warehouse & Logistics | 4 | MacBook Air (2), iPad (2) | MacBook: M2, 8GB RAM, 256GB SSD. iPad: A14, 64GB, 10.9". For inventory, shipping. |
| Administration | 1 | iMac | M1, 8GB RAM, 256GB SSD, 24" 4.5K display. For accounting, contracts, Google Workspace. |
| IT Department | 2 | MacBook Pro | M2 Pro, 16GB RAM, 512GB SSD, 14". For server management, MDM, troubleshooting. |
| Marketing & Business Dev | 1 | MacBook Air | M2, 8GB RAM, 256GB SSD, 13.6". For campaigns, Google Workspace, web design. |
| Research & Development | 1 | MacBook Pro | M2 Max, 32GB RAM, 1TB SSD, 16". For drone firmware, app dev, simulations. |
| Training & Education | 1 | iPad Pro | M2, 128GB, 11". For training apps, drone demos, Moodle LMS access. |

**Peripherals**

| **Peripheral** | **Quantity** | **Purpose and Features** | **Location** | **Compatible Departments** |
|----|----|----|----|----|
| **HP LaserJet Pro M479fdw** | 2 | All-in-one color laser printer/scanner. AirPrint for macOS/iOS, Wi-Fi, duplex printing, 50-sheet ADF. Secure print (PIN-based) for defense data. Scans to Google Drive for remote access. Prints invoices, contracts, labels. | 1 in Office (Admin/Sales), 1 in Warehouse | Sales, Administration, Warehouse, Marketing |
| **Brother HL-L2350DW** | 1 | Monochrome laser printer. AirPrint, Wi-Fi, compact. For high-volume shipping labels and technical docs. Cost-effective for Warehouse and R&D. | Warehouse (near shipping hangar) | Warehouse, R&D |
| **Fujitsu ScanSnap iX1600** | 1 | High-speed document scanner. AirPrint, Wi-Fi, macOS/iOS-compatible. Scans receipts, contracts to cloud (Google Drive, Zoho). Touchscreen for easy use. | Office (Admin Desk) | Administration, Sales, Marketing |

**3. Operating Systems**

**End-User Devices**

- **Desktop/Laptop OS**: macOS Sonoma 14.x

- **Mobile OS**: iOS 18.x

- **Version standardization**: Mosyle MDM enforces the latest macOS/iOS versions (e.g., Sonoma 14.x, iOS 18.x) unless critical vulnerabilities are reported, with rollbacks coordinated by IT.

**Server Systems**

- **Server OS**: macOS with Server Features

- **Virtualization Platform**: Virtualization Service for macOS Server

**4. Server Infrastructure**

**Server Deployment Model**

- **Model Choice**: Hybrid model

- **Justification**: Hybrid model allows stricter administration of on premises data, for example if doing business with defence contractors, since drone warfare is an increasingly hot topic, the nature of the business could pivot into such. The cloud aspect allows more seamless workflows for personnel working off-premises and or sick leaves.

**Server Types**

| **Server Purpose** | **Physical/Virtual** | **Specifications** | **Location** |
|----|----|----|----|
| File Server | Physical (On-premises) | Mac Mini (M2, 16GB RAM, 512GB SSD, macOS Sonoma), configured with SMB/AFP for file sharing, FileVault for encryption, Time Machine for backups. Hosts shared folders for Sales (contracts), R&D (designs), Marketing (assets), and Administration (records). Synology NAS (192.168.1.11) uses Time Machine for daily encrypted Mac Mini backups, rsync for VM snapshots, and Backblaze for offsite cloud backup. | Secure server room in Office |
| MDM Server | Cloud (Virtual) | Mosyle MDM (cloud-hosted), managing 13+ macOS/iOS devices. Configures policies for Tech Service (diagnostic iPads), Training (iPhones), and Administration (laptops). Supports remote wipe/lock for defense data security. | Cloud (accessible by it dept.) |
| Inventory & Logistics | Virtual (On-premises) | Ubuntu VM via Parallels Desktop on Mac Mini (4GB RAM, 2 CPU cores, 100GB storage). Runs Odoo or similar ERP for warehouse stock tracking, shipping logs, and logistics. Secured with restricted access for defense contractor compliance. | Office (synced to cloud for remote access) |
| CRM & Sales | Cloud (Virtual) | Zoho CRM (cloud-hosted), integrated with macOS/iOS apps for Sales & Customer Service. Manages customer data, leads, and orders. Encrypted for sensitive client data (e.g., defense contractors). | Cloud (accessible by sales dept.) |
| Testing & Development | Virtual (On-premises) | Linux VM via Parallels Desktop on Mac Mini, 4GB RAM, 100GB storage, for drone firmware testing, local access only. | Office (local access only) |
| Collaboration Server | Cloud (Virtual) | Google Workspace (cloud-hosted), providing email, Google Drive, and Docs for Marketing, Administration, and Training. Enables off-premises access for sick leave or remote work. Encrypted for compliance. | Cloud (accessible remotely by all staff) |
| Training Platform Server | Virtual (On-premises) | Linux VM via Parallels Desktop on Mac Mini (2GB RAM, 1 CPU core, 50GB storage). Runs Moodle or similar LMS for drone operation training courses. Local for control, with cloud backup for remote access. | Office (synced to cloud) |

**5. Network Infrastructure**

**Network Topology**

- **Design**: Star Topology with VLAN Segmentation

  - Central core switch in office server room connects all devices (Mac Mini, printers, APs).

  - VLANs: 10 (Office), 20 (R&D, Tech Service), 30 (Warehouse), 40 (Guest Wi-Fi), 50 (Management).

  - Simplifies management, secures defense data, supports hybrid workflows.

- **Internet Connection**:

  - **Primary**: 1Gbps fiber. For cloud services, file sharing, VMs.

  - **Secondary**: Starlink Business. For failover, remote work.

- **Redundancy Plan**: Dual WAN failover (fiber to Starlink). UPS (APC 1500VA) powers router, switch, Mac Mini. Ensures uptime for MDM, CRM, file server.

**Network Devices**

The network devices support the star topology, VLANs, and hybrid model, ensuring connectivity, security, and manageability for DroneSupply’s operations. All devices are macOS/iOS-compatible and enterprise-grade for reliability.

| **Device Type** | **Quantity** | **Location** | **Purpose** |
|----|----|----|----|
| **Router** (Ubiquiti Dream Machine Pro) | 1 | Office (server room) | Central router and firewall. Manages 1Gbps fiber + Starlink dual WAN failover. Supports VLANs (10, 20, 30, 40, 50) for secure traffic segmentation. Runs VPN for remote access to file server/VMs. macOS/iOS-compatible management via UniFi app. |
| **Core Switch** (Ubiquiti UniFi Switch Pro 24 PoE) | 1 | Office (server room) | Central switch connecting all devices (Mac Mini, NAS, printers, APs). 24 ports, 400W PoE for APs and IP cameras. Supports VLANs for secure data isolation (R&D, Warehouse). Layer 2+ management for QoS (prioritize CRM, MDM traffic). |
| **Access Switch** (Ubiquiti UniFi Switch Lite 8 PoE) | 2 | 1 in Warehouse, 1 in Workshop | Connects local devices (printers, iPads, MacBooks). 8 ports, 52W PoE for APs. Supports VLANs (30 for Warehouse, 20 for Tech Service). Compact for small spaces. Managed via UniFi app for IT simplicity. |
| **Wireless AP** (Ubiquiti UniFi 6 Lite) | 4 | 1 in Office, 1 in Warehouse, 1 in Workshop, 1 in Storefront | Provides Wi-Fi for macOS/iOS devices (MacBooks, iPads, iPhones). Wi-Fi 6 (1.2Gbps), supports VLANs (10, 30, 40). Seamless roaming across complex. Guest Wi-Fi (VLAN 40) for visitors. Managed via UniFi app. |
| **Firewall** (Integrated in Ubiquiti Dream Machine Pro) | 1 | Office (server room) | Protects network with DPI, IPS/IDS, and firewall rules. Blocks unauthorized access to R&D/Tech Service VLANs. Secures VPN and cloud traffic. Included in router, no separate device needed. |

**6. IP Addressing Scheme**

**Network Segmentation**

| **Network Segment** | **IP Range** | **Subnet Mask** | **CIDR** | **Purpose** |
|----|----|----|----|----|
| Management | 192.168.1.0-255 | 255.255.255.0 | /24 | Network devices (router, switches, APs), Mac Mini server, NAS, UPS. |
| Office | 192.168.2.0-255 | 255.255.255.0 | /24 | Staff devices (MacBooks, iMac) for Sales, Administration, Marketing, IT. Includes office printers, scanner, meeting room equipment. |
| R&D/Tech Service | 192.168.3.0-255 | 255.255.255.0 | /24 | R&D MacBook, Tech Service iPad, workshop printer, DJI diagnostic kit. For sensitive drone data (defense compliance). |
| Warehouse | 192.168.4.0-255 | 255.255.255.0 | /24 | Warehouse MacBooks, iPads, Zebra printer. For inventory and shipping. |
| Guest | 192.168.5.0-255 | 255.255.255.0 | /24 | Visitor devices, training demo devices. Isolated from internal networks. |

**DHCP Scope**

- **Staff Range**:

  - Office (VLAN 10): 192.168.2.50 - 192.168.2.200 (~150 IPs, 24-hour lease)

  - R&D/Tech Service (VLAN 20): 192.168.3.50 - 192.168.3.200 (~150 IPs, 24-hour lease)

  - Warehouse (VLAN 30): 192.168.4.50 - 192.168.4.200 (~150 IPs, 24-hour lease)

  - Purpose: Dynamic IPs for MacBooks, iMac, iPads, and temporary staff devices.

- **Guest Range**:

  - Guest (VLAN 40): 192.168.5.50 - 192.168.5.200 (~150 IPs, 1-hour lease)

  - Purpose: Dynamic IPs for visitor/training devices, internet-only access.

- **Reserved Addresses** (Static IPs):

| **Device** | **VLAN** | **Static IP** | **Purpose** |
|----|----|----|----|
| Mac Mini (File Server) | Management | 192.168.1.10 | Hosts file server, inventory VM, testing VM. |
| Synology DS923+ NAS | Management | 192.168.1.11 | Secondary backups for file server, VMs, Time Machine. |
| APC Smart-UPS 1500VA | Management | 192.168.1.12 | UPS monitoring for server power management. |
| Ubiquiti Dream Machine Pro | Management | 192.168.1.1 | Router, firewall, VPN, DHCP server. |
| UniFi Switch Pro 24 PoE | Management | 192.168.1.2 | Core switch for all VLANs, PoE for APs. |
| UniFi Switch Lite 8 PoE (Warehouse) | Management | 192.168.1.3 | Access switch for warehouse devices. |
| UniFi Switch Lite 8 PoE (Workshop) | Management | 192.168.1.4 | Access switch for workshop devices. |
| UniFi 6 Lite AP (Office) | Management | 192.168.1.5 | Wi-Fi for office staff, peripherals. |
| UniFi 6 Lite AP (Warehouse) | Management | 192.168.1.6 | Wi-Fi for warehouse staff, iPads, printer. |
| UniFi 6 Lite AP (Workshop) | Management | 192.168.1.7 | Wi-Fi for Tech Service iPad, workshop devices. |
| UniFi 6 Lite AP (Storefront) | Management | 192.168.1.8 | Wi-Fi for storefront staff, guests. |
| HP LaserJet Pro M479fdw (Office) | Office | 192.168.2.10 | Printer/scanner for Sales, Administration, Marketing. |
| Fujitsu ScanSnap iX1600 | Office | 192.168.2.11 | Scanner for Administration, Sales. |
| Apple TV 4K | Office | 192.168.2.12 | Meeting room presentations, hybrid meetings. |
| LG 55" 4K Smart TV | Office | 192.168.2.13 | Meeting room display, AirPlay-compatible. |
| Logitech Rally Bar Mini | Office | 192.168.2.14 | Video conferencing for hybrid meetings. |
| HP LaserJet Pro M479fdw (Warehouse) | Warehouse | 192.168.4.10 | Printer/scanner for inventory, shipping labels. |
| Zebra ZD421 Label Printer | Warehouse | 192.168.4.11 | Thermal printer for shipping labels, inventory tags. |
| Brother HL-L2350DW | R&D/Tech Service | 192.168.3.10 | Printer for technical docs, R&D/Tech Service. |
| DJI Drone Diagnostic Kit | R&D/Tech Service | 192.168.3.11 | Diagnostic tool for drone repairs, configuration. |
| R&D MacBook Pro | R&D/Tech Service | 192.168.3.12 | Static IP for sensitive drone development, testing. |
| Tech Service iPad Pro | R&D/Tech Service | 192.168.3.13 | Static IP for drone diagnostics, configuration apps. |

**7. Network Diagrams**

<img src="media/image1.png" style="width:6.88958in;height:4.27014in" alt="A diagram of a network" />

**8. Security Measures**

**Network Security**

- **Firewall Rules**: UDM-Pro with DPI, IDS/IPS. Block inbound traffic except VPN/HTTPS; restrict VLAN 20/50; allow VLAN 40 internet-only.

- **VLANs**: Segment via VLAN 10 (Office), 20 (R&D/Tech Service, restricted), 30 (Warehouse), 40 (Guest, isolated), 50 (Management, IT-only).

- **Remote Access**: UDM-Pro L2TP/IPSec VPN, AES-256, Mosyle credentials. Secure access to Mac Mini, internal resources.

**Endpoint Security**

- **Antivirus/EDR**: CrowdStrike Falcon (macOS/iOS). Antivirus, threat detection for 13 devices.

- **Patch Management**: Mosyle MDM automates macOS/iOS updates, schedules off-hours, ensures compliance.

- **Access Controls**: Mosyle MDM + FileVault. Role-based access, encryption, IT-only admin, Google Workspace SSO.
