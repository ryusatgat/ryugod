# Ryugod (https://www.ryugod.com)
- This site provides a development environment for simple testing.
- You can try running 'Linux Shell' and multiple program languages ​​without login.
- It provides online compilers for C language, C++, Java, etc. and supports **syntax highlighting** function for all languages.
- You can upload and download files to/from the server.
- You can add source files by drag and drop.
- You can easily share the source code you wrote with your friends.
- Try copying the editor source and pasting it on the bulletin board. It is nicely pasted.
- This site is optimized for 'Chrome' and 'Edge Browser'.

# Load source using hyperlink
- You can add a source to a hyperlink and load it directly into the editor.
- For language identifiers, refer to the URL for each language of this site, such as `bash`, `c`, `cc`, or `javascript`.
- The length of the entire URL must not exceed 15,000 bytes.
- The `pako` library is required.
- If you press the `Ctrl+Shift+F10` shortcut key, the hyperlink of the source code in the editor is copied to the clipboard.
```js
// JavaScript example
const base_url = 'https://www.ryugod.com/pages/ide/' + "language delimiter"
const url = `${base_url}/source:${Buffer.from(pako.deflate("source to display"))
    .toString('base64').replace(/\//g, "_")}`
const tag = `<a href="${url}">🚀 Test your code</a>`
```

# Supported language and DB
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
- Borealis
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
- Dragon
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
- GolfScript
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
- Hedgehog
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
- INTERCAL
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
- Whitespace
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

# 
Supported Environment
- AngularJS
- Deno
- Emscripten
- JQuery
- Node.js
- React.js
- Terraform
- Vue.js
- Pug

# Change history
## 2021-06-12
- Markdown supported
- PHP supported
## 2021-06-13
- Sharing source and QR code supported
- Fortran supported
- Pascal supported
- Perl supported
## 2021-06-14
- Lisp supported
- 난해한 혀엉... supported
## 2021-06-16
- command pallete icon supported
- mobile browser bug fixed
## 2021-06-17
- Haskell supported
- Lua supported
- Objective-C supported
## 2021-06-18
- Ada supported
- Swift supported
## 2021-06-19
- Algol supported
- Cobol supported
- Groovy supported
- Smalltalk supported
- React.js supported
- Vue.js supported
## 2021-06-20
- Assembly(x86_64) supported
- Erlang supported
- Crystal supported
## 2021-06-21
- Dart supported
- Prolog supported
- Scala supported
- Solidity supported
## 2021-06-23
- VBScript supported
- Windows Batch supported
## 2021-06-24
- Borland C++ 5.5 (Win32) supported
- Clojure supported
- Julia supported
## 2021-06-25
- Basic supported
- D supported
- Emscripten supported
## 2021-06-26
- 소스 탭 기능 supported
## 2021-06-27
- VHDL supported
## 2021-06-28
- Drag&Drop function supported
- CoffeeScript supported
- Octave (Matlab compatible) supported
## 2021-06-29
- File import function supported
- MySQL supported
## 2021-06-30
- JSP (Java Server Pages) supported
- PostgreSQL supported
- SQL query supported
## 2021-07-01
- JQuery supported
- Redis supported
## 2021-07-03
- REPL environment supported
## 2021-07-04
- AngularJS supported
- Deno supported
- Raku supported
## 2021-07-05
- Turbo C++ 1.01 (DOS) supported
## 2021-07-07
- Nim supported
## 2021-07-08
- MongoDB supported
- OCaml supported
## 2021-07-09
- Turbo Pascal 5.5 (DOS) supported
- 누리 supported
- 약속 supported
## 2021-07-10
- PostScript supported
## 2021-07-13
- Python 2.7 supported
- Linux Shell -> Bash changes
- Tcsh supported
## 2021-07-14
- AutoIt supported
## 2021-07-15
- JSTL on JSP enabled
## 2021-07-16
- Racket supported
- Scala 3 supported
## 2021-07-19
- 가람 supported
- 엄랭 supported
## 2021-07-23
- Error highlighting supported
## 2021-07-24
- Argument settings supported
## 2021-07-25
- Factor supported
- Fantom supported
- Forth supported
- Haxe supported
- ILAsm supported
- Jython supported
- PARI/GP supported
- VB.Net supported
## 2021-07-26
- Chipmunk Basic supported
- Icon supported
- Oz supported
- Pike supported
- Pawn supported
- REXX supported
- Standard ML supported
## 2021-07-27
- E supported
- J supported
- Phix supported
- Pure supported
- Yabasic supported
- Yasm supported
- V supported
## 2021-07-28
- Awk supported
- Gambas supported
- Genie supported
- LaTeX supported
- TeX supported
- Vala supported
- Verilog supported
- zkl supported
## 2021-07-29
- Coconut supported
- LiveScript supported
- Pony supported
- PowerShell supported
- Pug supported
- Scilab supported
- Squirrel supported
## 2021-07-30
- Aime supported
- ELENA supported
- Elm supported
- Euphoria supported
- Maxima supported
- Snobol4 supported
- Zig supported
- Dogescript supported
## 2021-07-31
- BC supported
- EMacs Lisp
- Falcon supported
- FireMonkey supported
- Rhino supported
## 2021-08-01
- Gnuplot supported
- Ferite supported
- Frink supported
- Objeck supported
- Oforth supported
- Potion supported
- Processing supported
## 2021-08-02
- Fennel supported
- Lily supported
- Turbo C (DOS) supported
- Yorick supported
## 2021-08-03
- Golo supported
- Gosu supported
- Hexiscript supported
- Jsish supported
- Pyret supported
- Fexl supported
## 2021-08-04
- 11l supported
- LDPL supported
- Logo supported
- Miniscript supported
- AutoHotKey supported
## 2021-08-05
- CLang supported
- CLang++ supported
- Dafny supported
- MoonScript supported
- MY-BASIC supported
- Picat supported
## 2021-08-06
- fie uploading bug fixed
- BCPL supported
- Ceylon supported
## 2021-08-07
- Wren supported
## 2021-08-08
- Cobra supported
- IDL(GDL) supported
- Io supported
- NetRexx supported
- Rebol supported
- StarLark supported
## 2021-08-09
- C# (.NET Core) supported
- Q supported
- TIScript supported
## 2021-08-10
- Guile supported
- Nanoquery supported
- Neco supported
- NewLisp supported
- S-Lang supported
## 2021-08-11
- Dylan supported
- HLA supported
- Janet supported
- Jq supported
- Ursa supported
- XPL0 supported
- Yacas supported
## 2021-08-12
- ATS supported
- GAP supported
- Gentee supported
- Gravity supported
- Have supported
- Terraform supported
## 2021-08-13
- ChaiScript supported
- Futhark supported
- Odin supported
- Terra supported
## 2021-08-14
- ArkScript supported
- Baik supported
- Frege supported
- Red supported
- Wu supported
- Wyvern supported
## 2021-08-15
- Argile supported
- Arturo supported
- B supported
- Bratsupported
- Caboose supported
- FreeBasic supported
- Nial supported
- ooc supported
- Poplog supported
- SkyLark supported
## 2021-08-16
- Aribas supported
- Egison supported
- LLVM-IR supported
- Lox supported
- Sather supported
- SWI-Prolog supported
## 2021-08-17
- ASP.NET supported
- Ring supported
- Seed7 supported
- Simula supported
## 2021-08-18
- Bacon supported
- GW-BASIC supported
- MASM supported
- X10 supported
- Xion supported
## 2021-08-19
- Sisal supported
- Sleep supported
## 2021-08-20
- Genyris supported
- Huginn supported
- μC++ supported
## 2021-08-21
- AFNIX supported
- Jasmin supported
- Opal supported
- QuickBASIC supported
- Self supported
## 2021-08-22
- Curry(PAKCS) supported
- Hack supported
- Ioke supported
- Modula2 supported
- Nickle supported
- OpenSpin supported
- Sasszz supported
- SCSS supported
- PROMELA supported
## 2021-08-23
- Agda supported
- Ciao supported
- Curry(Sloth) supported
- Lean supported
## 2021-08-24
- GEL supported
- Jsonnet supported
- Puppet supported
- Ratfor supported
- Rutger supported
## 2021-08-25
- Agena supported
- Asymptote supported
- Bas supported
- Carp supported
- Lisaac supported
- SETL supported
## 2021-08-26
- ChezScheme supported
- Koka supported
- psPILOT supported
## 2021-08-27
- Clean supported
- Idris supported
- Idris2 supported
- MiniZinc supported
- OpenSCAD supported
## 2021-08-28
- Expect supported
- Focal supported
- NewtonScript supported
- Tea supported
## 2021-08-29
- CAML supported
- Chapel supported
- Chuck supported
- Joy supported
- Maude supported
- Nice supported
- Scriptol supported
## 2021-08-31
- Clipper supported
- Qore supported
## 2021-09-01
- Loli supported
- Mythryl supported
## 2021-09-02
- 8th supported
- Comal supported
- Praat supported
- ParaSail supported
## 2021-09-03
- Goby supported
- Inform supported
- Pharo supported
## 2021-09-04
- Alice supported
- BeanShell supported
- CobolScript supported
- Fish supported
- Hy supported
- Mirah supported
- Senegal supported
- Snek supported
- Umple supported
## 2021-09-05
- CUPL/CORC supported
- Mercury supported
- SQL Server supported
## 2021-09-06
- APL supported
- Oracle(mariadb compatible mode) supported
## 2021-09-07
- Esterel supported
- Myrddin supported
- Strand supported
## 2021-09-08
- Elan supported
## 2021-09-09
- Citrine supported
- Oberon supported
- Rapira supported
- Rigal supported
## 2021-09-10
- Algol60 supported
- Amiga E supported
- Assembly(MC68K) supported
## 2021-09-12
- PROSE supported
- Terminal-BASIC supported
## 2021-09-13
- Citron supported
- CLIPS supported
- Commodore BASIC supported
- CoreScript supported
- Flax supported
- Goat supported
- ObjectScript supported
- Slogan supported
- TotemScript supported
## 2021-09-14
- Boson supported
- kscript supported
- Nectar supported
- Novus supported
- Storm supported
- XL supported
## 2021-09-15
- Flix supported
- Gambit supported
- Kona supported
- Lobster supported
- Muon supported
- Pocketlang supported
## 2021-09-16
- Aldor supported
- Arc supported
- Dao supported
- Dictu supported
- Dino supported
- Duck supported
- Felix supported
- Never supported
- Smile supported
- Wax supported
## 2021-09-17
- Ape supported
- Ballerina supported
- D(Digital Mars) supported
- Grace supported
- Hope supported
- Lumi supported
- Pepper supported
- Rubi supported
- WardScript supported
## 2021-09-18
- Arrow supported
- Avalon supported
- Feral supported
- Gwion supported
- Melon supported
- uclang supported
## 2021-09-19
- Alan supported
- xlang supported
## 2021-09-20
- APlus supported
## 2021-09-21
- Buzz supported
- Cone supported
- Emo supported
- Maxc supported
- Saffire supported
- Shen supported
- Sink supported
- Spow supported
- Streem supported
## 2021-09-22
- Bean supported
- Bob supported
- C2 supported
- Knight supported
- Tamgu supported
## 2021-09-24
- Zimbu supported
## 2021-09-25
- Algae supported
- Gri supported
- Kotlin Script supported
- Limbo supported
## 2021-09-26
- Algol W supported
- Alore supported
- Battlestar supported
- Cheddar supported
- Cor supported
## 2021-09-27
- Virgil supported
## 2021-09-28
- C3 supported
- Rockstar supported
## 2021-09-29
- Hermes supported
- Umka supported
## 2021-09-30
- AngelScript supported
- Clover supported
- J* supported
- Mu supported
## 2021-10-01
- ABS supported
- DuckScript supported
- YASL supported
## 2021-10-02
- Jolie supported
## 2021-10-03
- AspectJ supported
- BrainFuck supported
- Befunge supported
- GSL supported
- Poly/ML supported
- SPL supported
- SurgeScript supported
## 2021-10-04
- Bhuna supported
- Castile supported가
- eC supported
- Iphigeneia supported
## 2021-10-05
- Circle supported
- daScript supported
- Fe supported
- Huo supported
- Mirth supported
- Rix supported
- Rk supported
- Slash supported
## 2021-10-06
- Levi supported
- SOM supported
## 2021-10-07
- Make supported
## 2021-10-08
- Ink supported
- LittleLang supported
## 2021-10-09
- Tamsin supported
## 2021-10-10
- 4tH supported
- Alta supported
## 2021-10-12
- Emerald supported
## 2021-10-13
- Alma supported
- JerryScript supported
## 2021-10-14
- RPL/2 supported
## 2021-10-15
- Berry supported
- Ruci supported
- Sparkling supported
- SoftScript supported
- SZL supported
## 2021-10-16
- EGA supported
- StormScript supported
## 2021-10-17
- CppScript supported
## 2021-10-18
- Filagree supported
- LK supported
## 2021-10-19
- elastiC supported
- Oak supported
## 2021-10-20
- Jancy supported
- Pupp supported
- Seq supported
## 2021-10-21
- PIC supported
- Roff supported
## 2021-10-22
- Latro supported
## 2021-10-25
- Blue supported
- ICI supported
## 2021-10-26
- Saurus supported
## 2021-10-27
- Killa supported
- Luxury supported
## 2021-10-28
- Mari supported
## 2021-10-29
- Aku supported
- Strela supported
- Zebra supported
- Zion supported
## 2021-10-30
- Conure supported
- fox-lang supported
- JohnsonScript supported
- Kenaf supported
- LeekScript supported
- Nyx supported
## 2021-10-31
- Blossom supported
- Noumenon supported
- Pagan supported
## 2021-11-01
- Nuua supported
## 2021-11-06
- Joao supported
- Next supported
## 2021-11-07
- Foxely supported
## 2021-11-09
- Boron supported
- Par supported
## 2021-11-15
- Hedgehog supported
## 2021-11-20
- Borealis supported
## 2021-11-21
- Dragon supported
## 2021-12-07
- GolfScript supported
- INTERCAL supported
## 2021-12-09
- Whitespace supported