package xyz.cofe.delphi.doc

import groovy.transform.CompileStatic

import java.nio.file.Files
import java.nio.file.Path

/**
 * Итератор по вложенным файлам/каталогам
 */
@CompileStatic
class FileTreeIterator implements Iterator<Path> {
    private List<Path> workSet = []
    FileTreeIterator(Path ... roots){
        workSet.addAll(Arrays.asList(roots))
    }

    @Override
    boolean hasNext() {
        return !workSet.isEmpty()
    }

    @Override
    Path next() {
        if( workSet.isEmpty() )throw new NoSuchElementException()
        var res = workSet.remove(0)
        if( Files.isDirectory(res) ){
            try( var di = Files.newDirectoryStream(res) ){
                var subfiles = new ArrayList<Path>()
                for( def subf in di ){
                    subfiles.add(subf)
                }
                workSet.addAll(0,subfiles)
            } catch( IOException e ){
                System.err.println("can't read $e")
            }
        }
        return res
    }
}
