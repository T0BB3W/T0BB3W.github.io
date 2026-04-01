> <img src="media/image1.png" style="width:2.43096in;height:0.98091in" alt="A logo with green squares Description automatically generated" />
>
> \<Project name\>

<table style="width:87%;">
<colgroup>
<col style="width: 54%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><p>&lt;Client&gt;</p>
<p>&lt;Product Owner&gt;</p>
<p>&lt;Team name&gt;</p>
<p>&lt;Project manager name&gt;, project manager</p>
<p>&lt;Team member&gt;</p>
<p>&lt;Team member&gt;</p>
<p>&lt;Team member&gt;</p></th>
<th style="text-align: right;"><p>Requirements Specification</p>
<p>&lt;version number&gt;</p>
<p>&lt;date&gt;</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Requirements Document version log

\<File name\>

\<File location\>

Document approvals

| Version | Date approved | Approved by |
|:-------:|---------------|-------------|
|  1.0 H  |               |             |
|         |               |             |

Document versions

| Version | Save date | Summary of updates | Authors |
|:-------:|-----------|--------------------|---------|
|         |           |                    |         |
|         |           |                    |         |

Document Versioning Instructions

Version numbering starts with the notation 0.1 D and continues as 0.nn D, where D stands for draft. When the first meeting of the project approves the document, it receives version number 1.0 A, where A stands for approved. If changes are made to the approved document, the next version number is 1.1 D, and numbering continues as described above. The whole number part of the document's version number changes only when the steering committee approves the document (→ 2.0 A).

> \* \* \*

This document is the Requirements Specification template, a guide for the requirements authors. When creating your own project's requirements specification, enter your project's details within the angle brackets \<..\> and remove all instructional text (typically in blue)

# Contents

