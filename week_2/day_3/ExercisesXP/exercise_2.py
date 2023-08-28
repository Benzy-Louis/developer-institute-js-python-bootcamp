# Exercise 2 : Cinemax
# Instructions
# 1. A movie theater charges different ticket prices depending on a person’s age.
#    if a person is under the age of 3, the ticket is free.
#    if they are between 3 and 12, the ticket is $10.
#    if they are over the age of 12, the ticket is $15.
# 2. Given the following object:
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# 3. How much does each family member have to pay ?
# 4. Print out the family’s total cost for the movies.
# 5. Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
import re
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


def cinemax_total_cost(**family_dict):
    """cinemax total cost"""
    total_cost = 0
    for member_age in family_dict.values():
        if member_age < 3:
            pass
        elif 3 <= member_age <= 12:
            total_cost += 10
        else:
            total_cost += 15
    return total_cost


print(f"Total cost of tickets: {cinemax_total_cost(**family)}")
# Without user input

# With user input

user_family = input("Please input the name and age of the members\n" +
                    "of the family For which you want to calculate the total\n" + "cost of the tickets e.g John, 28, Sarah, 26: ")

family_list = re.split(r',\s*|\s', user_family)
family = {family_list[i]: int(family_list[i+1])
          for i in range(0, len(family_list), 2)}
print(f"Total cost of tickets: {cinemax_total_cost(**family)}")
print(family)
