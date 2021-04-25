# Part 1 Lab 4 April 22, 2021

part1x-questionY-z.js dd the -y only if it’s a subquestion

## Part 1A

1. 20 is printed.
2. 20 is printed.

3. The value is 20 for line 9.
4. An error occurs since we are trying to access result even though it has an expired lifetime.

5. The problem is not a valid program because we tried
   assign to a constant variable.

6. The reasoning here is the same as above we get an error
   since we are trying to assign to a constant value.

## Part 1b

1. 3 will be printed at line 12. Since, we used var i has function scope. Thus, we can access it.

2. The log statement will print 150, since we lasted accessed the last element in the array which is 300 and then we divided by 1 - .5, which is the same as dividing
   by two.

3. The final price will also be 150 since discountedPrice equals 150 and multiplying and dividing by the same number reverses the operations.

4. This code will return the discounted final prices, since that is what we pushed onto the discounted array.
   [ 50, 100, 150 ]

5. This will return an error since i's lifetime is over after control exits the for loop's body.

6. The same error occurs we are trying to refer to a variable which does not exist anymore because we left its nested scope.

7. This will print out 150, since that is the last discounted price that we set, and finalPrice is in function scoped.

8. This will return the array with the discounted values, [50, 100, 150] respectively.

9. This will return an error since i's lifetime is over after control exits the for loop's body.

10. Will print the value three since that is the length and it is const, furthermore it is in the same scope.

11. The function will still return [50, 100, 150] since those are the discounted prices that we placed into the array.

12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '32', this is a string ints get converted to string.
    B. '1' now the string gets converted to an int and subtraction is performed.
    C. 3, since null is nothing adding nothing to 3 is 3.
    D. '3null' this is just string concatenation.
    E. 4 since 1 plus 3 is 4, and true === 1.
    F. 0 nothing plus 0 is 0.
    G. '3undefined' string concatenation occurs again.
    H. NaN there is no valid integer conversion from undefined.
14. A. '2' > 1, true since '2' is cast too in int.
    B. false, same integer conversion occurs.
    C. true, since the conversion occurs then the equality operator is called.
    D. false, since true is cast to the int value 1 and 1 != 2.
    F. true === Boolean(2), true. Since, Boolean(2) equals true and true === true.
15. The difference between == and === is that === will
    check to see if the types and the values are equal without a type cast.
    Where == will perform a type cast and then check for inequality.
