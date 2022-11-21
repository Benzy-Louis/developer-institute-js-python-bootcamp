# Exercise 2 : What Is The Season ?
# Instructions
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

# For this code I expect the user to input a proper integer
while True:
    user_month = int(input("Please input a month number: "))
    if user_month < 1 or user_month > 12:
        pass
    else:
        if user_month == 12 or user_month <= 2:
            print("That's in winter.")
        elif user_month >= 3 and user_month <= 5:
            print("That's in spring.")
        elif user_month >= 6 and user_month <= 8:
            print("That's in summer.")
        elif user_month >= 9 and user_month <=11:
            print("That's in autumn.")
        break