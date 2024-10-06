-- The Solterpreter! A simple command-line interface for the compiler.

print('Solterpreter/Viperpreter v0.1')
print('(Runtime version ', debug.version, ')')

__interp = {
	running = 1,
	buffer = '',
	ps1 = '>>> ',
	ps2 = '... ',
	stmt_stack=0,
}

func exit()
	__interp.running=0
end

quit = exit

while __interp.running do
	if #__interp.buffer then
		__interp.prompt = __interp.ps2
	else
		__interp.prompt = __interp.ps1
	end
	if None != readline then
		__interp.line = readline.readline(__interp.prompt)
		if #__interp.line then readline.add_history(__interp.line) end
	else
		io.stdout:write(__interp.prompt)
		io.stdout:flush()
		__interp.line = io.stdin:read(io.LINE):sub(0, -1)
	end
	7
	--prepr(__interp.line)
	--prepr(__interp)
	if (__interp.line:sub(-4, None)=="then") then
		__interp.buffer+=__interp.line+" "
		__interp.stmt_stack+=1
	else
		if (__interp.line:sub(-2, None)=="do") then
			__interp.buffer+=__interp.line+" "
			__interp.stmt_stack-=1
		else
			if __interp.line:sub(-1, None)=="\" then
				__interp.buffer+=__interp.line:sub(0, -1)+" "
			else
				__interp.buffer+=__interp.line+" "
				if __interp.line:sub(-3, None)=="end" then
					__interp.stmt_stack-=1
				end
				if __interp.stmt_stack<=0 then
					__interp.stmt_stack=0
					__interp.program = try(parse, __interp.buffer)
					if !__interp.program[0] then
						print('Syntax error')
					else
						if !(try(func() __interp.program[1].stmtlist[0].type end)[0]) then
							print('NULL program error')
						else
							if __interp.program[1].stmtlist[0].type == ast.ST_EXPR then
								__interp.program[1] = __interp.program[1].stmtlist[0].expr
								__interp.isexpr = 1
							else
								__interp.isexpr = 0
							end
							__interp.result = try(__interp.program[1])
							if !__interp.result[0] then
								print(__interp.result[1])
								print(__interp.result[2])
								for ent in __interp.result[2] do
									st = ent[0]
									scope = ent[1]
									fun = ent[2]
									if st.type == ast.ST_LIST then continue end
									print('In', fun, 'at', st.loc.line, ',', st.loc.col, ':')
									ast.print(st)
									print(scope)
									print('---')
								end
							else
								if __interp.isexpr then
									prepr(__interp.result[1])
									_ = __interp.result[1]
								end
							end
						end
					end
					__interp.buffer=''
				end
			end
		end
	end
end
