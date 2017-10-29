var results;

function test_group(group_name, asserts) {
    results = document.createElement("div");
    results.setAttribute("class","col-xs-12");
    document.getElementById("test-row").appendChild(results);
    var h = document.createElement('H4');
    var titleName = document.createTextNode(group_name);
    h.appendChild(titleName);
    results.appendChild(h);
    asserts();

}

function assert(testPassed, testName) {
    var label = document.createElement('label');
    label.innerHTML = testName;
    label.style.color = 'black';
    label.style.border = 'solid black 1px';
    results.setAttribute("class", "alert alert-success");

    if (testPassed) {
        label.setAttribute("class", "alert alert-success");
    } else {
        results.setAttribute("class", "alert alert-danger");
        label.setAttribute("class", "alert alert-danger");
    }
    var space = document.createElement('br');

    results.appendChild(label);
    results.appendChild(space);
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

