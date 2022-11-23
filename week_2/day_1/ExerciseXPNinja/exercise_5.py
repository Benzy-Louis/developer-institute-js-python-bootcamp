# Exercise 5: Longest Word Without A Specific Character
# Instructions
# Keep asking the user to input the longest sentence they can without the character "A".
# Each time a user successfully sets a new longest sentence, print a congratulations message.

while True:
    user_string = input(
        "Input the longest sentence you can without the character A: ")
    if "a" not in user_string.lower():
        print("Congratulations! you did input a long sentence without the character A.")
        break
