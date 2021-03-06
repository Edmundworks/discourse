// discourse-skip-module

define("sinon", () => {
  return { default: window.sinon };
});
define("qunit", () => {
  return {
    default: window.QUnit,
    test: window.QUnit.test,
    skip: window.QUnit.skip,
    module: window.QUnit.module,
  };
});
define("ember-qunit", () => {
  return {
    moduleFor: window.moduleFor,
    moduleForComponent: window.moduleForComponent,
  };
});
let _app;
define("@ember/test-helpers", () => {
  let helpers = {
    setApplication(app) {
      _app = app;
    },
    getApplication() {
      return _app;
    },
  };
  ["click", "visit", "currentURL", "fillIn", "setResolver"].forEach((attr) => {
    helpers[attr] = function () {
      return window[attr](...arguments);
    };
  });
  return helpers;
});
define("pretender", () => {
  return { default: window.Pretender };
});
