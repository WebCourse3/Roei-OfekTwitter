function test_group(group_name, asserts) {
    this.results = document.createElement("div");
    this.results.setAttribute("class","col-xs-12");
    document.getElementById("test-row").appendChild(results);
    var h = document.createElement('H4');
    var titleName = document.createTextNode(group_name);
    h.appendChild(titleName);
    results.appendChild(h);
    asserts.bind(this)();

}

function assert(testPassed, testName) {
    var label = document.createElement('label');
    label.innerHTML = testName;
    label.style.color = 'black';
    label.style.border = 'solid black 1px';
    this.results.setAttribute("class", "alert alert-success");

    if (testPassed) {
        label.setAttribute("class", "alert alert-success");
    } else {
        this.results.setAttribute("class", "alert alert-danger");
        label.setAttribute("class", "alert alert-danger");
    }
    var space = document.createElement('br');

    this.results.appendChild(label);
    this.results.appendChild(space);
}

test_group('First test group', function () {
    assert(true, 'Successful test');
    assert(true, 'Successful test 2');
    assert(true, 'Successful test 3');
});


test_group('Second test group', function () {
    assert(true, 'Successful test');
    assert(true, 'Successful test 2');
    assert(false, 'Unsuccessful test');
});

