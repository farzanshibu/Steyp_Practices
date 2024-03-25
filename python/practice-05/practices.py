list = [1,2,3,4,5]

def arraySum(list):
    sum = 0
    for number in list:
        sum += number
    return sum
    
print(arraySum(list))