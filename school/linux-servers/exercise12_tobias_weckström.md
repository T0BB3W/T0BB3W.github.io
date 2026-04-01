# exercise12_tobias_weckström

1 (1)
Tobias Weckström                                           Exercise 12
Haaga-Helia University of Applied Sciences                 9.3.2026
ICI003AS2AE-3006



SSH part 2

             Installation of ssh if not already installed in os setup: ‘sudo apt update’ -> ‘sudo apt
             install openssh-server’ OpenSSH starts automatically after installation, to verify it is
             running: ‘sudo systemctl status ssh’.

             The key locations after install are: /usr/sbin/sshd /etc/ssh/ and /etc/ssh/ssh_host_* for
             host keys. It is a background daemond managed by systemd so you cant really “see” it
             in a directory as an program/process.

             The main configuration file is /etc/ssh/sshd_config which controls the SSH server, what
             the server allows/denies. The ssh_config controls the SSH client default settings for
             connecting outward, and ssh_config.d is a drop in directory for modular client config
             snippets.

             Testing the connection from localhost or another machine, use: ssh
             username@server_ip and if the port is changed add in ‘-p 2222’ between ‘ssh’ and
             ‘username@server_ip’. A successful test will prompt the connector with a password, or
             will pass straight through if using encryption keys. After this you will land in the server’s
             shell prompt.
