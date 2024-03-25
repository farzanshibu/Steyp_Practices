list = [1,2,3,4,5,6,7,8,9,10,55,54]

def evenRemover(list):
    index = 0
    for number in list:
        if (number%2 ==0):
            del list[index]
        index += 1
    return list

print(evenRemover(list))