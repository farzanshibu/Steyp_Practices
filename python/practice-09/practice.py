import json

python_dict = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

json_obj = json.dumps(python_dict)

print(type(json_obj))
print(json_obj)
