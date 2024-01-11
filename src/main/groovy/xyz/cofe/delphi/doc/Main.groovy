package xyz.cofe.delphi.doc

import xyz.cofe.delphi.ast.PascalFileAst
import xyz.cofe.delphi.tsys.TypeRefOwner
import xyz.cofe.delphi.tsys.TypeResolver
import xyz.cofe.delphi.tsys.TypeScope

import java.nio.charset.Charset
import java.nio.file.Path
import java.util.regex.Pattern

class Main {
    Charset charset = Charset.defaultCharset()
    Pattern sourcePattern = Pattern.compile('(?is)^.+\\.pas$')
    List<SourceRoot> sources = []
    Path outputDir = Path.of('.')

    static void main(String[] args){
        Main main = new Main()
        main.evalArgs(Arrays.asList(args))
    }

    void evalArgs(List<String> args){
        if( args==null ) throw new IllegalArgumentException("args==null")
        String state = ""
        while (!args.isEmpty()) {
            var arg = args.remove(0)
            switch (state) {
                case '':
                    switch (arg) {
                        case '-s':
                            state = '-s'
                            break
                        case '-e':
                            state = '-e'
                            break
                        case '-p':
                            state = '-p'
                            break
                        case '-d':
                            state = '-d'
                            break
                        case 'htmljs':
                            htmljs()
                            break
                        default:
                            System.err.println("undefined key $arg")
                            break
                    }
                    break
                case '-s':
                    state = ''
                    sources.add(new SourceRoot(path: Path.of(arg), charset: charset, pathPattern: sourcePattern))
                    break
                case '-e':
                    state = ''
                    charset = Charset.forName(arg)
                    break
                case '-p':
                    state = ''
                    sourcePattern = Pattern.compile(arg)
                    break
                case '-d':
                    state = ''
                    outputDir = Path.of(arg)
                    break
            }
        }
    }

    TypeScope parseTypes() {
        TypeScope ts = new TypeScope()

        SourceRoot.stream(sources).forEach { srcFile ->
            print "try parse $srcFile.path"

            try {
                var src = srcFile.path.getText(srcFile.charset.name())
                var pasFile = PascalFileAst.parse(src, srcFile.path.toString(), true)

                if (pasFile instanceof PascalFileAst.Unit) {
                    PascalFileAst.Unit pu = pasFile
                    ts.add(pu)
                }

                println " ok"
            } catch ( Throwable err ){
                println ""
                println "can't parse $srcFile.path, exception: $err"
            }
        }

        ts.unitMap().forEach { unitName, unitList ->
            unitList.forEach { pasUnit ->
                int resolvCount = 0
                var typeRefs = TypeRefOwner.typeRefs(pasUnit)
                if( typeRefs.size()>0 ){
                    print "resolving type refs "
                    typeRefs.forEach { tref ->
                        var resolvOpt = TypeResolver.resolve(tref, ts)
                        resolvOpt.ifPresentOrElse( resolv -> {
                            resolvCount++
                            resolv.apply()
                        }, () -> {
                            println()
                            println("unresolved type $tref in unit $unitName")
                        })
                    }
                    if( resolvCount == typeRefs.size() ){
                        println "- ok, fully resolved $resolvCount type references"
                    }else{
                        println "- warn, partial resolved $resolvCount / ${typeRefs.size()} type references"
                    }
                }else{
                    println "unit $unitName no type refs - ok"
                }
            }
        }

        ts
    }

    void htmljs() {
        TypeScope ts = parseTypes()
        new HtmlJsOut(outputDir).write(ts)
    }
}
