/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/strings/string_format_i.py

load("build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/pjs/test/py2js/strings/string_format_i.py', function (_) {
    _.__doc__ = "";
    _.a = $b._float(1.12346);
    _.b = 10;
    _.c = -30;
    _.d = 34;
    _.e = $b._float(123.456);
    _.f = 19892122;
    _.s = $b.mod($b.str('b=%i'), _.b);
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('b,c,d=%i+%i+%i'), $b.tuple([_.b, _.c, _.d]));
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('b=%(b)i and c=%(c)i and d=%(d)i'), $b.dict([[$b.str('b'), _.b], [$b.str('c'), _.c], [$b.str('d'), _.d]]));
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('e=%020i e=%+i e=%20i e=%-20i (e=%- 20i)'), $b.tuple([_.e, _.e, _.e, _.e, _.e]));
    $b.print(_.s);//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/pjs/test/py2js/strings/string_format_i.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);