[Orientation [2](#orientation)](#orientation)

[1.1 Purpose of the Document [2](#purpose-of-the-document)](#purpose-of-the-document)

[1.2 Parties involved [2](#parties-involved)](#parties-involved)

[1.3 Project Background [2](#project-background)](#project-background)

[1.4 Project Objectives [2](#project-objectives)](#project-objectives)

[1.5 Project Boundaries [2](#project-boundaries)](#project-boundaries)

[1.6 Project Environment and other Constraints [2](#project-environment-and-other-constraints)](#project-environment-and-other-constraints)

[1.7 Glossary [2](#glossary)](#glossary)

[2 General Description [3](#general-description)](#general-description)

[2.1 Process description [3](#process-description)](#process-description)

[2.2 Stakeholders [3](#stakeholders)](#stakeholders)

[2.3 Narratives / User Stories [3](#narratives-user-stories)](#narratives-user-stories)

[3 Functional Requirements [4](#functional-requirements)](#functional-requirements)

[3.1 Requirements [4](#requirements)](#requirements)

[3.2 Use Cases [4](#use-cases)](#use-cases)

[3.2.1 Use Case \<use case name\> [4](#use-case-use-case-name)](#use-case-use-case-name)

[3.3 Data [4](#data)](#data)

[3.3.1 Conceptual Model / Data Model [4](#conceptual-model-data-model)](#conceptual-model-data-model)

[3.3.2 Data Dictionary / Repository [4](#data-dictionary-repository)](#data-dictionary-repository)

[3.4 Specific Algorithms and Processing [4](#specific-algorithms-and-processing)](#specific-algorithms-and-processing)

[3.5 UI [4](#ui)](#ui)

[3.6 Reports [4](#reports)](#reports)

[3.7 Interfaces to other IT systems [4](#interfaces-to-other-it-systems)](#interfaces-to-other-it-systems)

[4 Non-functional Requirements [5](#non-functional-requirements)](#non-functional-requirements)

[4.1 Usability [5](#usability)](#usability)

[4.2 Security [5](#security)](#security)

[4.3 Reliability [5](#reliability)](#reliability)

[4.4 Performance [5](#performance)](#performance)

[4.5 Other Non-functional Requirements [5](#other-non-functional-requirements)](#other-non-functional-requirements)

[5 Scope Estimation [6](#scope-estimation)](#scope-estimation)

[6 Open Questions [6](#open-questions)](#open-questions)

[References [7](#references)](#references)

[Appendices [7](#appendices)](#appendices)

# Orientation

## **Purpose of the Document**

> This document specifies the requirements of …\
> and serves as the foundation for application design, implementation and testing.
>
> Introduce briefly what document is in question and for what purpose, and to whom it is intended.

## **Parties involved** 

> Introduce the client and the supplier of the specification briefly but precisely.

## **Project Background**

> Cover briefly, why the project has been initiated.\
> Introduce any materials provided by the client.

## **Project Objectives**

> Inscribe 1-5 clear objectives for the planned system, i.e., business requirements.\
> How is the system-to-be intended to improve current operations?\
> Goal setting is important because the end result will be compared to the set objectives.

## **Project Boundaries** 

> Specify as needed what is NOT included within the project scope.

## **Project Environment and other Constraints** 

> Specify the technical environment of the project's outcomes if the client has requirements regarding it.
>
> Specify briefly how the project relates to other development work, other projects, information systems, etc., in case they have an impact on the progress of this project.

## **Glossary**

> Define the key concepts, terms, acronymes and abbreviations used in the project.

# General Description

## **Process description**

> Describe the domain's activities at a sufficient level of detail. All stakeholders should be able to understand and provide comments on the description. Anyone unfamiliar with the field should be able to create a adequate understanding of the operations based on the description. Clearly state whether you are describing the current state (system-as-is) or the target state (system-to-be).
>
> The description can be in text format (similar to the sauna case description). You may also use process diagrams or activity diagrams (activity diagram / swimlane activity diagram) to visualize and clarify the whole.
>
> At the end of the description, highlight deficiencies and problems that occur in current operations. You can also refine business objectives from the perspective of IT trends and evolution.

## **Stakeholders**

> Specify the external and internal stakeholders of the project who have an impact on the project's task and outcomes (e.g., future users/user groups, experts, business representatives, etc.).
>
> For each user group, provide at least the group's name, a general description, the number of members, usage frequency, and any constraints or special requirements.

## **Narratives / User Stories**

> You may include brief narratives / personalized user stories in the description to illustrate the system's key services. They can also highlight the key deficiencies experienced in the service. Do not record stories that are rare or exceptional.
>
> IF you include user stories, try to record at least one story from each user group.

**\**

# Functional Requirements

## **Requirements**

> Present the requirements in a format of your choice, for example, as a user story/epic (who, what, why), or more comprehensively using the snow-card model or as an intermediate format, in a table format.
>
> Before documenting the requirement, verify and clarify the requirement's formulation using the quality criteria presented in the material.

## **Use Cases**

> Present the Use Case Diagram including all main level Use Cases.

### **Use Case \<use case name\>**

> Describe each use case in textual form, create a separate subheading for each one.\
> If a use case doesn't have sub-use cases, it does not need its own diagram.

## **Data**

### **Conceptual Model / Data Model** 

> Include a Class Diagram of the system-to-be (or some other conceptual model diagram).

### **Data Dictionary / Repository**

> Describe each class in the class diagram, at least with a definition. Avoid circular definitions and definitions that describe aspects that are already visible in the class diagram."

## **Specific Algorithms and Processing**

> Describe specific algorithms, complex data processing rules and calculations for the domain if they haven't been described in the use cases.

## **UI**

> Include a Site map and User Interface Sketches – with headings and explanations.

## **Reports**

> Include Report Sketches – with headings and explanations.

## **Interfaces to other IT systems**

> Describe connections to other IT-systems and / or devices.

# Non-functional Requirements

> Strive to make the non-functional requirements measurable, too.\
> You can also refer to a relevant standard.

## **Usability**

> Include potential Usability Requirements.

## **Security**

> Include potential Security Requirements (Data security and privacy).

## **Reliability**

> Include potential Reliability Requirements (i.e. Availability, Fault Tolerance, Recoverability)

## **Performance**

> Include potential Performance Requirements.

## **Other Non-functional Requirements**

> Include other potential non-functional Requirements.

**\**

# Scope Estimation

> Erittele sovelluksen näytöt, tietokantaulut ym. elementit ja laske niiden pohjalta FiSMAn laskurilla toteutuksen työmääräarvio.
>
> Specify the application's screens by type, database tables, and other essential elements, and estimate the scope of the system-to-be using the FiSMA calculator.

# Open Questions

> Record potential open questions.

**\**

# References

> Links to external documents referenced in the requirements specification

# Appendices

> Define potential documents complementing the requirements specification.
