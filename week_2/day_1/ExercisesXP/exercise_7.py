# Exercise 7 : Odd Or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.

number = input("Input a number, and I'll tell you if it's even or odd ")

# Expecting the input to represent a number since it's a simple exercise.
if int(number) % 2 == 0:
    print(f"{number} is even.")
else :
    print(f"{number} is odd.")
