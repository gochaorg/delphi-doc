package xyz.cofe.delphi.doc


import groovy.xml.MarkupBuilder
import xyz.cofe.coll.im.ImList
import xyz.cofe.delphi.ast.Comment
import xyz.cofe.delphi.ast.TypeIdentAst
import xyz.cofe.delphi.tsys.*
import xyz.cofe.delphi.tsys.tm.Argument
import xyz.cofe.delphi.tsys.tm.ClassType
import xyz.cofe.delphi.tsys.tm.Constructor
import xyz.cofe.delphi.tsys.tm.Destructor
import xyz.cofe.delphi.tsys.tm.Function
import xyz.cofe.delphi.tsys.tm.InterfaceType
import xyz.cofe.delphi.tsys.tm.NamedType
import xyz.cofe.delphi.tsys.tm.Operator
import xyz.cofe.delphi.tsys.tm.PascalUnit
import xyz.cofe.delphi.tsys.tm.Procedure
import xyz.cofe.delphi.tsys.tm.Type
import xyz.cofe.delphi.tsys.tm.TypeName

import java.nio.file.Files
import java.nio.file.Path

class XmlOut {
    XmlOut(Path dir){
        if( dir==null )throw new IllegalArgumentException("dir==null")
        this.directory = dir
    }

    private Path directory
    Path getDirectory(){
        directory
    }

    void write(TypeScope ts){
        if( ts==null ) throw new IllegalArgumentException("ts==null")
    }

    private Path fileOf(PascalUnit unit){
        if( unit==null ) throw new IllegalArgumentException("unit==null")
        directory.resolve("unit-${unit.name}.xml")
    }

    void write(PascalUnit unit){
        if( unit==null ) throw new IllegalArgumentException("unit==null");
        var file = fileOf(unit)
        var dir = file.parent
        if( dir!=null && !Files.isDirectory(dir) )Files.createDirectories(dir)

        try( var outWriter = file.newWriter("utf-8") ){
            MarkupBuilder out = new MarkupBuilder(outWriter)
            out.unit(name:unit.name.toString()){
                out.uses() {
                    unit.uses.each { tn -> out."unit"( tn.toString() ) }
                }

                out.types() {
                    unit.types.each { t -> write(out,t) }
                }
            }
        }
    }

    static void writeComments(MarkupBuilder out, ImList<Comment> comments){
        if( comments.size()>0 ) {
            out.comments() {
                comments.each { cmt ->
                    out.getMkp().yieldUnescaped("<comment>")
                    out.getMkp().yieldUnescaped(
                        cmt.text()
                            .replace("&", "&amp;")
                            .replace("<", "&lt;")
                            .replace(">", "&gt;")
                            .replace("\n", "&#10;")
                            .replace("\r", "&#13;")
                            .replace("\t", "&#09;")
                    )
                    out.getMkp().yieldUnescaped("</comment>\n")
                }
            }
        }
    }

    static void write(MarkupBuilder out, Type type){
        if( type instanceof InterfaceType.Named ){
            InterfaceType.Named itf = type
            out."interface"( name: itf.name().toString() ) {
                writeItf(out, itf)
            }
        }else if( type instanceof ClassType.Named ){
            ClassType.Named cls = type
            out."class"( name: cls.name().toString() ) {
                writeClass(out, cls)
            }
        }
    }

    static void writeItf(MarkupBuilder out,InterfaceType itf){
        writeComments(out, itf.comments)
        itf.body.each {writeObjItem(out,it) }
    }

    static void writeClass(MarkupBuilder out,ClassType cls){
        writeComments(out, cls.comments)
        cls.body.each {writeObjItem(out,it) }
    }

    static void writeObjItem(MarkupBuilder out,Object item){
        switch (item) {
            case Constructor:
                write(out, (Constructor)item)
                break
            case Destructor:
                write(out, (Destructor)item)
                break
            case Function:
                write(out, (Function)item)
                break
            case Procedure:
                write(out, (Procedure)item)
                break
            case Operator:
                write(out, (Operator)item)
                break
        }
    }

    static void write(MarkupBuilder out,Constructor ctor){
        out.constructor(name: ctor.name, visibility:ctor.visibility){
            writeComments(out, ctor.comments)
            writeArgs(out, ctor.arguments)
        }
    }
    static void write(MarkupBuilder out,Destructor dtor){
        out.destructor(name: dtor.name, visibility:dtor.visibility){
            writeComments(out, dtor.comments)
            writeArgs(out, dtor.arguments)
        }
    }
    static void write(MarkupBuilder out,Function fun){
        out.function(name: fun.name, visibility:fun.visibility){
            writeComments(out, fun.comments)
            writeArgs(out, fun.arguments)
            out."return" {
                writeTypeId(out, fun.returns)
            }
        }
    }
    static void write(MarkupBuilder out,Procedure proc){
        out.procedure(name: proc.name, visibility:proc.visibility){
            writeComments(out, proc.comments)
            writeArgs(out, proc.arguments)
        }
    }
    static void write(MarkupBuilder out,Operator otor){
        out.operator(name: otor.name, visibility:otor.visibility){
            writeComments(out, otor.comments)
            writeArgs(out, otor.arguments)
            out."return" {
                writeTypeId(out, otor.returns)
            }
        }
    }
    static void writeArgs(MarkupBuilder out,ImList<Argument> arguments){
        out.arguments() {
            arguments.each { arg ->
                if( arg.expression.isPresent() ) {
                    out.argument(name: arg.name, direction: arg.direction, expression:arg.expression.get()) {
                        writeTypeId(out, arg.type)
                    }
                }else{
                    out.argument(name: arg.name, direction: arg.direction) {
                        writeTypeId(out, arg.type)
                    }
                }
            }
        }
    }
    static void writeTypeId(MarkupBuilder out,Type type){
        if( type instanceof Type.UnitTypeRef ){
            Type.UnitTypeRef tref = type
            TypeName unitName = TypeName.of(tref.unit().name())
            if( tref.type() instanceof TypeIdentAst ){
                TypeIdentAst tIdent = tref.type()
                TypeName refName = TypeName.of(tIdent.name())
                out."type-resolve"(unit: unitName, name: refName){
                    tIdent.params().each { genParam ->
                        out."gen-param"( genParam )
                    }
                }
            }else {
                out."type-resolve"(unit: unitName, tref.type())
            }
        }else if( type instanceof NamedType ){
            NamedType ntype = type
            out."type"( name: ntype.name() )
        }else{
            out."undef-type"( type )
        }
    }
}
