#  http.gd -- demonstrate HTTP extension

procedure main(url1, url2) {
	/url1 := "http://www.cs.arizona.edu"
	/url2 := "http://httpbin.org/post"

	# url1 using htfile
	showfile(url1, htfile(url1))

	# url1 using htget
	local r := htget(url1)
	if showfile(url1, *\r) then {
		write(repl("-", 72))
		write("response: ", image(r))
		local resp := r.Resp
		local hmap := resp.Header
		write("  status: ", resp.Status, " (", resp.StatusCode, ")")
		write("  proto:  ", resp.Proto,
			" (",resp.ProtoMajor,".",resp.ProtoMinor,")")
		write("  ctlen:  ", resp.ContentLength)
		write("  close:  ", resp.Close)
		write("  encoding: ", image(resp.TransferEncoding))
		write("headers:")
		every write("   ", !r)
		write("via lookup:")
		every local k := "Date" | "Content-Type" | "Credibility" do
			write("   ", k, ":  ", hmap[k])
		write("sorted:")
		every local kv := !hmap.sort() do
			write("    ", hmap.member(kv.key) | "?!?!", ":  ", kv.value)
		write("cookies: ", image(resp.Cookies()))
		write("location: ", image(resp.Location()))
		every local m := 0 | 1 | 2 do
			write("protocol 1.", m, "?  ", resp.ProtoAtLeast(1, m))
	} else {
		showfile(url1, nil)
	}

	# url2 using htpost
	local p := htpost(
		url2, "crust", "thin", "top", "pepperoni", "top", "onions")
	showfile(url2, *\p | nil)
}

procedure showfile(u, f) {	#: show contents of file (first n lines)
	write(repl("=",72), "\nURL: ", u)
	write("file: ", image(f))
	if /f then return fail
	write(repl("-", 72))
	every write(("" ~== !f) \ 10)
	write("   ...")
	f.close()
	return
}
