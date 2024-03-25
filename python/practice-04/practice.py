string = "qweasdzxc234sdf234sdf1234"

sum = 0

for letter in string:
    if(letter.isdigit()):
        sum = sum + int(letter)

print(f"Total Sum: {sum}")
