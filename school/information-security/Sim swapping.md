# Sim swapping


## Slide 1: Sim swapping

How it’s performed
Consequences
Mitigation



## Slide 2: Introduction

Sim swapping is a form of identity theft, where threat actors attempt to assign your personal phone number to a fresh sim-card.
This allows the perpetrators to access valuable information since many 2fa systems use your phone number to send auth codes.
The means to swapping a sim card varies geographically, some carriers simply send a code to another phone number(why), but in Finland for example it requires strong authentication.



## Slide 3: How to sim swap?

Sim swapping is a serious form of identity theft, which involves someone maliciously assuming your identity and contacting your mobile carrier. 
They claim they need to activate a new SIM card due to phone loss or other reasons.
The scammer(s) usually use phishing, data leaks and other well known recon tactics to gather information on the subject before hand, since these are needed to socially engineer the carrier. Sometimes even bribery and insiders are used.



## Slide 4: Why is it done?

The current trend in sim swapping is to gain access to social media accounts and or crypto wallets, however sim authentication is more common than it probably should be, and the majority of 2fa systems use SMS authentication, for it’s ease of use etc.
The practice of SIM swapping is dominated by young men who are spread around the world but who learn their criminal trade by interacting with each other via the dark web, Discord and Telegram.
The FBI has even issued warnings about sim swapping to people with significant crypto assets.



## Slide 5: Well known sim swap cases

Michael Terpin sim swap -> $24mn crypto losses
Teenagers got access to his email account and got access to most of his crypto wallets.
Terpin Sued AT&T unsuccessfully for $224mn
Some culprits still haven’t gotten caught to this day
Sec gov X account sim swap -> $btc price rose by over $1000
Fake announcement of bitcoin ETF’s
Culprits were absolute amateurs, said to have asked search engines: “what are some signs that the FBI is after you”, “telegram sim swap hack” etc.



## Slide 6: GSM network vulnerability

GSM networks are not as safe as you would think, despite their widespread use in modern communication systems. These networks, often reliant on centralized infrastructure, are vulnerable to a range of threats.
Weak authentication protocols and poor operator oversight can allow hackers to hijack phone numbers, bypassing two-factor authentication and accessing sensitive data. Even with advancements in security, the interconnected nature of GSM systems leaves them exposed to evolving cyber threats, making robust safeguards and user awareness critical to reducing risks.



## Slide 7: Different GSM protocols and their safety

Mobile networks evolved from 2G’s weak security to 5G’s robust 256-bit encryption and privacy features, yet vulnerabilities like IMSI catchers and legacy downgrades are still legitimate threats.
2G(GSM) Weak encryption (A5/1, A5/2(64-bit key, stream cipher) easily cracked), vulnerable to interception and SIM cloning.
3G(UMTS) and newer use block cipher, stronger encryption (KASUMI, 128-bit key), mutual authentication, but still susceptible to base station spoofing.
4G(LTE) Robust AES 128-bit encryption, secure key exchange, though IMSI catchers can downgrade to 2G/3G vulnerabilities.
5G(NR) Enhanced encryption (AES 256-bit), SUCI hides IMSI



## Slide 8: SIM swap mitigation

Optimize from 2FA to MFA, more factors of authentication == harder time for bad guys.
Do not use pin codes such as 1234 or 0000, this is something people rarely think about nowadays, since smartphones don’t necessarily even ask for the pin code when restarting.
Avoid SMS 2FA, use app-based authenticators such as Google authenticator.
Limit exposure, don’t link your number to critical accounts, for example crypto accounts.



## Slide 9: Bonus: VirVe (Nice to know)

Finland’s Virve (Suomen ViranomaisVerkko), the world’s first nationwide TETRA network (since 2002), served public safety with secure voice and limited data across 1,300+ base stations.
TETRA Era: Encrypted 380–400 MHz, group calls, 60,000+ users—reliable but narrowband (14.4 kbps).
Why Switch?: Growing need for broadband (video, images) outpaced TETRA’s capacity; tech lifecycle ends by 2028.
Virve 2.0 (LTE/5G): Rolling out 2023–2028 via Elisa’s 4G/5G network, it offers high-speed data, AES encryption, and seamless hybrid operation with TETRA until fully phased out.



## Slide 10: Thank you for listening!

Questions
Critique



## Slide 11: references

https://commsrisk.com/the-story-of-a-24mn-sim-swap/
https://owasp.org/www-community/controls/SIM_swapping_prevention_guidelines
https://www.fbi.gov/contact-us/field-offices/sanfrancisco/news/press-releases/fbi-san-francisco-warns-the-public-of-the-dangers-of-sim-swapping
https://www.theregister.com/2025/02/11/sim_swapped_guilty_plea/
https://www.theregister.com/2024/01/09/sec_bitcoin_etf_hacked/
https://fi.wikipedia.org/wiki/Virve_(verkko)
https://en.wikipedia.org/wiki/TETRA

