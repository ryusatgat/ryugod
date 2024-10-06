ID = lambda(x) x end
FIZZ = lambda(x) 'FIZZ' end
BUZZ = lambda(x) 'BUZZ' end
FIZZBUZZ = lambda(x) 'FIZZBUZZ' end
L = [FIZZBUZZ] + (for i in range(14) do if !((i + 1) % 3) then continue FIZZ end if !((i + 1) % 5) then continue BUZZ end continue ID end)
func fizzbuzz(s, e) return for i in range(e-s) do continue L[(i + s)%(#L)](i + s) end end

for i in fizzbuzz(1, 101) do print(i) end
