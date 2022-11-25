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
MATRIX_EXAMPLE = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""
MATRIX_CHAR = MATRIX_EXAMPLE.split("\n")
MATRIX_CHAR_TRANSPOSED = zip(*MATRIX_CHAR)
MATRIX_STRING = "".join(sum(MATRIX_CHAR_TRANSPOSED, ()))
print(re.sub(r"[^a-z]+", " ", MATRIX_STRING, flags=re.IGNORECASE).strip())
