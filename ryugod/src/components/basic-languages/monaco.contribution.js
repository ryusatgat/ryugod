import '../editor/editor.api.js';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import './cpp/cpp.contribution.js';
import './csharp/csharp.contribution.js';
import './css/css.contribution.js';
import './go/go.contribution.js';
import './jsp/jsp.contribution.js';
import './kotlin/kotlin.contribution.js';
import './lua/lua.contribution.js';
import './mysql/mysql.contribution.js';
import './nim/nim.contribution.js';
import './octave/octave.contribution.js';
import './perl/perl.contribution.js';
import './pgsql/pgsql.contribution.js';
import './php/php.contribution.js';
import './python/python.contribution.js';
import './r/r.contribution.js';
import './shell/shell.contribution.js';
import './sql/sql.contribution.js';
import './swift/swift.contribution.js';
import './typescript/typescript.contribution.js';

import './11l/11l.contribution.js';
import './4th/4th.contribution.js';
import './8th/8th.contribution.js';
import './a68k/a68k.contribution.js';
//import './abap/abap.contribution.js';
import './abc/abc.contribution.js';
import './abs/abs.contribution.js';
import './ada/ada.contribution.js';
import './adept/adept.contribution.js';
import './agda/agda.contribution.js';
import './agena/agena.contribution.js';
import './agora/agora.contribution.js';
import './afnix/afnix.contribution.js';
import './aime/aime.contribution.js';
import './aku/aku.contribution.js';
import './alan/alan.contribution.js';
import './aldor/aldor.contribution.js';
import './algae/algae.contribution.js';
import './algol/algol.contribution.js';
import './algol60/algol60.contribution.js';
import './alma/alma.contribution.js';
import './alore/alore.contribution.js';
import './alta/alta.contribution.js';
import './amber/amber.contribution.js';
import './amigae/amigae.contribution.js';
import './angelscript/angelscript.contribution.js';
import './ape/ape.contribution.js';
import './apl/apl.contribution.js';
import './aplus/aplus.contribution.js';
import './arc/arc.contribution.js';
import './argile/argile.contribution.js';
import './ark/ark.contribution.js';
import './arnoldc/arnoldc.contribution.js';
import './arrow/arrow.contribution.js';
import './arturo/arturo.contribution.js';
import './assembly/assembly.contribution.js';
import './asymptote/asymptote.contribution.js';
//import './apex/apex.contribution.js';
import './ats/ats.contribution.js';
import './autohotkey/autohotkey.contribution.js';
import './autoit/autoit.contribution.js';
import './avalon/avalon.contribution.js';
//import './azcli/azcli.contribution.js';
import './baik/baik.contribution.js';
import './ballerina/ballerina.contribution.js';
import './bat/bat.contribution.js';
import './battlestar/battlestar.contribution.js';
import './bc/bc.contribution.js';
import './bcpl/bcpl.contribution.js';
import './bean/bean.contribution.js';
import './befunge/befunge.contribution.js';
import './berry/berry.contribution.js';
import './bf/bf.contribution.js';
import './bhuna/bhuna.contribution.js';
//import './bicep/bicep.contribution.js';
import './blossom/blossom.contribution.js';
import './blue/blue.contribution.js';
import './bob/bob.contribution.js';
import './borealis/borealis.contribution.js';
import './boron/boron.contribution.js';
import './boson/boson.contribution.js';
import './brat/brat.contribution.js';
import './buzz/buzz.contribution.js';
import './c2/c2.contribution.js';
import './c3/c3.contribution.js';
import './caboose/caboose.contribution.js';
//import './cameligo/cameligo.contribution.js';
import './carp/carp.contribution.js';
import './castile/castile.contribution.js';
import './ceylon/ceylon.contribution.js';
import './chaiscript/chaiscript.contribution.js';
import './chaos/chaos.contribution.js';
import './chapel/chapel.contribution.js';
import './cheddar/cheddar.contribution.js';
import './chuck/chuck.contribution.js';
import './ciao/ciao.contribution.js';
import './cil/cil.contribution.js';
import './citrine/citrine.contribution.js';
import './citron/citron.contribution.js';
import './clean/clean.contribution.js';
import './clipper/clipper.contribution.js';
import './clips/clips.contribution.js';
import './clojure/clojure.contribution.js';
import './clover/clover.contribution.js';
import './cobol/cobol.contribution.js';
import './cobra/cobra.contribution.js';
import './coconut/coconut.contribution.js';
import './coffee/coffee.contribution.js';
import './colm/colm.contribution.js';
import './conure/conure.contribution.js';
import './cor/cor.contribution.js';
import './comal/comal.contribution.js';
import './cone/cone.contribution.js';
import './coq/coq.contribution.js';
import './cppscript/cppscript.contribution.js';
import './crystal/crystal.contribution.js';
//import './csp/csp.contribution.js';
import './cupl/cupl.contribution.js';
import './curry/curry.contribution.js';
import './d/d.contribution.js';
import './dafny/dafny.contribution.js';
import './dao/dao.contribution.js';
import './dart/dart.contribution.js';
import './dascript/dascript.contribution.js';
import './dictu/dictu.contribution.js';
import './dino/dino.contribution.js';
//import './dockerfile/dockerfile.contribution.js';
import './dogescript/dogescript.contribution.js';
import './dragon/dragon.contribution.js';
import './duck/duck.contribution.js';
import './duckscript/duckscript.contribution.js';
import './dylan/dylan.contribution.js';
import './e/e.contribution.js';
import './easylang/easylang.contribution.js';
import './ec/ec.contribution.js';
//import './ecl/ecl.contribution.js';
import './ega/ega.contribution.js';
import './egison/egison.contribution.js';
import './elan/elan.contribution.js';
import './elastic/elastic.contribution.js';
import './elena/elena.contribution.js';
import './elixir/elixir.contribution.js';
import './elm/elm.contribution.js';
import './emerald/emerald.contribution.js';
import './emo/emo.contribution.js';
import './erlang/erlang.contribution.js';
import './esterel/esterel.contribution.js';
import './euphoria/euphoria.contribution.js';
import './expect/expect.contribution.js';
import './factor/factor.contribution.js';
import './falcon/falcon.contribution.js';
import './fantom/fantom.contribution.js';
import './fe/fe.contribution.js';
import './felix/felix.contribution.js';
import './feral/feral.contribution.js';
import './ferite/ferite.contribution.js';
import './fexl/fexl.contribution.js';
import './ficus/ficus.contribution.js';
import './filagree/filagree.contribution.js';
import './flax/flax.contribution.js';
import './flix/flix.contribution.js';
//import './fluffy/fluffy.contribution.js';
import './focal/focal.contribution.js';
import './fortran/fortran.contribution.js';
import './forth/forth.contribution.js';
import './fox/fox.contribution.js';
import './foxely/foxely.contribution.js';
import './frege/frege.contribution.js';
import './frink/frink.contribution.js';
import './fsharp/fsharp.contribution.js';
import './funl/funl.contribution.js';
import './futhark/futhark.contribution.js';
import './gap/gap.contribution.js';
import './gel/gel.contribution.js';
import './genie/genie.contribution.js';
import './gentee/gentee.contribution.js';
import './genyris/genyris.contribution.js';
import './gluon/gluon.contribution.js';
import './gnuplot/gnuplot.contribution.js';
import './goat/goat.contribution.js';
import './goby/goby.contribution.js';
import './golfscript/golfscript.contribution.js';
import './golo/golo.contribution.js';
import './gosu/gosu.contribution.js';
import './gp/gp.contribution.js';
//import './graphql/graphql.contribution.js';
import './grace/grace.contribution.js';
import './gravity/gravity.contribution.js';
import './gri/gri.contribution.js';
import './groovy/groovy.contribution.js';
import './gsl/gsl.contribution.js';
import './gwion/gwion.contribution.js';
import './hack/hack.contribution.js';
//import './handlebars/handlebars.contribution.js';
import './haskell/haskell.contribution.js';
import './haxe/haxe.contribution.js';
import './hcl/hcl.contribution.js';
import './hedgehog/hedgehog.contribution.js';
import './hermes/hermes.contribution.js';
import './hexi/hexi.contribution.js';
import './hla/hla.contribution.js';
import './hope/hope.contribution.js';
import './horse64/horse64.contribution.js';
import './html/html.contribution.js';
import './huginn/huginn.contribution.js';
import './huo/huo.contribution.js';
import './hy/hy.contribution.js';
import './i/i.contribution.js';
import './ici/ici.contribution.js';
import './icon/icon.contribution.js';
import './idris/idris.contribution.js';
import './idl/idl.contribution.js';
import './inform/inform.contribution.js';
//import './ini/ini.contribution.js';
import './ink/ink.contribution.js';
import './intercal/intercal.contribution.js';
import './io/io.contribution.js';
import './ioke/ioke.contribution.js';
import './iphi/iphi.contribution.js'
import './idl/idl.contribution.js';
import './j/j.contribution.js';
import './jancy/jancy.contribution.js';
import './janet/janet.contribution.js';
import './jasmin/jasmin.contribution.js';
import './java/java.contribution.js';
import './javascript/javascript.contribution.js';
import './joao/joao.contribution.js';
import './johnsonscript/johnsonscript.contribution.js';
import './jolie/jolie.contribution.js';
import './joy/joy.contribution.js';
import './jstar/jstar.contribution.js';
import './jq/jq.contribution.js';
import './julia/julia.contribution.js';
import './kenaf/kenaf.contribution.js';
import './killa/killa.contribution.js';
import './knight/knight.contribution.js';
import './koka/koka.contribution.js';
import './kona/kona.contribution.js';
import './kos/kos.contribution.js';
import './kscript/kscript.contribution.js';
import './latro/latro.contribution.js';
import './lean/lean.contribution.js';
import './lemon/lemon.contribution.js';
import './ldpl/ldpl.contribution.js';
import './leekscript/leekscript.contribution.js';
//import './less/less.contribution.js';
import './levi/levi.contribution.js';
//import './lexon/lexon.contribution.js';
import './lily/lily.contribution.js';
import './limbo/limbo.contribution.js';
import './lisp/lisp.contribution.js';
import './lisaac/lisaac.contribution.js';
import './little/little.contribution.js';
import './littlelang/littlelang.contribution.js';
import './livescript/livescript.contribution.js';
import './lk/lk.contribution.js';
import './llvm/llvm.contribution.js';
import './lobster/lobster.contribution.js';
import './logo/logo.contribution.js';
import './lolcode/lolcode.contribution.js';
import './loli/loli.contribution.js';
import './lox/lox.contribution.js';
import './luci/luci.contribution.js';
import './lumi/lumi.contribution.js';
import './luxury/luxury.contribution.js';
//import './liquid/liquid.contribution.js';
import './m3/m3.contribution.js';
import './m4/m4.contribution.js';
import './make/make.contribution.js';
import './mari/mari.contribution.js';
import './markdown/markdown.contribution.js';
import './mathics/mathics.contribution.js';
import './maude/maude.contribution.js';
import './maxc/maxc.contribution.js';
import './maxima/maxima.contribution.js';
import './melon/melon.contribution.js';
import './mercury/mercury.contribution.js';
import './miniscript/miniscript.contribution.js';
import './minizinc/minizinc.contribution.js';
import './mirah/mirah.contribution.js';
import './miranda/miranda.contribution.js';
import './mirth/mirth.contribution.js';
//import './mips/mips.contribution.js';
import './monkey/monkey.contribution.js';
import './moonscript/moonscript.contribution.js';
//import './msdax/msdax.contribution.js';
import './mu/mu.contribution.js';
import './mumps/mumps.contribution.js';
import './muon/muon.contribution.js';
import './mybasic/mybasic.contribution.js';
import './myrddin/myrddin.contribution';
import './mythryl/mythryl.contribution';
import './nanoquery/nanoquery.contribution.js';
import './neko/neko.contribution.js';
import './nectar/nectar.contribution.js';
import './never/never.contribution.js';
import './newtonscript/newtonscript.contribution.js';
import './next/next.contribution.js';
import './nial/nial.contribution.js';
import './nice/nice.contribution.js';
import './nickle/nickle.contribution.js';
import './nit/nit.contribution.js';
import './noumenon/noumenon.contribution.js';
import './nyx/nyx.contribution.js';
import './novus/novus.contribution.js';
import './nuri/nuri.contribution.js';
import './nuua/nuua.contribution.js';
import './oak/oak.contribution.js';
import './oberon/oberon.contribution.js';
import './objeck/objeck.contribution.js';
import './objective-c/objective-c.contribution.js';
import './ocaml/ocaml.contribution.js';
import './odin/odin.contribution.js';
import './oforth/oforth.contribution.js';
import './ooc/ooc.contribution.js';
import './opal/opal.contribution.js';
import './orc/orc.contribution.js';
import './oz/oz.contribution.js';
import './p/p.contribution.js';
import './pagan/pagan.contribution.js';
import './par/par.contribution.js';
import './parasail/parasail.contribution.js';
import './parser3/parser3.contribution.js';
import './pascal/pascal.contribution.js';
import './pawn/pawn.contribution.js';
//import './pascaligo/pascaligo.contribution.js';
import './pepper/pepper.contribution.js';
import './pharo/pharo.contribution.js';
import './phix/phix.contribution.js';
import './pic/pic.contribution.js';
import './picat/picat.contribution.js';
import './pike/pike.contribution.js';
import './pilot/pilot.contribution.js';
import './pocketlang/pocketlang.contribution.js';
import './polyml/polyml.contribution.js';
import './pony/pony.contribution.js';
import './poplog/poplog.contribution.js';
//import './postiats/postiats.contribution.js';
import './postscript/postscript.contribution.js';
import './potion/potion.contribution.js';
//import './powerquery/powerquery.contribution.js';
import './powershell/powershell.contribution.js';
import './ppp/ppp.contribution.js';
import './praat/praat.contribution.js';
import './processing/processing.contribution.js';
import './promela/promela.contribution.js';
import './prolog/prolog.contribution.js';
import './prose/prose.contribution.js';
import './pug/pug.contribution.js';
import './pupp/pupp.contribution.js';
import './puppet/puppet.contribution.js';
import './pure/pure.contribution.js';
import './pyret/pyret.contribution.js';
import './q/q.contribution.js';
import './qore/qore.contribution.js';
import './raku/raku.contribution.js';
import './rapira/rapira.contribution.js';
//import './razor/razor.contribution.js';
import './rebol/rebol.contribution.js';
import './red/red.contribution.js';
import './redis/redis.contribution.js';
import './rexx/rexx.contribution.js';
//import './redshift/redshift.contribution.js';
//import './restructuredtext/restructuredtext.contribution.js';
import './ring/ring.contribution.js';
import './rigal/rigal.contribution.js';
import './rix/rix.contribution.js';
import './rk/rk.contribution.js';
import './rockstar/rockstar.contribution.js';
import './roff/roff.contribution.js';
import './rpl/rpl.contribution.js';
import './rubi/rubi.contribution.js';
import './ruby/ruby.contribution.js';
import './rust/rust.contribution.js';
import './rutger/rutger.contribution.js';
import './saffire/saffire.contribution.js';
import './sather/sather.contribution.js';
import './saurus/saurus.contribution.js';
//import './sb/sb.contribution.js';
import './scad/scad.contribution.js';
import './scala/scala.contribution.js';
import './scheme/scheme.contribution.js';
import './scilab/scilab.contribution.js';
import './scriptol/scriptol.contribution.js';
//import './scss/scss.contribution.js';
import './seed7/seed7.contribution.js';
import './self/self.contribution.js';
import './senegal/senegal.contribution.js';
import './seq/seq.contribution.js';
import './setl/setl.contribution.js';
import './shen/shen.contribution.js';
import './simula/simula.contribution.js';
import './sink/sink.contribution.js';
import './sisal/sisal.contribution.js';
import './slang/slang.contribution.js';
import './slash/slash.contribution.js';
import './sleep/sleep.contribution.js';
import './slogan/slogan.contribution.js';
import './smalltalk/smalltalk.contribution.js';
import './smile/smile.contribution.js';
import './sml/sml.contribution.js';
import './snobol/snobol.contribution.js';
import './softscript/softscript.contribution.js';
import './solidity/solidity.contribution.js';
import './som/som.contribution.js';
//import './sophia/sophia.contribution.js';
import './sparkling/sparkling.contribution.js';
import './spin/spin.contribution.js';
import './spl/spl.contribution.js';
import './spow/spow.contribution.js';
import './stanza/stanza.contribution.js';
import './starlark/starlark.contribution.js';
import './storm/storm.contribution.js';
import './stormscript/stormscript.contribution.js';
import './streem/streem.contribution.js';
import './strela/strela.contribution.js';
import './squirrel/squirrel.contribution.js';
//import './st/st.contribution.js';
import './surgescript/surgescript.contribution.js';
//import './systemverilog/systemverilog.contribution.js';
import './szl/szl.contribution.js';
import './tamgu/tamgu.contribution.js';
import './tamsin/tamsin.contribution.js';
import './tasm/tasm.contribution.js';
import './tcl/tcl.contribution.js';
import './tea/tea.contribution.js';
import './terra/terra.contribution.js';
import './tex/tex.contribution.js';
//import './twig/twig.contribution.js';
import './uclang/uclang.contribution.js';
import './umka/umka.contribution.js';
import './umm/umm.contribution.js';
import './umple/umple.contribution.js';
import './ursa/ursa.contribution.js';
import './v/v.contribution.js';
import './vala/vala.contribution.js';
import './vb/vb.contribution.js';
import './verilog/verilog.contribution.js';
import './vhdl/vhdl.contribution.js';
import './virgil/virgil.contribution.js';
import './vim/vim.contribution.js';
import './wardscript/wardscript.contribution.js'
import './wax/wax.contribution.js'
import './whitespace/whitespace.contribution.js'
import './world/world.contribution.js'
import './wren/wren.contribution.js'
import './wu/wu.contribution.js'
import './wyvern/wyvern.contribution.js'
import './x10/x10.contribution.js'
//import './xml/xml.contribution.js';
import './xion/xion.contribution.js'
import './xl/xl.contribution.js'
import './xpl0/xpl0.contribution.js';
import './yacas/yacas.contribution.js';
import './yaksok/yaksok.contribution.js';
//import './yaml/yaml.contribution.js';
import './yasl/yasl.contribution.js';
import './yorick/yorick.contribution.js';
import './zebra/zebra.contribution.js';
import './zig/zig.contribution.js';
import './zimbu/zimbu.contribution.js';
import './zion/zion.contribution.js';
import './zkl/zkl.contribution.js';