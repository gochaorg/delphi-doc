package xyz.cofe.delphi.doc

import org.junit.jupiter.api.Test

class MainTest {
    @Test
    void index(){
        var main = new Main()
        main.evalArgs([
            '-e', 'windows-1251',
            '-s', 'src/test/delphi',
            '-d', 'target/delphi-doc-out/main/html',
            'htmljs'
        ])
    }
}
