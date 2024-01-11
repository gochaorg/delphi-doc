package xyz.cofe.delphi.doc

import groovy.transform.CompileStatic

import java.nio.charset.Charset
import java.nio.file.Files
import java.nio.file.Path
import java.util.regex.Pattern
import java.util.stream.Stream
import java.util.stream.StreamSupport

/**
 * Корень исходников
 */
class SourceRoot {
    Charset charset
    Path path
    Pattern pathPattern

    @CompileStatic
    Stream<SourceFile> stream(){
        if( path==null )throw new IllegalStateException("path==null")
        if( charset==null )throw new IllegalStateException("charset==null")

        Pattern ptrn = pathPattern

        FileTreeIterator iter = new FileTreeIterator(path)
        Iterable<Path> iterable = () -> iter;
        StreamSupport.stream(iterable.spliterator(), false)
            .map { new SourceFile(path: it, charset: charset) }
            .filter {Files.isRegularFile(it.path) }
            .filter {ptrn==null ? true : ptrn.matcher(it.path.toString()).matches() }
    }

    @CompileStatic
    static Stream<SourceFile> stream(List<SourceRoot> roots){
        if( roots==null ) throw new IllegalArgumentException("roots==null")
        if( roots.isEmpty() ) return Stream.empty()
        if( roots.size()==1 ) return roots[0].stream()
        roots.inject(Stream.<SourceFile>empty()) { acc, root ->
            Stream.concat(acc,root.stream())
        }
    }
}
