1.SELECT COUNT(\*) AS TotalRows

FROM CourseGrade;

2.SELECT COUNT(grade) AS TotalGrades

FROM CourseGrade;

3.SELECT COUNT(\*) AS TeachersAbove16000

FROM Teacher WHERE salary \>

16000;

4.SELECT

MAX(salary) AS MaxSalary,

MIN(salary) AS MinSalary,

AVG(salary) AS AvgSalary,

SUM(salary) AS TotalSalary

FROM Teacher

5.a.SELECT AVG(grade) AS RoughAverage

FROM CourseGrade;

b.SELECT CAST(AVG(grade \* 1.0) AS DECIMAL(4,2)) AS AverageGrade

FROM CourseGrade;

c.SELECT CAST(AVG(grade \* 1.0) AS DECIMAL(2,0)) AS RoundedAverage

FROM CourseGrade;

6.SELECT COUNT(\*) AS Grade3Count FROM CourseGrade WHERE grade = 3;

7.SELECT CAST(AVG(grade \* 1.0) AS DECIMAL(4,2)) AS AvgGrade

FROM CourseGrade

WHERE student_number = 'o473';

8.SELECT COUNT(\*) AS FirstNameKCount

FROM Student

WHERE first_name LIKE 'K%';

9.SELECT COUNT(DISTINCT surname) AS UniqueTeacherLastNames FROM Teacher

WHERE surname LIKE 'T%';

String handling

10.SELECT LOWER(first_name + '.' + surname + '@takkula.fi') AS \[Default email\]

FROM Student

ORDER BY \[Default email\] ASC;

Date handling

11.SELECT DATENAME(MONTH, birth_date) AS BirthMonth, surname, first_name,

student_number

FROM Student

ORDER BY MONTH(birth_date), surname, first_name, student_number;

12.SELECT COUNT(\*) AS MayBirths

FROM Student

WHERE MONTH(birth_date) = 5;

13.SELECT DATEPART(QUARTER, start_date) AS Quarter,start_date, course_code, instance_number

FROM CourseInstance

ORDER BY Quarter, start_date, course_code;

14.SELECT DATENAME(MONTH, birth_date) AS \[Month\], DAY(birth_date) AS \[Day\],

surname, first_name, student_number

FROM Student

ORDER BY \[Month\], \[Day\], surname, first_name, student_number

15.SELECT COUNT(\*) AS SundayBirths

FROM Student

WHERE DATENAME(WEEKDAY, birth_date) = 'Sunday';

16.SELECT

LEFT(CONVERT(VARCHAR, SYSDATETIME(), 120), 10) AS \[Current date\],

DATENAME(WEEKDAY, SYSDATETIME()) AS \[Weekday\];

17.SELECT

DATEDIFF(DAY, start_date, end_date) AS \[Course length\], course_code, instance_number

FROM CourseInstance

WHERE start_date IS NOT NULL AND end_date IS NOT NULL

ORDER BY \[Course length\], course_code, instance_number;

18.SELECT DATEDIFF(YEAR, birth_date, GETDATE()) AS \[Age\], surname, first_name, student_number

FROM Student

ORDER BY \[Age\] DESC, surname ASC, first_name ASC, student_number ASC;

19.SELECT student_number, surname, first_name, email

FROM Student

WHERE CHARINDEX('@takkula.fi', email) = 0

ORDER BY student_number;

20.SELECT DISTINCT RIGHT(email, CHARINDEX('@', REVERSE(email)) - 1) AS

\[Domain name\]

FROM Student

ORDER BY \[Domain name\];

SELECT AVG(DATEDIFF(DAY, start_date, end_date)) AS \[Average Course Length\]

FROM CourseInstance

WHERE start_date IS NOT NULL AND end_date IS NOT NULL;
