function calculate() {
    var multiplier = Math.pow(10, 2);
    var input1 = document.getElementsByName('input1')[0].value;
    var input2 = document.getElementsByName('input2')[0].value;
    var input3 = document.getElementsByName('input3')[0].value;
    var input4 = document.getElementsByName('input4')[0].value;
    var input5 = document.getElementsByName('input5')[0].value;
    var input6 = document.getElementsByName('input6')[0].value;
    var input7 = document.getElementsByName('input7')[0].value;

    document.getElementById('output').textContent = Math.floor(Number(input1) + Number(input2) + Number(input3) + Number(input4) + Number(input5) + Number(input6) + Number(input7));
    var points = document.getElementById('output').textContent
    var percentscore = Number(points) / 600 * 100
    document.getElementById('percentage').textContent = Math.floor(Number(percentscore));

    if (percentscore >= 90) {
        var letter = 'A'
    } else if (percentscore >= 80) {
        var letter = 'B'
    } else if (percentscore >= 70) {
        var letter = 'C'
    } else if (percentscore >= 60) {
        var letter = 'D'
    } else if (percentscore <= 59) {
        var letter = 'F'
    } else {
        var letter = 'error'
    }

    document.getElementById('lettergrade').textContent = letter;

    var Aneededpoints = Math.floor(630 - Number(points))
    if (Aneededpoints <= 0) {
        document.getElementById('a').innerHTML = "You've already got an <span>A</span>.";
    } else if (Aneededpoints > 130) {
        document.getElementById('a').innerHTML = "You can't get an <span>A</span>.";
    } else {
        document.getElementById('Apointsneeded').textContent = Aneededpoints;
    }

    var Bneededpoints = Math.floor(560 - Number(points))
    if (Bneededpoints <= 0) {
        document.getElementById('b').innerHTML = "You've already got a <span>B</span>.";
    } else if (Bneededpoints > 130) {
        document.getElementById('b').innerHTML = "You can't get a <span>B</span>.";
    } else {
        document.getElementById('Bpointsneeded').textContent = Bneededpoints;
    }

    var Cneededpoints = Math.floor(490 - Number(points))
    if (Cneededpoints <= 0) {
        document.getElementById('c').innerHTML = "You've already got a <span>C</span>.";
    } else if (Cneededpoints > 130) {
        document.getElementById('c').innerHTML = "You can't get a <span>C</span>.";
    } else {
        document.getElementById('Cpointsneeded').textContent = Cneededpoints;
    }

    var Dneededpoints = Math.floor(420 - Number(points))
    if (Dneededpoints <= 0) {
        document.getElementById('d').innerHTML = "You've already passed the class.";
    } else if (Dneededpoints > 130) {
        document.getElementById('d').innerHTML = "Unfortunately, you can't pass the class.";
        document.getElementById('abc').style.display = 'none';
    } else {
        document.getElementById('Dpointsneeded').textContent = Dneededpoints;
    }
}

function reset() {
    location.reload();
}