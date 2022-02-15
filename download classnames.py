import requests
import json
x = requests.get("https://gist.githubusercontent.com/D-Brox/5ea0d9cec29c4921a9e397163f447646/raw/classes2.txt")
e = x.text.split("\n")
b = {}
for i in e:
    a = i.split(" = ")[::-1]
    try:
        b[a[0]] = a[1]
    except:
        print(i)
with open("classes.json", "w") as f:
    json.dump(b, f)