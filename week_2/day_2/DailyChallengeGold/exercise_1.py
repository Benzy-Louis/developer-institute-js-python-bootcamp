# 1. Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# 2. Display a little cake as seen below:

#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.
user_birth_date = input("What's your birth date in DD/MM/YYYY? ")
user_birth_date = user_birth_date.split("/")

CURRENT_YEAR = 2022
_, _, user_birth_year = user_birth_date
user_birth_year = int(user_birth_year)

# https://www.tutorialkart.com/python/python-check-leap-year/#:~:text=year%20%3D%20int(input(%27Enter,not%20a%20leap%20year.%22)
is_leap_birth_year = (user_birth_year % 4 == 0 and user_birth_year %
                      100 != 0) or (user_birth_year % 400 == 0)

user_age = CURRENT_YEAR - user_birth_year
number_of_candles = user_age % 10
is_number_of_candles_even = number_of_candles % 2 == 0


number_of_padding = (11 - number_of_candles)//2
candle_row = "    " + "_" * \
    (number_of_padding) + \
    "i"*number_of_candles + "_"*(number_of_padding+is_number_of_candles_even)

# print(candle_row)
# Bonus : If they were born on a leap year, display two cakes !
empty_cake = [candle_row, "   |:H:a:p:p:y:|", " __|___________|__",
              "|^^^^^^^^^^^^^^^^^|", "|:B:i:r:t:h:d:a:y:|", "|                 |", "~~~~~~~~~~~~~~~~~~~"]

if is_leap_birth_year:
    # Empty cake twice
    for row in empty_cake:
        disp_row = row + " "*(19 - len(row))
        print(disp_row+" "+disp_row)
else:
    for row in empty_cake:
        print(row)
