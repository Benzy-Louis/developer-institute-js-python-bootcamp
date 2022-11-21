# Exercise 9 : Tall Enough To Ride A Roller Coaster
# Instructions
# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

user_height_in_inches = input("Input your height in inches: ")

user_height_in_inches = float(user_height_in_inches)
user_height_in_cm = user_height_in_inches * 2.54

if user_height_in_cm > 145:
    print("You're tall enough to ride.")
else:
    print("You need to grow more to ride.")
