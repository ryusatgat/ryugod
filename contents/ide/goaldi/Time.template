# demonstrate process environment and time interfaces

procedure main() {

	write()
	write("host:  ", hostname())
	write("getwd: ", getwd())
	write("pid:   ", getpid())
	write("ppid:  ", getppid())

	write()
	write("date:  ", date())
	write("time:  ", time())
	local t := now()
	write("now:   ", t)
	write("fmt:   ", t.Format("Mon 2006-01-02 03:04:05 pm MST"))
	write("or:    ", t.Format("Monday, January 2, 2006 at 03:04:05 pm"))
	write("or:    ", image(t.Date()), " ", image(t.Clock()))

	local dt := 100000
	local du := duration(dt)
	write(dt, " seconds from now, it will be:")
	t := t.Add(du)
	write(t.Format("Monday, January 2, 2006 at 03:04:05 pm MST"))

	write()
	local tmid := 0.03
	local tmax := 2
	while tmid < tmax do {
		tmid *:= %phi
		while cputime() < tmid & cputime() < tmax do
			{}
		write("CPU:   ", cputime())
	}
}
