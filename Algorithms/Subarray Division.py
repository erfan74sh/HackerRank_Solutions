def birthday(s, d, m):
    count = 0
    for n in range(len(s)):
        new_list = s[n:n+m]
        sum = 0
        for i in new_list :
            sum = i + sum
        if sum == d :
            count = count + 1
    return count