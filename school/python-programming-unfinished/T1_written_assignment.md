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
<p>SOF004AS2AE-3008</p></th>
<th><p>T1 Written Assignment</p>
<p>31.8.2025</p></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Topic T1

1.1 Python does not use braces {} to indicate a block of code to be executed when a condition is true.

How do you tell Python which statements are included in a block of code that is to be executed when a loop condition is true?

- All the statements that are indented, under the line of the loop. Indentation is achieved with pressing tab key once or four spaces. Loop also needs to be followed by a colon “:”.

1.2 What if there is a syntax error in your Python code, does your program crash due to the syntax error?

Give arguments!

- No but it doesn’t run at all since it is an interpreted language, however runtime errors allow the code to execute until the problematic section for example ZeroDivisionError which is quite common.

1.3 There are eight symbols in the Python code below.

if a \< 15:

b = 0

What identifiers, keywords, literals, operators, and separators (delimiters) you can find in the code?

- Identifiers: a,b; keywords: if; literals: 15,0; operators: \<,=; separators: “:”.

1.4 How do you create a variable in Python?

- By assigning a value to a name using the assignment operator “=”.

1.5 What is the Python naming convention for variables, functions, methods, scripts, and modules?

- Lowercase with underscore separating words.

1.6 How do you write a comment in Python?

- Everything written after \# symbol on a line is ignored in the execution of the code

  7.  What is the maximum recommended code line length in Python?

- The Style Guide for Python Code gives the recommendation to limit all code lines to a maximum of 79 characters to improve readability and keep the quality of the code consistent.

  7.  What if your code line would be longer than recommended. How can you split the original code line over more than one physical line?

- Using backslash character “\\

  7.  By default, the print() function moves the cursor to next line each time when we call it. How can you print several times on the same line?

- By using the end parameter in the print() function. By default the parameter is end=’\n’ so setting the string to ‘’ (empty) will do the trick, or if you want a space you can put that ‘ ‘.

1.10 What are f-strings in Python?

- Formatted string literals, can be used when you want to mix literal text and values of variables and/or any other expressions.

1.11 What are the Python data type names of the following literals:

a\) "Python" \# string

b\) 3.1415 \# float

c\) 123 \# int

d\) True \# boolean

1.12 Is the program below correct? Give arguments. (Not printing anything is not a problem)

s = s + 2

- Nope, logical error NameError

1.13 Is the program below correct? Give arguments.

s = "1"

s = s + 2

- It’s not, because of s being given a string value. TypeError: can only concatenate str (not "int") to str

1.14 Is the program below correct? Give arguments.

s = "1"

s = 2

s = s + 2

- Yes because the string value is being assigned to an int value on the following line

1.15 Is the code below correct? Give arguments.

x = input("Enter an integer")

x = x \* 5

- It works but if you want it to multiply the integer you would have to place input(“Enter an integer”) inside of int() to make it an integer instead of a string to

1.16 How can we convert a string to an int in Python?

- See previous answer

1.17 How can we concatenate a string and an int in Python?

- You can not, see answer to question 1.13, but if we convert the integer to a string using the str() function we can concatenate them
