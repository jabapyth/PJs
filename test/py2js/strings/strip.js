/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/PJs/test/py2js/strings/strip.py

load("pjs/data/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/PJs/test/py2js/strings/strip.py', function (_) {
    _.__doc__ = "";
    _.s1 = $b.str('\n' +
    '\n' +
    'abc\n' +
    '\n' +
    '\n' +
    '');
    _.s2 = $b.str('\t abc\n' +
    '\t \n' +
    '');
    _.s3 = $b.str(' abc ');
    var __pjs_iter_1 = $b.foriter($b.list([_.s1, _.s2, _.s3]));
    while (__pjs_iter_1.trynext()) {
        _.s = __pjs_iter_1.value;
    
        $b.print($b.add($b.add($b.str('original('), _.s), $b.str(')')));//, true
        $b.print($b.add($b.add($b.str('strip('), _.s.strip()), $b.str(')')));//, true
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/PJs/test/py2js/strings/strip.py', ['/home/jared/clone/PJs', '/home/jared/.venv/default/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/pip-1.3.1-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/PJs-0.0.1-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/pbj-0.1.2-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/pip-1.3.1-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/PJs-0.0.1-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/pbj-0.1.2-py2.7.egg', '/home/jared/clone/PJs', '/home/jared/python', '/home/jared/.venv/default/lib/python2.7', '/home/jared/.venv/default/lib/python2.7/plat-i386-linux-gnu', '/home/jared/.venv/default/lib/python2.7/lib-tk', '/home/jared/.venv/default/lib/python2.7/lib-old', '/home/jared/.venv/default/lib/python2.7/lib-dynload', '/usr/lib/python2.7', '/usr/lib/python2.7/plat-i386-linux-gnu', '/usr/lib/python2.7/lib-tk', '/home/jared/.venv/default/local/lib/python2.7/site-packages', '/home/jared/.venv/default/lib/python2.7/site-packages']);

