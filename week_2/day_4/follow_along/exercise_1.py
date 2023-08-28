# Exercise
# people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
# Using map and filter, try to say hello to everyone who's name is less than or equal to 4 letters

peoples = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

peoples_le_than_four_letters = list(
    filter(lambda people: len(people) <= 4, peoples))
say_hello = map(lambda name: f"hello {name}", peoples_le_than_four_letters)
