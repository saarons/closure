var fs, path, vm;

vm = require("vm");

fs = require("fs");

path = require("path");

module.exports = function() {
  var base_path, context, import_script;
  base_path = path.join(__dirname, "vendor/closure-library/closure/goog/");
  import_script = function(src) {
    vm.runInContext(fs.readFileSync(src), context, src);
    return true;
  };
  context = vm.createContext({
    CLOSURE_BASE_PATH: base_path,
    CLOSURE_IMPORT_SCRIPT: import_script
  });
  import_script(path.join(base_path, "base.js"));
  return context;
};