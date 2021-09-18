def countApplesAndOranges(s, t, a, b, apples, oranges):
    feltapple = [item+a for item in apples]
    feltorange = [item+b for item in oranges]
    countapple = 0
    countorange = 0
    for i in feltapple:
        if i >= s and i <= t :
            countapple = countapple + 1
    for i in feltorange :
        if i >= s and i <= t :
            countorange = countorange + 1
    print(countapple)
    print(countorange)