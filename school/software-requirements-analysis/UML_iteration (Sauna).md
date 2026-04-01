# UML_iteration (Sauna)

Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                 Requirements analysis Assignment

                                                    12 /03 /2024

zTable of content


Section 1: Use case (sauna)
             section 1.1: sauna booking (Leon)
             Section 1.2: sauna invoicing (Leon)
             Section 1.3: booking (Houssam)
             Section 1.4: sauna storing data (Houssam)
             Section 1.5: spontaneous sauna (Quang/Johnny)
             Section 1.6: summer sauna struggle (Quang/Johnny)
             Section 1.7: booking sauna slot (Tobias)
             Section 1.8: storing user data (Tobias)


Section 2: Class diagram
             Conceptual modeling
             Data dictionary / Repository
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                      Requirements analysis Assignment

                                                            12 /03 /2024



Section 1: Use case (sauna)
                                                                                                  Mbishibishi Leon




 Use case ID           S_02
 Actor                 Resident, caretaker
 Use case Name         Sauna booking
 General Description   Resident accesses the sauna booking system, check the availability of slot and book a slot
                       if convenient.
 Outcome               Resident can easily access available slots and can book a slot.
 Priority              1 (important)
 Frequency             Every time resident wants to use to book a slot.
 Precondition          The resident has access to sauna booking system and is recognized as a member of the
                       housing community.
 Normal progress                1. Resident opens the booking system.
                                2. Resident checks availability of the sauna.
                                3. Resident books the sauna.
                                4.Resident uses the sauna at the booked time.
 Exceptions            If the sauna is not available when the resident checks, they are either given the next
                       available slot or the option to be notified when the sauna becomes available.
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                     Requirements analysis Assignment

                                                           12 /03 /2024




 Use case ID           S_03
 Actor                 Resident, caretaker, housing company
 Use case Name         Sauna invoicing
 General Description   Resident and housing company can view invoices both active and past payments
 Outcome               Resident, caretaker can know that the resident is eligible to access the sauna and all
                       financials are in order.
 Priority              1 (important)
 Frequency             Usually once a month.
 Precondition          The resident is recognized as community member and has access to sauna booking system
 Normal progress                 1. R opens the invoicing system.
                                 2. R checks the for active invoice.
                                 3. R pays the invoice.
                                 4.R payment status changes to paid.
 Exceptions            If the resident has not paid the overdue invoices their rights to the sauna booking system
                       are revoked.




                                                                                               El Majidi Houssam

Sauna case
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                         Requirements analysis Assignment

                                                              12 /03 /2024


                 Booking


                                            Free Slots




                                                                                 Caretaker
Resident                                    Booking




                                        Paying the invoice




                                         Communication




                                          Maintenance



                                                                                  Housing




  Use case ID              S_05
  Actor                    Resident, caretaker, housing company
  Use case Name            Booking
  General Description      Resident checks available slots and can book the sauna through the system
  Outcome                  Resident can book a sauna slot
  Priority                 1 (important)
  Frequency                Each time the resident uses the sauna.
  Precondition             The resident has access to sauna booking system and is recognized as a member of the
                           housing community.
  Normal progress                  1. Resident opens the booking system.
                                   2. Resident checks the real-time availability of the sauna
                                   3.R books the convenient slot.
                                   4.R use the booked slot.
  Exceptions               When the sauna is not available, the resident is given the next available slot.
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                         Requirements analysis Assignment

                                                                12 /03 /2024

                   Storing data


                                                Safety




                                                                                          Caretaker
Resident                                       Booking




                                           Paying the invoice




                                               Avaibility




                                                                                           Housing


 Use case ID              S_06
 Actor                    Resident, caretaker, housing company
 Use case Name            Storing data
 General Description      Ensuring privacy and data safety
 Outcome                  User can be confident and secure regarding the data usage and storing.
 Priority                 1 (important)
 Frequency                Every time the system is accessed.
 Precondition             The resident has access to sauna booking system and is recognized as a member of the housing
                          community.
 Normal progress                     1. User login into the system
                                     2. Data about user is retrieved
                                     3. Access is given
                                     4. Logout
 Exceptions               If user is not found in the system, system can’t be accessed.c




                                                                                                            Bui Quang

