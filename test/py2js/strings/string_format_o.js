/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/PJs/test/py2js/strings/string_format_o.py

load("pjs/data/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/PJs/test/py2js/strings/string_format_o.py', function (_) {
    _.__doc__ = "";
    _.vals = $b.list([0, 10, -30, 173247, 123, 19892122]);
    _.formats = $b.list([$b.str('%o'), $b.str('%020o'), $b.str('%-20o'), $b.str('%#o'), $b.str('+%o'), $b.str('+%#o')]);
    var __pjs_iter_1 = $b.foriter(_.vals);
    while (__pjs_iter_1.trynext()) {
        _.val = __pjs_iter_1.value;
    
        var __pjs_iter_2 = $b.foriter(_.formats);
        while (__pjs_iter_2.trynext()) {
            _.fmt = __pjs_iter_2.value;
        
            $b.print($b.add(_.fmt, $b.str(':')), $b.mod(_.fmt, _.val));//, true
        }
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/PJs/test/py2js/strings/string_format_o.py', ['/home/jared/clone/PJs', '/home/jared/.venv/default/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/pip-1.3.1-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/PJs-0.0.1-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/pbj-0.1.2-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/pip-1.3.1-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/PJs-0.0.1-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/pbj-0.1.2-py2.7.egg', '/home/jared/clone/PJs', '/home/jared/python', '/home/jared/.venv/default/lib/python2.7', '/home/jared/.venv/default/lib/python2.7/plat-i386-linux-gnu', '/home/jared/.venv/default/lib/python2.7/lib-tk', '/home/jared/.venv/default/lib/python2.7/lib-old', '/home/jared/.venv/default/lib/python2.7/lib-dynload', '/usr/lib/python2.7', '/usr/lib/python2.7/plat-i386-linux-gnu', '/usr/lib/python2.7/lib-tk', '/home/jared/.venv/default/local/lib/python2.7/site-packages', '/home/jared/.venv/default/lib/python2.7/site-packages']);

