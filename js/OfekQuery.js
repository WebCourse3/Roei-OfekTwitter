function $(name) {
    return new ofekQuery(name);
}

var ofekQuery = function(selector) {
    var isSingle = true;
    if (!(selector.contains(" "))) {
        switch (selector.charAt(0)) {
            case '.':
                this.elements = document.getElementsByClassName(selector.substring(1, selector.length));
                isSingle = false;
                break;
            case '#':
                this.element = document.getElementById(selector.substring(1, selector.length));
                break;
            default:
                this.elements = document.getElementsByTagName(selector);
                isSingle = false;
                break;
        }
    } else {
        var tokens = [];
        var count = selector.split(" ").length;
        for (var i=0; i<count; i++) {
            //tokens[i] =
        }
    }

    this.addClass = function (class_name) {
        if (isSingle) {
            this.element.classList.add(class_name);
        } else {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].classList.add(class_name);
            }
        }

    }

    this.removeClass = function (class_name) {
        if (isSingle) {
            this.element.classList.remove(class_name);
        } else {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].classList.remove(class_name);
            }
        }

    }

    this.each = function (fn) {
        if (isSingle) {
            this.element.fn;
        } else {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].fn;
            }
        }

    }

    this.map = function (fn) {
        if (isSingle) {
            return this.element.fn;
        } else {
            for (var i = 0; i < this.elements.length; i++) {
                return this.elements[i].fn;
            }
        }

    }

    this.css = function(property, value) {
        if (isSingle) {
            this.element.setAttribute("style", property + ": " + value);
        } else {
            for (var i=0; i<this.elements.length; i++) {
                this.elements[i].setAttribute("style", property + ": " + value);
            }
        }

    }

    this.count = function() {
        if (isSingle) {
            return this.element.childElementCount;
        } else {
            for (var i=0; i<this.elements.length; i++) {
                return this.elements[i].childElementCount;
            }
        }

    }

    this.appendChild = function(childElement) {
        if (isSingle) {
            this.element.appendChild(childElement);
        } else {
            for (var i=0; i<this.elements.length; i++) {
                this.elements[i].appendChild(childElement);
            }
        }

    }

    this.getAttribute = function(attributeName) {
        if (isSingle) {
            return this.element.getAttribute(attributeName);
        } else {
            for (var i=0; i<this.elements.length; i++) {
                return this.element[i].getAttribute(attributeName);
            }
        }

    }

    this.setAttribute = function(attributeName, attributeValue) {
        if (isSingle) {
            this.element.setAttribute(attributeName, attributeValue);
        } else {
            for (var i=0; i<this.elements.length; i++) {
                this.element[i].setAttribute(attributeName, attributeValue);
            }
        }

    }

    this.get = function(index) {
        if (isSingle) {
            return this.element;
        } else {
            return this.element[index];
        }

    }

}
