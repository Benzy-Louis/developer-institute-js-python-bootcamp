# Exercise 5: Longest Word Without A Specific Character
# Instructions
# Keep asking the user to input the longest sentence they can without the character "A".
# Each time a user successfully sets a new longest sentence, print a congratulations message.

while True:
    user_string = input(
        "Input the longest sentence you can without the character A: ")
    char_a_in_string = False
    for char in user_string:
        # print(char)
        if char.lower() == "a":
            # print(char)
            char_a_in_string = True
    if char_a_in_string is False:
        print(
            "Congratulations! you did input a long sentence without the character A.")
        break
