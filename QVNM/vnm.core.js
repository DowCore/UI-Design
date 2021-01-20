function Element(el, parent) {
  var elType = typeof el;
  this.id = "";
  this.node = "";
  this.key = "";
  this.model = "";
  this.property="";
  this.template="";
  this.cache = { classNames: [] };
  switch (elType) {
    case "string":
      this.id = el;
      this.node = $("#" + el);
      break;
    case "object":
      this.model = el.model;
      this.key= el.key;
      this.property=el.property;
      this.node=$('<div/>',{html:el.template});
      break;
  }
  this.append = function (_parent) {};
  this.addClass = function (className) {};
  this.hidden = function () {};
  this.show = function () {};
  this.reset = function () {};
  this.destroy = function () {};
  //立即添加到dom
  if (parent) {
  }
}
function Region(el, parent) {
  this.prototype = new Element(el, parent);
  this.children = [];
  this.model={};
  this.addChildren = function (child) {};
  this.bindModel = function (key, defaultValue) {
    this.model = "";
  };
}
