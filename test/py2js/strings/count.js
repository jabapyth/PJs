/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/PJs/test/py2js/strings/count.py

load("pjs/data/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/PJs/test/py2js/strings/count.py', function (_) {
    _.__doc__ = "";
    _.txt = $b.str('the quick brown fox jumped over the lazy dogthe');
    _.c = _.txt.count($b.str('the'));
    $b.print(_.c);//, true
    _.c = _.txt.count($b.str('the'), 0, -20);
    $b.print(_.c);//, true
    _.c = _.txt.count($b.str('the'), 3);
    $b.print(_.c);//, true
    _.c = _.txt.count($b.str('the'), 4, 15);
    $b.print(_.c);//, true
    _.c = _.txt.count($b.str('the'), 1, $b.len(_.txt));
    $b.print(_.c);//, true
    _.c = _.txt.count($b.str('the'), 4, $b.sub($b.len(_.txt), 1));
    $b.print(_.c);//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/PJs/test/py2js/strings/count.py', ['/home/jared/clone/PJs', '/home/jared/.venv/default/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/pip-1.3.1-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/PJs-0.0.1-py2.7.egg', '/home/jared/.venv/default/local/lib/python2.7/site-packages/pbj-0.1.2-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/pip-1.3.1-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/PJs-0.0.1-py2.7.egg', '/home/jared/.venv/default/lib/python2.7/site-packages/pbj-0.1.2-py2.7.egg', '/home/jared/clone/PJs', '/home/jared/python', '/home/jared/.venv/default/lib/python2.7', '/home/jared/.venv/default/lib/python2.7/plat-i386-linux-gnu', '/home/jared/.venv/default/lib/python2.7/lib-tk', '/home/jared/.venv/default/lib/python2.7/lib-old', '/home/jared/.venv/default/lib/python2.7/lib-dynload', '/usr/lib/python2.7', '/usr/lib/python2.7/plat-i386-linux-gnu', '/usr/lib/python2.7/lib-tk', '/home/jared/.venv/default/local/lib/python2.7/site-packages', '/home/jared/.venv/default/lib/python2.7/site-packages']);

