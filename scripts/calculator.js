function calculate() {
        var multiplier = Math.pow(10, 2);
        var input1 = document.getElementsByName('input1')[0].value;
        var input2 = document.getElementsByName('input2')[0].value;
        var input3 = document.getElementsByName('input3')[0].value;
        var input4 = document.getElementsByName('input4')[0].value;
        var input5 = document.getElementsByName('input5')[0].value;
        var input6 = document.getElementsByName ('input6')[0].value;

        document.getElementById('output').textContent = Math.floor(Number(input1) + Number(input2) + Number(input3) + Number(input4) + Number(input5) + Number(input6));
        var points = document.getElementById('output').textContent
        var percentscore = Number(points) / 500 * 100
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

        var neededpoints = Math.floor(540 - Number(points))
        document.getElementById('pointsneeded').textContent = neededpoints;

        var test34 = Number(neededpoints)
        document.getElementById('test34').textContent = test34;

        if (neededpoints >= 140) {
            window.alert("Based on the scores you put in, you will most likely have to take the final exam.");
        } else if (neededpoints <= 0) {
            window.alert("I have no idea how you did it, but you've already reached the score required to exempt the exam.");
        }
    }
