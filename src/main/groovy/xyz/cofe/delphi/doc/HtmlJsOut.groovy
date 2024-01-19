package xyz.cofe.delphi.doc

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializationFeature
import xyz.cofe.delphi.tsys.TypeScope
import xyz.cofe.delphi.tsys.tm.PascalUnit

import java.nio.charset.StandardCharsets
import java.nio.file.Files
import java.nio.file.Path

class HtmlJsOut {
    HtmlJsOut(Path dir){
        if( dir==null )throw new IllegalArgumentException("dir==null")
        this.directory = dir
    }

    private Path directory
    Path getDirectory(){
        directory
    }

    private @Lazy ObjectMapper om = {
        var om = new ObjectMapper();
        om.findAndRegisterModules();
        om.enable(SerializationFeature.INDENT_OUTPUT);
        om.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        om
    }()

    void write(TypeScope typeScope){
        if( typeScope==null ) throw new IllegalArgumentException("typeScope==null")
        if( !Files.exists(directory) )Files.createDirectories(directory)
    }

    private def filesOf(PascalUnit unit){
        if( unit==null ) throw new IllegalArgumentException("unit==null")
        [ html: directory.resolve("unit/${unit.name}.html")
        , jsData: directory.resolve("unit/${unit.name}.js")
        ]
    }

    //region write unit
    void write(PascalUnit unit){
        var files = filesOf(unit)
        var jsFile = files.jsData

        var dir = jsFile.parent
        if( dir!=null && !Files.isDirectory(dir) ){
            Files.createDirectories(dir)
        }

        var json = om.writeValueAsString(unit)
        json = "unitData = "+json
        Files.writeString(jsFile, json, StandardCharsets.UTF_8)
    }
    //endregion
}
