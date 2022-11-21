# Exercise 8 : What’s Your Name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

user_name = input("What's your name: ")
MY_NAME = "ruben"

if user_name.lower() == MY_NAME:
    print("You have the same name as me.")