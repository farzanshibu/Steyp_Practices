def calculator(a,b,operator):
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        return a / b
    else:
        return "Opeartor not Available"

print(calculator(10,12,"+"))
print(calculator(15,12,"-"))
print(calculator(10,12,"*"))
print(calculator(12,12,"/"))