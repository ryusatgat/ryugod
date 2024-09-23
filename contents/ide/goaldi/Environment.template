#  A demo of external array usage.
#  Get the environment from Go, clobber a few random entries, and print it.

procedure main() {
	local e := environ()
	write("Unix environment (", *e, " entries):")
	every local i := 11 to 100 by 13 do
		e[i] := "===============[REDACTED]==============="
	every !5 do
		?e := "===============[STOMPED]==============="
	every i := 1 to *e do
		write(i, ".  ", e[i])
}
