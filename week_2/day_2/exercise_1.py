# Given this list:
# list1 = [5, 10, 15, 20, 25, 50, 20]
# find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value
# Hint : Look at the index method
# We don't take care of the ValueError exception at this part of the course.
list1 = [5, 10, 15, 20, 25, 50, 20]
VALUE_TO_REPLACE = 20
if VALUE_TO_REPLACE in list1:
    list1[list1.index(VALUE_TO_REPLACE)] = 200
    print(list1)
else:
    print(f"{VALUE_TO_REPLACE} is not in the list, can't replace.")
