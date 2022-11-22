list1 = [5, 10, 15, 20, 25, 50, 20]
VALUE_TO_REPLACE = 20

index = len(list1) - 1

while index >= 0:
    if list1[index] == VALUE_TO_REPLACE:
        break
    index -= 1
print(f"The index of the last item is {index}")

for i in range(len(list1) - 1, -1, -1):
    if list1[i] == VALUE_TO_REPLACE:
        break

print(f"The index of the last item is {index}")
