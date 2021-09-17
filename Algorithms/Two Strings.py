def twoStrings(s1, s2):
    for char in s1:
        if char in s2:
            x = 'YES'
            break
        else:
            x = 'NO'
    return x