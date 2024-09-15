plus_or_less : Integer -> Integer -> None
plus_or_less to_find supp :=
	if (to_find == supp) ->
		print "Gagné!"
	else
		(if (to_find > supp) ->
			(print "Plus grand")
		else
			(print "Plus petit")) >> (plus_or_less (to_find) (str_to_int input)).


main : None
main := plus_or_less (random 1 100) (str_to_int input).