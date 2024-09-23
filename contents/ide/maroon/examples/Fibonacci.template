2 = Succ[1]
3 = Succ[2]
4 = Succ[3]
5 = Succ[4]
6 = Succ[5]
7 = Succ[6]
8 = Succ[7]
9 = Succ[8]
10 = Succ[9]
11 = Succ[10]
12 = Succ[11]
13 = Succ[12]
14 = Succ[13]
15 = Succ[14]
16 = Succ[15]
17 = Succ[16]
18 = Succ[17]
19 = Succ[18]
20 = Succ[19]

PrintNum = Num.(
    PipeFn[pass.(PutStr[NumToStr[Num]])][Num]
)

PrintNumln = num_ln.(
    Newln[PrintNum[num_ln]]
)

fib = n.(Head[n[
        old_pair.(
            Pair[Add[PrintNumln[Head[old_pair]]][Tail[old_pair]]][Head[old_pair]]
        )
    ][Pair[1][0]]]
)


PrintNumln[fib[
    14
    ]]
