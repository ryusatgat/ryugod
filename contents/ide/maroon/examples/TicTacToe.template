PsuedoPrompt = Pipe_Fn_Early.Early_Pipe_Val.(v.()[Pipe_Fn_Early[_]] Early_Pipe_Val[_])
Prompt = Prompt_Str.(PsuedoPrompt[call_me.(PutStr[Prompt_Str])] [Input])

2 = Succ[1]


None = _

StartBoard = Pair[
            Pair[None][Pair[None][Pair[None][_]]]
        ][
        Pair[
            Pair[None][Pair[None][Pair[None][_]]]
        ][
        Pair[
            Pair[None][Pair[None][Pair[None][_]]]
        ][_]]]


GetPoint = B.X.Y.(
    Index[Index[B][Y]][X]
)
GetRow = B.Y.(
    Index[B][Y]
)
GetColumn = B.X.(
    Pair[Index[Index[B][0]][X]][Pair[Index[Index[B][1]][X]][Pair[Index[Index[B][2]][X]][_]]]
)
GetForwardDiagonal = B.(
    Pair[Index[Index[B][0]][2]][Pair[Index[Index[B][1]][1]][Pair[Index[Index[B][2]][0]][_]]]
)
GetBackDiagonal = B.(
    Pair[Index[Index[B][0]][0]][Pair[Index[Index[B][1]][1]][Pair[Index[Index[B][2]][2]][_]]]
)

PrintBoard = Board.(
    PipeFn[pass.(
        PipeFn[pass.(Putln[ GetPoint[Board][2][2] ])]
        [PipeFn[pass.(Put[ GetPoint[Board][1][2] ])]
        [PipeFn[pass.(Put[ GetPoint[Board][0][2] ])]
        [PipeFn[pass.(Putln[ GetPoint[Board][2][1] ])]
        [PipeFn[pass.(Put[ GetPoint[Board][1][1] ])]
        [PipeFn[pass.(Put[ GetPoint[Board][0][1] ])]
        [PipeFn[pass.(Putln[ GetPoint[Board][2][0] ])]
        [PipeFn[pass.(Put[ GetPoint[Board][1][0] ])]
        [PipeFn[pass.(Put[ GetPoint[Board][0][0] ])][_]
        ]]]]]]]]
    )][Board]
)

Row = Name.(
    Pair[Name][Pair[Name][Pair[Name][_]]]
)
Column = Row
Diagonal = Row


IsWinner? = B.N.(
    If[ Eq[Column[N]][ GetColumn[B][0] ] ][
        True
    ][
    If[ Eq[Column[N]][ GetColumn[B][1] ] ][
        True
    ][
    If[ Eq[Column[N]][ GetColumn[B][2] ] ][
        True
    ][
    If[ Eq[Row[N]][ GetRow[B][0] ] ][
        True
    ][
    If[ Eq[Row[N]][ GetRow[B][1] ] ][
        True
    ][
    If[ Eq[Row[N]][ GetRow[B][2] ] ][
        True
    ][
    If[ Eq[Diagonal[N]][ GetForwardDiagonal[B] ] ][
        True
    ][
    If[ Eq[Diagonal[N]][ GetBackDiagonal[B] ] ][
        True
    ][
        False
    ]]]]]]]]
)


GetX = pass.(StrToNum[Prompt["X position: "]])
GetY = pass.(StrToNum[Prompt["Y position: "]])


CheckIfFree = Board.X.Y.(
    Eq[GetPoint[Board][X][Y]][None]
)

ChangePoint = B.N.X.Y.x.y.(
    If[And[Eq[X][x]][Eq[Y][y]]][
        N
    ][
        GetPoint[B][x][y]
    ]
)

ChangeBoard = B.N.X.Y.(
    Pair[
        Pair[ChangePoint[B][N][X][Y][0][0]][Pair[ChangePoint[B][N][X][Y][1][0]][Pair[ChangePoint[B][N][X][Y][2][0]][_]]]
    ][
    Pair[
        Pair[ChangePoint[B][N][X][Y][0][1]][Pair[ChangePoint[B][N][X][Y][1][1]][Pair[ChangePoint[B][N][X][Y][2][1]][_]]]
    ][
    Pair[
        Pair[ChangePoint[B][N][X][Y][0][2]][Pair[ChangePoint[B][N][X][Y][1][2]][Pair[ChangePoint[B][N][X][Y][2][2]][_]]]
    ][_]]]
)


MakeMove = Board.CurrentPlayer.OtherPlayer.X.Y.(
    If[CheckIfFree[Board][X][Y]][
        pass.(
            PipeFn[pass.(PutStrln["Good move."])][Pair[ChangeBoard[Board][CurrentPlayer][X][Y]][Pair[OtherPlayer][CurrentPlayer]]]
        )
    ][
        pass.(
            PipeFn[pass.(PutStrln["Not a valid move."])][Pair[Board][Pair[CurrentPlayer][OtherPlayer]]]
        )
    ][_]
)

CheckWinner = Board.CurrentPlayer.OtherPlayer.(
    If[IsWinner?[Board][CurrentPlayer]][
        pass.(Exit[PutStrln[Concat[ToStr[CurrentPlayer]][" wins!"]]])
    ][
    If[IsWinner?[Board][OtherPlayer]][
        pass.(Exit[PutStrln[Concat[ToStr[OtherPlayer]][" wins!"]]])
    ][
        pass.(pass.())
    ]][_]
)

Main = BoardAndPlayers.(
    PipeFn
    [
        BoardAndPlayers.(CheckWinner[Head[BoardAndPlayers]][Head[Tail[BoardAndPlayers]]][Tail[Tail[BoardAndPlayers]]])
    ][
        PipeFn[BoardAndPlayers.(PrintBoard[Head[BoardAndPlayers]])]
        [
            MakeMove[
                Head[BoardAndPlayers]
            ][
                Head[Tail[BoardAndPlayers]]
            ][
                Tail[Tail[BoardAndPlayers]]
            ][GetX[_]][GetY[_]]
        ]
    ]
)


Rec[Main][
    Pair[PrintBoard[StartBoard]][Pair[A][B]]
    ]
