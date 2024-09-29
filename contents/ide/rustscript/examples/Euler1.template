let range_tup = {
    let helper = fn (l, r, acc) => 
        if l == r then acc else helper(l, r - 1, (r, acc))
    
    fn (l, r) => helper(l - 1, r, ())
}

let filter_tup = {
    let helper = fn(f, ls, acc) => match ls
        | (_, ()) -> acc
        | (hd, tl) ->
            if f(hd) 
                then helper(f, tl, (hd, acc))
                else helper(f, tl, acc)

    fn(f, ls) => helper(f, ls, ())
}

let sum_tup = {
    let helper = fn(ls, acc) => match ls
        | (hd, ()) -> hd + acc
        | (hd, tl) -> helper(tl, hd + acc)
    
    fn (ls) => helper(ls, 0)
}

let predicate = fn(n) => (n mod 3 == 0) || (n mod 5 == 0)
