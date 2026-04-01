Feedback on UML 2023-s

<img src="media/image1.png" style="width:6.54779in;height:6.9887in" />

Very comprehensive! 😊

Minimum viable product ?

- reserve

- cancel

- identify

<!-- -->

- how do we get and keep resident information up to date? How does necessary data get in?

- how do we get new sauna slots?

- how are residents invoiced according to reservations? IS money involved ?

<img src="media/image2.png" style="width:6.69306in;height:5.49861in" alt="A screenshot of a computer program Description automatically generated" />

Great! 😊

- Do you find anything to correct? Is there a tiny contradiction?

<img src="media/image3.png" style="width:6.10432in;height:7.77639in" alt="A paper with text and words Description automatically generated" />

- If the user wants to reserve 2 sauna slots, does she / he have to log in twice?

- **Vocabulary**: does the user want to “create a booking entry”\
  OR does he / she want to “reserve a sauna slot”?

- **We a specifying the use cases in order to**

1.  to understand the system (precisely) ourselves (as a designer / analyst)

2.  to **get** **feedback** from the customer / stakeholder have we understood it right

- Check the arrow ends:

<img src="media/image4.png" style="width:3.94377in;height:1.75829in" alt="A diagram of a function Description automatically generated" />

<img src="media/image5.png" style="width:4.71518in;height:2.8116in" alt="A diagram of a banking system Description automatically generated" />

Picture copied from <https://creately.com/blog/diagrams/use-case-diagram-relationships/>

<img src="media/image6.png" style="width:6.69306in;height:3.31389in" alt="A diagram of a company Description automatically generated" />

- **Use case diagrams do NOT specify processes but <span class="mark">services</span>!\**
  (Do not sepcify what happpens first and what next and so on = process)\
  Must sauna be heated always when someone makes a reservation (include)?

- Compiling an invoice (=service) does not require the invoice being paid (even that is wanted).

- Does the resident pay the invoice WITHIN this system – or through his bank services?

<img src="media/image7.png" style="width:6.69306in;height:0.76736in" />

<img src="media/image8.png" style="width:6.69306in;height:1.57292in" alt="A white rectangular box with black text Description automatically generated" />

| ID | A1 |
|----|----|
| Name | Sauna reservation |
| Actor | Tenant |
| General Description | Being able to reserve sauna as a tenant |
| Outcome | Reserve a slot |
| Priority | Priority on the tenant that reserves first |
| Frequency | One time a day |
| Precondition | That there is a free slot |
| Normal Progress | User opens application, sees the open slots of the day and then reserves it. |
| Exceptions | No sauna slots available. |

- Too general, no step-by-step between the user and the system

- IS anyone (in the world) free to do this – see precondition

- exception handling: what happens if exception is encountered?

<img src="media/image9.png" style="width:6.69306in;height:4.63472in" alt="A diagram of a diagram Description automatically generated" />

- UML is Unified Modelling **Language – use the terms correctly!**

<!-- -->

- an arrow means hierarcy / generalisation / inheritance!\
  according to the diagram,

- Resident is a subtype of ‘Reserve Sauna Slot’ AND a subtype of ‘Reserve Regular Sauna Slot’ ???

- ‘Modify the date of the slot’ is a subtype of a Guest ???

<!-- -->

- Use Cases specify **what can be done with the system**

<!-- -->

- According to the diagramm the caretaker can ‘Clean the sauna occasionally’ **with the system** ??
