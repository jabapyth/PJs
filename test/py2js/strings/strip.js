/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/strings/strip.py

load("build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/pjs/test/py2js/strings/strip.py', function (_) {
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
var pjs_main = __builtins__.run_main('/home/jared/clone/pjs/test/py2js/strings/strip.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);

