/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/modules/import.py

load("build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/pjs/test/py2js/modules/import.py', function (_) {
    _.__doc__ = "";
    var __pjs_tmp_module = $b.__import__("imported.modulea", _.__name__, _.__file__);
    if (__pjs_tmp_module.__all__ === undefined) {
        for (var __pjs_k in __pjs_tmp_module) {
            if (__pjs_k.indexOf('__') !== 0) {
                eval('_.' + __pjs_k + ' = __pjs_tmp_module.' + __pjs_k + ';');
            }
        }
        delete __pjs_k;
    } else {
        var __pjs_a = __pjs_tmp_module.__all__.as_js();
        for (var __pjs_i=0; __pjs_i<__pjs_a.length; __pjs_i++) {
            var __pjs_k = __pjs_a[__pjs_i];
            eval('_.'+__pjs_k+' = __pjs_tmp_module.'+__pjs_k+';');
        }
        delete __pjs_a;
        delete __pjs_i;
        delete __pjs_k;
    }
    _.imported = $b.__import__("imported.moduleb", _.__name__, _.__file__);
    $b.assertdefined(_.modulea_fn, "modulea_fn")();
    _.imported.moduleb.moduleb_fn();
    _.ma = $b.assertdefined(_.modulea_class, "modulea_class")();
    $b.print(_.ma.msg(1));//, true
    _.mb = _.imported.moduleb.moduleb_class();
    $b.print(_.mb.msg(2));//, true
});

module('/home/jared/clone/pjs/test/py2js/modules/imported/__init__.py', function (_) {
    _.__doc__ = "";
    
});

module('/home/jared/clone/pjs/test/py2js/modules/imported/modulea.py', function (_) {
    _.__doc__ = "";
    _.modulea_fn = $def(function $_modulea_fn() { // 2
        $b.print($b.str('import_modulea.modulea_fn()'));//, true
    });
    _.modulea_fn.__module__ = _.__name__;
    _.modulea_fn.__name__ = $b.str("modulea_fn");
    _.modulea_class = Class('modulea_class', [$b.object], (function(){
        var __0 = {};
        __0.__init__ = $def(function $___init__(self) { // 8
            
        });
        __0.__init__.__module__ = _.__name__;
        __0.__init__.__name__ = $b.str("__init__");
        __0.msg = $def(function $_msg(self, val) { // 11
            return $b.add($b.str('modulea_class:'), $b.str(val));
        });
        __0.msg.__module__ = _.__name__;
        __0.msg.__name__ = $b.str("msg");
        return __0;
    }()));
    _.modulea_class.__module__ = _.__name__;
});

module('/home/jared/clone/pjs/test/py2js/modules/imported/moduleb.py', function (_) {
    _.__doc__ = "";
    _.foo = $def(function $_foo() { // 2
        $b.print($b.str('foo'));//, true
    });
    _.foo.__module__ = _.__name__;
    _.foo.__name__ = $b.str("foo");
    _.moduleb_fn = $def(function $_moduleb_fn() { // 5
        $b.print($b.str('import_moduleb.moduleb_fn()'));//, true
    });
    _.moduleb_fn.__module__ = _.__name__;
    _.moduleb_fn.__name__ = $b.str("moduleb_fn");
    _.moduleb_class = Class('moduleb_class', [$b.object], (function(){
        var __0 = {};
        __0.__init__ = $def(function $___init__(self) { // 10
            
        });
        __0.__init__.__module__ = _.__name__;
        __0.__init__.__name__ = $b.str("__init__");
        __0.msg = $def(function $_msg(self, val) { // 13
            return $b.add($b.str('moduleb_class:'), $b.str(val));
        });
        __0.msg.__module__ = _.__name__;
        __0.msg.__name__ = $b.str("msg");
        return __0;
    }()));
    _.moduleb_class.__module__ = _.__name__;
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/pjs/test/py2js/modules/import.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);

