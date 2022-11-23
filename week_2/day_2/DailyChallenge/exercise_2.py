# pylint: disable=line-too-long
# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won't include words with double letters (e.g. "passing", "lottery").

# Lazily check if the next letter in the list is a duplicate then if not the case append to a new list

user_string = input("Please input a single word/string: ").strip()
list_of_characters_without_duplicates = [user_string[0]]
for char_idx in range(1, len(user_string)):
    if user_string[char_idx] is not user_string[char_idx-1]:
        list_of_characters_without_duplicates.append(user_string[char_idx])
print("".join(list_of_characters_without_duplicates))
