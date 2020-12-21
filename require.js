(function (global) {
  var params = [];
  var modules = {};
  var depNum = 0;
  function require(name, deps, callback) {
    if (deps.length) {
      for (var i = 0; i < deps.length; i++) {
        (function (i) {
          var _name = deps[i];
          depNum++;
          var node = document.createElement("script");
          node.type = "text/javascript";
          node.charset = "utf-8";
          node.async = true;
          node.addEventListener(
            "load",
            function () {
              params[i] = modules[_name];
              depNum--;
              if (depNum <= 0) {
                  callback.apply(global, params);
              }
            },
            false
          );
          node.src = _name;
          first = document.getElementsByTagName("script")[0];
          first.parentNode.appendChild(node);
        })(i);
      }
    } else {
      modules[name] = callback();
    }
  }
  global.require = require;
  global.define = require;
})(this);
