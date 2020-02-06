import sys 

diction = {}
count = 0
arg = sys.argv[1]
arg = arg.replace(" ","")
if len(arg) == 0:
    print("Pyramid can be made:"+"False")
    sys.exit(0)
for items in sys.argv[1] :
    if items in diction.keys():
        diction[items] += 1
    else:
        diction[items] = 1
sum1 = sum(diction.values())

newset = set(diction)
d = len(diction)
s = len(newset)

for i in range(1,len(diction)+1):
    if i not in diction.values():
        print("Pyramid can be made:"+"False")
        sys.exit(0)
print("Pyramid can be made:"+"True")