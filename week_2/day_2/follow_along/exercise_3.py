# Accept a number from the user and print its multiplication table

user_number = int(
    input("Please input a number, and I'll return it's multiplication table: "))
for i in range(1, 13):
    print(f"{i} X {user_number} = {i*user_number}")

# Multiplication table

for i in range(11):
   for j in range(11):
      print(i * j, end='\t')
   print()