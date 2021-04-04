/**
 * --------------------------------------------------------------------------
 * Swapform (v1.0): swapform.js
 * Licensed under MIT (https://github.com/runthis/swapform/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var FormControl = function() {
  this.default();
  this.event();
};
FormControl.prototype.default = function() {
  for (var $jscomp$iter$0 = $jscomp.makeIterator(this.elements()), $jscomp$key$element = $jscomp$iter$0.next(); !$jscomp$key$element.done; $jscomp$key$element = $jscomp$iter$0.next()) {
    var element = $jscomp$key$element.value;
    {
      this.create(element);
      if (!this.empty(element)) {
        if (!this.class(this.prev(element)).contains("sf-label-active")) {
          this.planimate(this.prev(element), function(element, control) {
            control.blur(control.next(element), control);
          });
        }
      }
      if (element.className.indexOf("sf-textarea") != -1 && element.className.indexOf("-fixed") == -1) {
        this.rows(element);
      }
    }
  }
};
FormControl.prototype.event = function() {
  var $jscomp$this = this;
  var $jscomp$loop$3 = {};
  var $jscomp$iter$1 = $jscomp.makeIterator(this.elements()), $jscomp$key$element = $jscomp$iter$1.next();
  for (; !$jscomp$key$element.done; $jscomp$loop$3 = {$jscomp$loop$prop$element$6:$jscomp$loop$3.$jscomp$loop$prop$element$6}, $jscomp$key$element = $jscomp$iter$1.next()) {
    $jscomp$loop$3.$jscomp$loop$prop$element$6 = $jscomp$key$element.value;
    {
      $jscomp$loop$3.$jscomp$loop$prop$element$6.addEventListener("focus", function($jscomp$loop$3) {
        return function() {
          $jscomp$this.focus($jscomp$loop$3.$jscomp$loop$prop$element$6, $jscomp$this);
        };
      }($jscomp$loop$3));
      $jscomp$loop$3.$jscomp$loop$prop$element$6.addEventListener("blur", function($jscomp$loop$3) {
        return function() {
          $jscomp$this.blur($jscomp$loop$3.$jscomp$loop$prop$element$6, $jscomp$this);
        };
      }($jscomp$loop$3));
      if ($jscomp$loop$3.$jscomp$loop$prop$element$6.className.indexOf("sf-textarea") != -1 && $jscomp$loop$3.$jscomp$loop$prop$element$6.className.indexOf("-fixed") == -1) {
        $jscomp$loop$3.$jscomp$loop$prop$element$6.addEventListener("input", function($jscomp$loop$3) {
          return function(event) {
            $jscomp$this.rows($jscomp$loop$3.$jscomp$loop$prop$element$6);
          };
        }($jscomp$loop$3));
      }
    }
  }
};
FormControl.prototype.focus = function(element, control) {
  if (!control.empty(element)) {
    control.swap(control.prev(element), "description");
  }
  control.class(control.prev(element)).remove("sf-label-filled");
  if (!control.class(control.prev(element)).contains("sf-label-active")) {
    control.class(control.prev(element)).add("sf-label-active");
    control.swap(control.prev(element), "description");
  }
  control.borders(element);
};
FormControl.prototype.blur = function(element, control) {
  if (!control.empty(element)) {
    control.class(control.prev(element)).add("sf-label-filled");
    if (!control.class(control.prev(element)).contains("sf-label-active")) {
      control.class(control.prev(element)).add("sf-label-active");
    }
    if (!control.data(control.prev(element)).filled) {
      control.swap(control.prev(element), "originaltext");
    } else {
      control.swap(control.prev(element), "filled");
    }
    control.borders(element);
  } else {
    if (element.type != "date") {
      control.class(control.prev(element)).remove("sf-label-active");
      control.next(control.next(element).firstElementChild).classList.remove("sf-label-no-border-top");
    }
    control.swap(control.prev(element), "originaltext");
  }
};
FormControl.prototype.swap = function(element, type) {
  if (!this.data(element).originaltext) {
    this.data(element).originaltext = element.innerHTML;
  }
  if (this.data(element)[type]) {
    element.innerHTML = this.data(element)[type];
  }
};
FormControl.prototype.elements = function() {
  var list = [];
  var blacklist = ["file", "color"];
  for (var $jscomp$iter$2 = $jscomp.makeIterator(this.query()), $jscomp$key$element = $jscomp$iter$2.next(); !$jscomp$key$element.done; $jscomp$key$element = $jscomp$iter$2.next()) {
    var element = $jscomp$key$element.value;
    {
      if (blacklist.indexOf(element.nextElementSibling.type) == -1) {
        list.push(element.nextElementSibling);
      } else {
        this.class(element).remove("sf-label");
      }
    }
  }
  return list;
};
FormControl.prototype.query = function() {
  return document.querySelectorAll('[class^="sf-label"]');
};
FormControl.prototype.filled = function(element) {
  if (this.data(element).description) {
    var old = element.innerHTML;
    element.innerHTML = this.data(element).description;
    this.data(element).description = old;
  }
};
FormControl.prototype.planimate = function(element, callback) {
  element.style.transition = "none";
  callback(element, this);
  element.style.transition = "";
};
FormControl.prototype.data = function(element) {
  return element.dataset;
};
FormControl.prototype.class = function(element) {
  return element.classList;
};
FormControl.prototype.prev = function(element) {
  return element.previousElementSibling;
};
FormControl.prototype.next = function(element) {
  return element.nextElementSibling;
};
FormControl.prototype.empty = function(element) {
  if (element.value !== undefined) {
    return element.value.length == 0;
  } else {
    if (element.innerText !== undefined) {
      return element.innerText.trim().length == 0;
    }
  }
  return false;
};
FormControl.prototype.widths = function(element, width) {
  if (this.class(element).contains("sf-label-sm") || this.class(element).contains("sf-label-filled") || !this.empty(this.next(element))) {
    return width;
  }
  return width * .75;
};
FormControl.prototype.create = function(element) {
  var div = function() {
    return document.createElement("div");
  };
  var container = div();
  var left = div();
  var middle = div();
  var right = div();
  container.className = "sf-form-slot";
  left.className = "sf-form-slot-left";
  middle.className = "sf-form-slot-middle";
  right.className = "sf-form-slot-right";
  container.appendChild(left);
  container.appendChild(middle);
  container.appendChild(right);
  element.after(container);
};
FormControl.prototype.rows = function(element) {
  if (element.style.height && element.style.height != "32px") {
    element.style.height = "32px";
  }
  if (element.scrollHeight != element.clientHeight) {
    element.style.height = element.scrollHeight + 32 + "px";
  }
};
FormControl.prototype.borders = function(element) {
  var leftWidth = this.prev(element).offsetLeft;
  var middleWidth = this.widths(this.prev(element), this.prev(element).offsetWidth) + 2;
  var rightWidth = element.offsetWidth - middleWidth - leftWidth;
  var firstChild = this.next(element).firstElementChild;
  firstChild.style.width = leftWidth + "px";
  this.next(firstChild).style.width = middleWidth + "px";
  this.next(firstChild).classList.add("sf-label-no-border-top");
};
(function() {
  new FormControl;
})();
