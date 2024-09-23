#  Randomness demo and test
#
#  Repeatedly shuffles lists and counts the resulting permutations.
#  For each permutation, prints the actual count and the "variance"
#  (from the expected count) as a percentage.
#
#  usage:   shuffle maxlen avgcount
#  default: shuffle 4 2500
#
#  The variance decreases with more iterations (the avgcount parameter).
#  (Try uncommenting the "badshuffle" call to see variance increase.)

procedure main(maxlen, avgcount) {

	maxlen := number(maxlen) | 4			# maximum list size
	avgcount := number(avgcount) | 2500		# expected counts per permutation
	write("seed = ", randomize())			# use different sequence every run

	every ^size := !maxlen do {				# repeat up to maximum length:

		^nbins := factorial(size)			# compute the number of permutations
		^ntimes := nbins * avgcount			# calculate necessary iterations
		^t := table()
		every !ntimes do {					# for every iteration:
			^a := [: char(96+!size) :]		# make a list of one-char strings
			a := a.shuffle()				# shuffle it
			# a := badshuffle(a)
			^s := ""
			every s ||:= !a					# turn the list into a string
			/t[s] := 0
			t[s] +:= 1						# and count it in the table
		}
		write()
		every ^kv := !t.sort() do {			# print results in sorted order
			^var := 100 * abs(kv.value / avgcount - 1)
			printf("%6.0f   %s   %2.0f%%\n", kv.value, kv.key, var)
		}
	}
}

procedure factorial(n) {	#: compute n factorial (n!)
	^f := 1
	every f *:= !n		# n.b. !n means "1 to n" not "n factorial" !
	return f
}

procedure badshuffle(a) {	#: a simple, biased shuffle; don't use this!
	a := copy(a)
	every !a :=: ?a
	return a
}
