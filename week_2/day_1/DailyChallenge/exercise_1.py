# Instructions
# 1. Using the input function, ask the user for a string. The string must be 10 characters long.
# If it's less than 10 characters, print a message which states "string not long enough".
# If it's more than 10 characters, print a message which states "string too long".

# 2. Then, print the first and last characters of the given text.

# 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# Hello World


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod
import random

user_string = input("Input a string of 10 characters please: ")
if len(''.join(user_string.split())) == 10:
    display_string = ""
    print(f"First character in string '{user_string[0]}' and last character in string is '{user_string[-1]}'")
    SHUFFLED_STRING = ''.join(random.sample(user_string, len(user_string)))
    for char in SHUFFLED_STRING:
        display_string += char
        print(display_string)
elif len(''.join(user_string.split())) > 10 :
    print("string too long.")
else :
    print("string not long enough")
