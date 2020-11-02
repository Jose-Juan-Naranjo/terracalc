document.getElementById('calculate-btn').addEventListener('click', function () {
    /* Grab value of square feet input */
    var sqft = document.getElementById('sqft').value;

    /* Grab value of average Depth input */
    var averageHeight = document.getElementById('height').value;


    var heightInches = averageHeight / 12;
    var volume = sqft * heightInches;
    volume = (Math.round(volume * 100) / 100).toFixed(2);

    var perFoot = document.getElementById('perfoot').value * .125;
    

    document.getElementById('output').value = volume + ' cubic feet';

    var mixes = volume / perFoot;
    mixes = (Math.round(mixes * 100) / 100).toFixed(2);
     document.getElementById('mixes').value = mixes;

    var sand = mixes * 150;
    sand = (Math.round(sand * 100) / 100).toFixed(2);
     document.getElementById('sand').value = sand;

    var rock = mixes * 50;
     rock = (Math.round(rock * 100) / 100).toFixed(2);
     document.getElementById('rock').value = rock;

    var matrixA = 7.5 * mixes / 4;
    matrixA = ((Math.round(matrixA * 100) / 100)).toFixed(2);
    document.getElementById('epoxy-a').value = matrixA + ' gal.';
    

    var matrixB = matrixA / 5;
     matrixB = ((Math.round(matrixB * 100) / 100)).toFixed(2);
     document.getElementById('epoxy-b').value = matrixB + ' gal.';
});