# http://learn.di-learning.com/courses/collection/56/course/12/section/55/chapter/276
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


def decode_matrix(message):
    """Decode Matrix Message"""
    message_matrix = message.split("\n")
    message_matrix_transposed = zip(*message_matrix)
    message_transposed = ""
    for _message in message_matrix_transposed:
        # print(_message)
        message_transposed += "".join(_message)
        # print(message_transposed)
    return re.sub(r"[^a-z]+", " ", message_transposed, flags=re.IGNORECASE).strip()


print(decode_matrix(MATRIX_EXAMPLE))
