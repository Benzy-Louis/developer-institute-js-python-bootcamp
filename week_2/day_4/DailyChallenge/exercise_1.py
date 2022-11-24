# Instructions
# Given a "Matrix" string:
#     7i3
#     Tsi
#     h%x
#     i #
#     sM
#     $a
#     #t%
#     ^r!

# To decrypt the matrix, Neo reads each
# column from top to bottom, starting
# from the leftmost column, selecting
# only the alpha characters and connecting them.
# Then he replaces every group of symbols between
# two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning "Matrix" videos
import re

matrix_example = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""
matrix_char = matrix_example.split("\n")
matrix_char_transposed = [[ matrix_char[j][i] for j in range(len(matrix_char))] for i in range(len(matrix_char[0]))]

# Join the transposed list together then eliminate other characters replacing them with space
matrix_string = "".join([ "".join(matrix_char_transposed[i]) for i in range(len(matrix_char_transposed))])

print(re.sub(r"[^a-z]+"," ",matrix_string,flags=re.IGNORECASE).strip())
