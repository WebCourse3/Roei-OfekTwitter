function $(query){
    return new ofekQuery(query);

}

var ofekQuery = function(query){
    this.elements = [];

    this.addClass = function (className) {
        for(var i = 0 ; i < this.elements.length; i++){
            this.elements[i].classList.add(className);
        }
    };

    this.removeClass = function (className) {
        for(var i = 1 ; i < this.elements.length; i++){
            this.elements[i].classList.remove(className);
        }
    };

    this.css = function (property, value) {
        for(var i = 0 ; i < this.elements.length; i++){
            this.elements[i].setAttribute("style", property + ": " + value);
        }
    };


    var someElements = query.split(' ');
    this.elements = firstElement(someElements[0]);

    for(var i=1;i<someElements.length;i++){
        this.elements = checkResults(someElements[i],this.elements);
    }
}

function firstElement(operator) {

    if(operator.charAt(0)=='#'){
        return getByID(operator);
    }
    else if(operator.charAt(0)=='.'){
        return getByClass(operator);
    }
    else {
        return getByTag(operator);
    }
}

function getByID(element) {
    var list = [];
    list = Array.prototype.slice.call(list);
    list[0] = document.getElementById(element.substring(1,element.length));
    return list;
}

function getByTag(element) {
    return document.getElementsByTagName(element);
}

function getByClass(element) {
    return document.getElementsByClassName(element.substring(1,element.length));
}


function checkResults(operator,results) {
    operator = operator.toUpperCase();
    results = Array.prototype.slice.call(results);

    if(operator.charAt(0) == '.') {
        return checkListByClassName(results,operator);
    }
    else
    {
        return checkListByTag(results,operator);
    }
}

function checkListByTag(results,operator) {
    var tmp = [];
    tmp =  Array.prototype.slice.call(tmp);
    for(var j = 0 ;j<results.length;j++)
    {
        if(results[j].childNodes.length>0)
        {
            for(var i=0;i<results[j].childNodes.length;i++){
                if(results[j].childNodes[i].tagName == operator)
                    tmp.push(results[j].childNodes[i]);
            }
        }
        else if(results[j].tagName == operator){
            tmp.push(results[j]);
        }
    }
    return tmp;
}

function checkListByClassName(results,operator) {
    return results.filter(function (result) {
        return result.classList.contains(operator.substring(1,result.length));
    });
}