Sauna case
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                      Requirements analysis Assignment

                                                              12 /03 /2024




 Use case ID           S_07
 Actor                 Resident, caretaker, housing company
 Use case Name         Spontaneous sauna
 General Description   Resident checks the real time availability of the sauna and booking instantly
 Outcome               Resident can access the availability of slots and book a slot
 Priority              1 (important)
 Frequency             Can vary from several times a day to a few times per week, depending on the resident demand
                       and sauna availability
 Precondition          The resident has access to sauna booking system and is recognized as a member of the housing
                       community.
 Normal progress                 1. Resident opens the booking system.
                                 2. Resident checks the real-time availability of the sauna
                                 3.If available, the resident books the sauna for immediate use.
                                 4.Resident uses the sauna at the booked time.
 Exceptions            If the sauna is not available when the resident checks, they are either given the next available
                       slot or the option to be notified when the sauna becomes available.
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                      Requirements analysis Assignment

                                                             12 /03 /2024




 Use case ID           S_08
 Actor                 Resident(Pia), caretaker, housing company
 Use case Name         Summer sauna struggle
 General Description   Resident wishes to book a sauna during the summer months when availability is reduced.
 Outcome               Resident is able to book a slot during the summer
 Priority              Medium priority
 Frequency             Likely occur daily during the summer season
 Precondition          The resident has access to the sauna booking system. The system reflects the updated
                       summer schedule with limited availability.
 Normal progress                1. Resident logs into the booking system.
                                2. Resident views the summer sauna schedule.
                                3. Resident selects a desired time slot
                                4. If the desired time slot is unavailable, resident makes a booking request for the
                                next available slot.
 Exceptions            If the sauna is not available when the resident checks, they are either given the net
                       available slot or the option to be notified when the sauna becomes available.




                                                                                                    Weckström Tobias
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen             Requirements analysis Assignment

                                                12 /03 /2024



Section 2: Class diagram




 Concept name:                                User account
 Definition:                                  This is the resident’s identification in the booking system to
                                              allow login.
 Attributes:                                  user_Id
                                              password


 Concept name:                                Resident
 Definition:                                  Someone who lives in the KallionKolot community
 Attributes:                                  user_Id
                                              name
                                              email
                                              phone
                                              apartment_Id


 Concept name:                                Apartment
 Definition:                                  A room in a building where the resident resides.
 Attributes:                                  apartment_Id
                                              owner_Id
                                              building_no
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024


 Concept name:                         Sauna
 Definition:                           Space designed for experiencing heat sessions usually for
                                       relaxation.
 Attributes:                           sauna_Id
                                       sauna_name
                                       size
                                       sauna_status


 Concept name:                         Sauna slot
 Definition:                           A specific time bookable to experience/ use the sauna
 Attributes:                           sauna_Id
                                       slot_number
                                       date
                                       slot_time
                                       user_id


 Concept name:                         invoice
 Definition:                           A way of paying the service rendered usually billed monthly
 Attributes:                           invoice_Id
                                       user_Id
                                       amount
                                       issue_date
                                       due_date
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024




 Concept name:                         STORING USER DATA
 Definition:                           Storing user data securely.


 Concept name:                         RESIDENT
 Definition:                           Resident of housing company.


 Concept name:                         APARTMENT
 Definition:                           Apartment of housing company, owned
                                       or rented.


 Concept name:                         SAUNA SLOT BOOKING
 Definition:                           Booking of sauna slot.


 Concept name:                         INVOICING
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024

 Definition:                           Invoicing of booked sauna slots.
Examples:
 Concept name:                         STORING USER DATA
 user_ID                               0001
 password                              Axci782!
 admin                                 False


 Concept name:                         RESIDENT
 user_ID                               0001
 surName                               Lipponen
 firstName                             Jorma
 email                                 jormagorma@hotmail.com
 phone                                 0400123123
 apartment_num                         122
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                      Requirements analysis Assignment

                                                              12 /03 /2024



Vili Konttinen




 Use case ID           S_09
 Actor                 Resident and caretaker
 Use case Name         Sauna Booking
 General Description   Residents can access current bookings while looking for new ones
 Outcome               Resident and caretaker can monitor current bookings preventing overlaps and
                       overcrowding
 Priority              1 (important)
 Frequency             Twice a month
 Precondition          Resident is a part of community and has access to the sauna
 Normal progress                1. Resident checks on available bookings
                                2. Resident can see their current bookings
                                3. Resident can only book other bookings which don’t overlap with their bookings
                                4. Resident books free slot
 Exceptions            Free bookings that overlap with current bookings are unavailable
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                      Requirements analysis Assignment

                                                              12 /03 /2024




 Use case ID           S_10
 Actor                 Resident and caretaker
 Use case Name         Customer support
 General Description   The resident can get customer support and view their history
 Outcome               The resident can easily reach customer support services and navigate their booking and
                       payment history
 Priority              1 (important)
 Frequency             Twice a month
 Precondition          The resident is a part of the community and has access to the sauna
 Normal progress                1. Resident runs into issues
                                2. Resident can easily contact customer support
                                3. Resident wants to look at previous bookings
                                4. Resident can easily see their booking and payment history
 Exceptions            Server or network issues may disrupt seeing history and contacting support
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024




Site Map.
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                      Requirements analysis Assignment

                                                          12 /03 /2024

Next up the user interface sketches, and additional materials from Vili Konttinen Since he only joined our group
recently.

Tobias Weckström
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024

Leon Mbishibishi
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024

Bui Quang
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen                     Requirements analysis Assignment

                                                             12 /03 /2024

Vili Konttinen UML use cases, and user interface sketches.
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024
Weckström Tobias
El Majidi Houssam
Bui Quang
Mbishibishi Leon
Vili Konttinen      Requirements analysis Assignment

                                         12 /03 /2024
