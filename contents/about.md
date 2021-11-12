# 류갓 - 쓸모(帽)있는 개발자
- 간단한 테스트용 개발 환경을 제공하는 사이트입니다.
- 로그인없이 `리눅스 셸`과 여러 프로그램 언어를 실행 해볼 수 있습니다.
- C언어, C++, Java 등의 온라인 컴파일러를 제공하며 모든 언어에 대해 **구문강조** 기능을 지원합니다.
- 서버로의 파일업로드, 다운로드가 가능합니다.
- 드래그&드랍으로 소스 파일을 추가할 수 있습니다.
- 본인이 작성한 소드 코드를 친구들과 손쉽게 공유할 수 있습니다.
- 편집기 소스를 복사해서 게시판에 붙여넣기 해보세요. 이쁘게 붙여집니다.
- 본사이트는 `크롬`과 `엣지브라우저`에 최적화되어 있습니다.

# 하이퍼링크를 이용한 소스 불러오기
- 하이퍼링크에 소스를 추가하여 편집기로 바로 불러 올 수 있습니다.
- 언어구분자는 `bash`, `c`, `cc`, `javascript` 등 본 사이트의 언어별 URL을 참고하면 됩니다.
- 전체 URL의 길이는 15,000 바이트를 넘으면 안됩니다.
- `pako` 압축라이브러리가 필요합니다.
- `Ctrl+Shift+F10` 단축키를 누르면 에디터에 있는 소스 코드의 하이퍼링크가 클립보드로 복사됩니다. 
```js
// 자바스크립트 예제
const base_url = 'https://www.ryugod.com/pages/ide/' + "언어구분자"
const url = `${base_url}/source:${Buffer.from(pako.deflate("표시할 소스"))
    .toString('base64').replace(/\//g, "_")}`
const tag = `<a href="${url}">🚀 코드 테스트 해보기</a>`
```

# 지원언어 및 DB
- 11l
- 4tH
- 8th
- Ada
- Adept
- Afnix
- Agda
- Aime
- Aku
- Alan
- Algae
- Algol60
- Algol68
- Algol W
- Alice
- Alma
- Alore
- Alta
- Amiga E
- AngelScript
- APL
- APlus
- Arc
- Argile
- Aribias
- Arrow
- Arturo
- AspectC++
- AspectJ
- Assembly(x86_64)
- Asymptote
- ATS
- AutoHotKey
- AutoIt
- Avalon
- Awk
- B
- Bacon
- Baik
- Ballerina
- Bash
- Basic
- Battlestar
- Befunge
- BC
- BCPL
- Bean
- BeanShell
- Berry
- Bhuna
- Blossom
- Blue
- Bob
- Boron
- Boson
- BrainFuck
- Brat
- Buzz
- C
- C#
- C++
- C2
- C3
- Caboose
- Carp
- Castile
- Ceylon
- ChaiScript
- Chapel
- Cheddar
- Chipmunk Basic
- Chuck
- Ciao
- Circle
- Citrine
- Citron
- Clean
- Clipper
- CLIPS
- Clojure
- Clover
- Cobol
- Cobra
- Coconut
- CoffeeScript
- Comal
- Commodore BASIC
- Cone
- Conure
- Cor
- CoreScript
- CppScript
- Crystal
- CUPL/CORC
- Curry
- D
- Dafny
- Dao
- Dart
- daScript
- Dino
- Dogescript
- Duck
- Dylan
- E
- eC
- EGA
- Egison
- ELENA
- elastiC
- Elm
- EMacs Lisp
- Emerald
- Emo
- Erlang
- Esterel
- Euphoria
- Expect
- F#
- Factor
- Falcon
- Fantom
- Fe
- Felix
- Fennel
- Feral
- Ferite
- Fexl
- Ficus
- Filagree
- Fish
- Flax
- Flix
- Focal
- Forth
- Fortran
- fox-lang
- Foxely
- FreeBASIC
- Frege
- Frink
- Gambas
- GAP
- GEL
- Genie
- Gentee
- Genyris
- Gnuplot
- Go
- Goat
- Goby
- Golo
- Gosu
- Grace
- Gravity
- Gri
- Groovy
- GSL
- Guile
- Gwion
- Hack
- Haskell
- Have
- Haxe
- Hermes
- Hexiscript
- HLA
- Hope
- Horse64
- HTML
- Huginn
- Huo
- ICI
- Icon
- IDL
- Idris
- ILAsm
- Inform
- Ink
- Io
- Ioke
- Iphigeneia
- J
- J*
- Jancy
- Janet
- Jasmin
- Java
- JavaScript
- Joao
- JohnsonScript
- Jolie
- Joy
- Jq
- Jsish
- Jsonnet
- JSP
- Julia 
- Jython
- Kenaf
- Killa
- Knight
- Koka
- Kona
- Kos
- Kotlin
- kscript
- Latro
- LaTeX
- LDPL
- Lean
- LeekScript
- Levi
- Lily
- Limbo
- Lisaac
- Lisp
- Little
- LittleLang
- LiveScript
- LK
- LLVM-IR
- Lobster
- Logo
- LOLCODE
- Loli
- Lox
- Lua
- Luci
- Lumi
- Luxury
- Mari
- Make
- Markdown
- MASM
- Maude
- Maxc
- Maxima
- Melon
- Mercury
- Miniscript
- MiniZinc
- Mirah
- Mirth
- Modula-2
- Modula-3
- MongoDB
- Mu
- MUMPS
- Muon
- MY-BASIC
- Myrddin
- MySQL
- Mythryl
- Nanoquery
- Neco
- Nectar
- NetRexx
- Never
- NewLisp
- NewtonScript
- Next
- Nial
- Nice
- Nickle
- Nim
- Noumenon
- Novus
- Nuua
- Nyx
- Oak
- Oberon
- Objeck
- Objective-C
- ObjectScript
- OCaml
- Octave
- Odin
- Oforth
- ooc
- Opal
- OpenSCAD
- OpenSpin
- Oracle
- Oz
- Pagan
- PARI/GP
- Pascal
- Pawn
- Pepper
- Perl
- Phix
- PHP
- PIC
- Picat
- Pike
- PILOT
- Pharo
- Pocketlang
- Poly/ML
- Pony
- Poplog
- PostgreSQL
- PostScript
- Potion
- PowerShell
- Praat
- Processing
- Prolog
- PROSE
- PROMELA
- Pupp
- Puppet
- Pure
- Pyret
- Python
- Q
- Qore
- QuickBASIC
- R
- Racket
- Raku
- Rapira
- Ratfor
- Rebol
- Red
- Redis
- REXX
- Rigal
- Ring
- Rix
- Rk
- Rockstar
- RPL/2
- Rubi
- Ruby
- Ruci
- Rust
- Rutger
- S-Lang
- Saffire
- Sather
- Saurus
- Scala
- Scheme
- Scilab
- Scriptol
- Self
- SETL
- Seq
- Shen
- Simula
- Sink
- Sisal
- Slash
- Sleep
- Slogan
- Smalltalk
- Snek
- Snobol4
- SoftScript
- Solidity
- SOM
- Sparkling
- SPL
- Spow
- SQLite
- SQL Server
- Squirrel
- Standard ML
- Stanza
- StarLark
- Storm
- StormScript
- Strand
- Streem
- Strela
- SurgeScript
- Swift
- SZL
- Tamgu
- Tcsh
- Tea
- Terminal-BASIC
- Terra
- TeX
- TIScript
- TotemScript
- TypeScript
- uclang
- Umka
- Umple
- Unicon
- Ursa
- V
- Vala
- VB.Net
- VBScript
- Verilog
- VHDL
- Virgil
- WardScript
- Wax
- Windows Batch
- World
- Wren
- X10
- Xion
- XL
- xlang
- XPL0
- Yabasic
- Yacas
- YASL
- Yasm
- Yorick
- Zebra
- Zig
- Zion
- zkl
- μC++
- 누리
- 아희
- 약속
- 난해한 혀엉...

# 지원 환경
- AngularJS
- Deno
- Emscripten
- JQuery
- Node.js
- React.js
- Terraform
- Vue.js
- Pug

# 변경사항
## 2021-06-12
- 마크다운 추가
- PHP 추가
## 2021-06-13
- 소스 공유하기 QR코드 추가
- Fortran 추가
- Pascal 추가
- Perl 추가
## 2021-06-14
- Lisp 추가
- 난해한 혀엉... 추가
## 2021-06-16
- 명령 팔레트 아이콘 추가
- 모바일 크롬에서 툴바가 사라지는 버그 수정
## 2021-06-17
- Haskell 추가
- Lua 추가
- Objective-C 추가
## 2021-06-18
- Ada 추가
- Swift 추가
## 2021-06-19
- Algol 추가
- Cobol 추가
- Groovy 추가
- Smalltalk 추가
- React.js 추가
- Vue.js 추가
## 2021-06-20
- Assembly(x86_64) 추가
- Erlang 추가
- Crystal 추가
## 2021-06-21
- Dart 추가
- Prolog 추가
- Scala 추가
- Solidity 추가
## 2021-06-23
- VBScript 추가
- Windows Batch 추가
## 2021-06-24
- Borland C++ 5.5 (Win32) 추가
- Clojure 추가
- Julia 추가
## 2021-06-25
- Basic 추가
- D 추가
- Emscripten 환경 추가
## 2021-06-26
- 소스 탭 기능 추가
## 2021-06-27
- VHDL 추가
## 2021-06-28
- 파일 Drag&Drop 기능 추가
- CoffeeScript 추가
- Octave (Matlab 호환) 추가
## 2021-06-29
- 파일 가져오기 기능 추가
- MySQL 추가
## 2021-06-30
- JSP (Java Server Pages) 추가
- PostgreSQL 추가
- SQL 쿼리 결과 표 출력 기능 추가
## 2021-07-01
- JQuery 추가
- Redis 추가
## 2021-07-03
- REPL 환경 아이콘 추가
## 2021-07-04
- AngularJS 추가
- Deno 추가
- Raku 추가
## 2021-07-05
- Turbo C++ 1.01 (DOS) 추가
## 2021-07-07
- Nim 추가
## 2021-07-08
- MongoDB 추가
- OCaml 추가
## 2021-07-09
- Turbo Pascal 5.5 (DOS) 추가
- 누리 추가
- 약속 추가
## 2021-07-10
- PostScript 추가
## 2021-07-13
- Python 2.7 추가
- Linux Shell -> Bash 이름변경
- Tcsh 추가
- 마지막에 사용했던 언어 다시 불러오기 기능 추가
## 2021-07-14
- AutoIt 추가
## 2021-07-15
- JSP에서 JSTL 사용가능
## 2021-07-16
- Racket 추가
- Scala 3 추가
## 2021-07-19
- 가람 추가
- 엄랭 추가
## 2021-07-23
- 오류 하이라이팅 기능 추가
## 2021-07-24
- 언어별 인자 설정 가능 (기본 설정 대화상자)
## 2021-07-25
- Factor 추가
- Fantom 추가(드루팔 아님)
- Forth 추가
- Haxe 추가
- ILAsm 추가
- Jython 추가
- PARI/GP 추가
- VB.Net 추가
## 2021-07-26
- Chipmunk Basic 추가
- Icon 추가
- Oz 추가
- Pike 추가
- Pawn 추가
- REXX 추가
- Standard ML 추가
## 2021-07-27
- E 추가
- J 추가
- Phix 추가
- Pure 추가
- Yabasic 추가
- Yasm 추가
- V 추가
## 2021-07-28
- Awk 추가
- Gambas 추가
- Genie 추가
- LaTeX 추가
- TeX 추가
- Vala 추가
- Verilog 추가
- zkl 추가
## 2021-07-29
- Coconut 추가
- LiveScript 추가
- Pony 추가
- PowerShell 추가
- Pug 추가
- Scilab 추가
- Squirrel 추가
## 2021-07-30
- Aime 추가
- ELENA 추가
- Elm 추가
- Euphoria 추가
- Maxima 추가
- Snobol4 추가
- Zig 추가
- Dogescript 추가
## 2021-07-31
- BC 추가
- EMacs Lisp
- Falcon 추가
- FireMonkey 추가
- Rhino 추가
## 2021-08-01
- Gnuplot 추가
- Ferite 추가
- Frink 추가
- Objeck 추가
- Oforth 추가
- Potion 추가
- Processing 추가
## 2021-08-02
- Fennel 추가
- Lily 추가
- Turbo C (DOS) 추가
- Yorick 추가
## 2021-08-03
- Golo 추가
- Gosu 추가
- Hexiscript 추가
- Jsish 추가
- Pyret 추가
- Fexl 추가
## 2021-08-04
- 11l 추가
- LDPL 추가
- Logo 추가
- Miniscript 추가
- AutoHotKey 추가
## 2021-08-05
- CLang 추가
- CLang++ 추가
- Dafny 추가
- MoonScript 추가
- MY-BASIC 추가
- Picat 추가
## 2021-08-06
- 실행 시에 간헐적으로 `파일 업로드중...`에서 멈추던 현상 해결
- BCPL 추가
- Ceylon 추가
## 2021-08-07
- Wren 추가
## 2021-08-08
- Cobra 추가
- IDL(GDL) 추가
- Io 추가
- NetRexx 추가
- Rebol 추가
- StarLark 추가
## 2021-08-09
- C# (.NET Core) 추가
- Q 추가
- TIScript 추가
## 2021-08-10
- Guile 추가
- Nanoquery 추가
- Neco 추가
- NewLisp 추가
- S-Lang 추가
## 2021-08-11
- Dylan 추가
- HLA 추가
- Janet 추가
- Jq 추가
- Ursa 추가
- XPL0 추가
- Yacas 추가
## 2021-08-12
- ATS 추가
- GAP 추가
- Gentee 추가
- Gravity 추가
- Have 추가
- Terraform 추가
## 2021-08-13
- ChaiScript 추가
- Futhark 추가
- Odin 추가
- Terra 추가
## 2021-08-14
- ArkScript 추가
- Baik 추가
- Frege 추가
- Red 추가
- Wu 추가
- Wyvern 추가
## 2021-08-15
- Argile 추가
- Arturo 추가
- B 추가
- Brat추가
- Caboose 추가
- FreeBasic 추가
- Nial 추가
- ooc 추가
- Poplog 추가
- SkyLark 추가
## 2021-08-16
- Aribas 추가
- Egison 추가
- LLVM-IR 추가
- Lox 추가
- Sather 추가
- SWI-Prolog 추가
## 2021-08-17
- ASP.NET 추가
- Ring 추가
- Seed7 추가
- Simula 추가
## 2021-08-18
- Bacon 추가
- GW-BASIC 추가
- MASM 추가
- X10 추가
- Xion 추가
## 2021-08-19
- Sisal 추가
- Sleep 추가
## 2021-08-20
- Genyris 추가
- Huginn 추가
- μC++ 추가
## 2021-08-21
- AFNIX 추가
- Jasmin 추가
- Opal 추가
- QuickBASIC 추가
- Self 추가
## 2021-08-22
- Curry(PAKCS) 추가
- Hack 추가
- Ioke 추가
- Modula2 추가
- Nickle 추가
- OpenSpin 추가
- Sasszz 추가
- SCSS 추가
- PROMELA 추가
## 2021-08-23
- Agda 추가
- Ciao 추가
- Curry(Sloth) 추가
- Lean 추가
## 2021-08-24
- GEL 추가
- Jsonnet 추가
- Puppet 추가
- Ratfor 추가
- Rutger 추가
## 2021-08-25
- Agena 추가
- Asymptote 추가
- Bas 추가
- Carp 추가
- Lisaac 추가
- SETL 추가
## 2021-08-26
- ChezScheme 추가
- Koka 추가
- psPILOT 추가
## 2021-08-27
- Clean 추가
- Idris 추가
- Idris2 추가
- MiniZinc 추가
- OpenSCAD 추가
## 2021-08-28
- Expect 추가
- Focal 추가
- NewtonScript 추가
- Tea 추가
## 2021-08-29
- CAML 추가
- Chapel 추가
- Chuck 추가
- Joy 추가
- Maude 추가
- Nice 추가
- Scriptol 추가
## 2021-08-31
- Clipper 추가
- Qore 추가
## 2021-09-01
- Loli 추가
- Mythryl 추가
## 2021-09-02
- 8th 추가
- Comal 추가
- Praat 추가
- ParaSail 추가
## 2021-09-03
- Goby 추가
- Inform 추가
- Pharo 추가
## 2021-09-04
- Alice 추가
- BeanShell 추가
- CobolScript 추가
- Fish 추가
- Hy 추가
- Mirah 추가
- Senegal 추가
- Snek 추가
- Umple 추가
## 2021-09-05
- CUPL/CORC 추가
- Mercury 추가
- SQL Server 추가
## 2021-09-06
- APL 추가
- Oracle(mariadb 호환모드) 추가
## 2021-09-07
- Esterel 추가
- Myrddin 추가
- Strand 추가
## 2021-09-08
- Elan 추가
## 2021-09-09
- Citrine 추가
- Oberon 추가
- Rapira 추가
- Rigal 추가
## 2021-09-10
- Algol60 추가
- Amiga E 추가
- Assembly(MC68K) 추가
## 2021-09-12
- PROSE 추가
- Terminal-BASIC 추가
## 2021-09-13
- Citron 추가
- CLIPS 추가
- Commodore BASIC 추가
- CoreScript 추가
- Flax 추가
- Goat 추가
- ObjectScript 추가
- Slogan 추가
- TotemScript 추가
## 2021-09-14
- Boson 추가
- kscript 추가
- Nectar 추가
- Novus 추가
- Storm 추가
- XL 추가
## 2021-09-15
- Flix 추가
- Gambit 추가
- Kona 추가
- Lobster 추가
- Muon 추가
- Pocketlang 추가
## 2021-09-16
- Aldor 추가
- Arc 추가
- Dao 추가
- Dictu 추가
- Dino 추가
- Duck 추가
- Felix 추가
- Never 추가
- Smile 추가
- Wax 추가
## 2021-09-17
- Ape 추가
- Ballerina 추가
- D(Digital Mars) 추가
- Grace 추가
- Hope 추가
- Lumi 추가
- Pepper 추가
- Rubi 추가
- WardScript 추가
## 2021-09-18
- Arrow 추가
- Avalon 추가
- Feral 추가
- Gwion 추가
- Melon 추가
- uclang 추가
## 2021-09-19
- Alan 추가
- xlang 추가
## 2021-09-20
- APlus 추가
## 2021-09-21
- Buzz 추가
- Cone 추가
- Emo 추가
- Maxc 추가
- Saffire 추가
- Shen 추가
- Sink 추가
- Spow 추가
- Streem 추가
## 2021-09-22
- Bean 추가
- Bob 추가
- C2 추가
- Knight 추가
- Tamgu 추가
## 2021-09-24
- Zimbu 추가
## 2021-09-25
- Algae 추가
- Gri 추가
- Kotlin Script 추가
- Limbo 추가
## 2021-09-26
- Algol W 추가
- Alore 추가
- Battlestar 추가
- Cheddar 추가
- Cor 추가
## 2021-09-27
- Virgil 추가
## 2021-09-28
- C3 추가
- Rockstar 추가
## 2021-09-29
- Hermes 추가
- Umka 추가
## 2021-09-30
- AngelScript 추가
- Clover 추가
- J* 추가
- Mu 추가
## 2021-10-01
- ABS 추가
- DuckScript 추가
- YASL 추가
## 2021-10-02
- Jolie 추가
## 2021-10-03
- AspectJ 추가
- BrainFuck 추가
- Befunge 추가
- GSL 추가
- Poly/ML 추가
- SPL 추가
- SurgeScript 추가
## 2021-10-04
- Bhuna 추가
- Castile 추가가
- eC 추가
- Iphigeneia 추가
## 2021-10-05
- Circle 추가
- daScript 추가
- Fe 추가
- Huo 추가
- Mirth 추가
- Rix 추가
- Rk 추가
- Slash 추가
## 2021-10-06
- Levi 추가
- SOM 추가
## 2021-10-07
- Make 추가
## 2021-10-08
- Ink 추가
- LittleLang 추가
## 2021-10-09
- Tamsin 추가
## 2021-10-10
- 4tH 추가
- Alta 추가
## 2021-10-12
- Emerald 추가
## 2021-10-13
- Alma 추가
- JerryScript 추가
## 2021-10-14
- RPL/2 추가
## 2021-10-15
- Berry 추가
- Ruci 추가
- Sparkling 추가
- SoftScript 추가
- SZL 추가
## 2021-10-16
- EGA 추가
- StormScript 추가
## 2021-10-17
- CppScript 추가
## 2021-10-18
- Filagree 추가
- LK 추가
## 2021-10-19
- elastiC 추가
- Oak 추가
## 2021-10-20
- Jancy 추가
- Pupp 추가
- Seq 추가
## 2021-10-21
- PIC 추가
- Roff 추가
## 2021-10-22
- Latro 추가
## 2021-10-25
- Blue 추가
- ICI 추가
## 2021-10-26
- Saurus 추가
## 2021-10-27
- Killa 추가
- Luxury 추가
## 2021-10-28
- Mari 추가
## 2021-10-29
- Aku 추가
- Strela 추가
- Zebra 추가
- Zion 추가
## 2021-10-30
- Conure 추가
- fox-lang 추가
- JohnsonScript 추가
- Kenaf 추가
- LeekScript 추가
- Nyx 추가
## 2021-10-31
- Blossom 추가
- Noumenon 추가
- Pagan 추가
## 2021-11-01
- Nuua 추가
## 2021-11-06
- Joao 추가
- Next 추가
## 2021-11-07
- Foxely 추가
## 2021-11-09
- Boron 추가
- Par 추가