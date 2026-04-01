# FunctionTasksToBeAddedToViopeLater

New function tasks to be added to Viope later               Juhani Välimäki 2021-03-14

Difficulty level: Easy to Medium.


4. Define a function called displayGreeting that is given a name as argument:

            displayGreeting( name ) { ....

    When called e.g., by providing value "Joe" as name, the function will show "Hello
    Joe!" on the console.

    Test-call the function three times in the code. With values: "Mike", "Joe", "Anne".




5. Define a function called displayGreetingWithAge that is given a name and year of
   birth (yob) as arguments.

    When called e.g., by providing values "Mike" and 1989, the function will show "Hello
    Mike! You are 32 years old this year." on the console.

    Test by calling the function with these values:
    "Mike" 1989               => 32 years old
    "Anne" 2002               => 19 years old
    "Joe" 2010                => 11 years old


    (Hint: You can use the current year 2021 as hard-coded / literal value in your
    calculation.)

    (Or, advanced extra version: Get the current year dynamically using means you find
    by googling “MDN date”. You’ll need two services from here. How to create Date
    object representing now/today, and how to get year part out of it)




6. Define a new function called getGreetingWithAge, that is given a name and year of
   birth (yob) as arguments. The function will NOT display anything to console nor to
   the web page. But it will return the greeting, e.g. "Hello Anne! You are 19 years old
   this year." to whoever was the caller code.

    Now make the displayGreetingWithAge function to call the getGreetingWithAge,
    and after the call returns, displayGreetingWithAge will print the greeting to the
    console.


    Use the same test input as earlier. But make sure the getGreetingWithAge is not
    printing/showing/displaying anything to the console.
