package xyz.cofe.delphi.doc

import org.junit.jupiter.api.Test
import xyz.cofe.delphi.ast.PascalFileAst
import xyz.cofe.delphi.tsys.tm.PascalUnit
import xyz.cofe.delphi.tsys.TypeScope

import java.nio.file.Path

class HtmlJsOutTest {
    @Test
    void unitOut() {
        var pu  = PascalFileAst.parse(
            Path.of("/home/user/code/delphi/delphi-parser/src/test/resources/samples/Map.pas").getText("windows-1251"),
            "Map.pas",true
        )
        var ts = new TypeScope()
        ts.add( (PascalFileAst.Unit)pu )

        var out = new HtmlJsOut(Path.of("target/delphi-doc-out/html-js"))
        ts.unitMap().each { e ->
            var name = e.key
            var units = e.value
            units.each (PascalUnit unit) -> {
                out.write(unit)
            }
        }
    }
}
