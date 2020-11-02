/*A rectangular pool is 50 feet long by 20 feet wide.  The shallow end is 3 feet deep and the deep end is 7 feet deep.  Find the surface area and the volume.

Surface Area = Length  x  Width
Surface Area = 50 feet  x  20 feet
Surface Area = 1,000 square feet

Volume = Surface Area  x  Average Depth  x  7.5
Volume = 1,000  x  Average Depth  x  7.5
Average Depth = (Shallow Depth + Deep Depth) ÷ 2
Average Depth = (3 + 7) ÷ 2
Average Depth = 10 ÷ 2
Average Depth = 5
Volume = 1,000  x  5  x  7.5
Volume = 37,500 Gallons

*/

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}



document.getElementById('calculate-btn').addEventListener('click', function () {
    var sqft = document.getElementById('sqft').value;
    var averageHeight = document.getElementById('height').value;


    var heightInches = averageHeight / 12;
    var volume = sqft * heightInches;
    volume = (Math.round(volume * 100) / 100).toFixed(2);

    document.getElementById('output').value = numberWithCommas(volume) + ' cubic feet';

    var sand = (volume / 0.6875) * 100;
    sand = (Math.round(sand * 100) / 100).toFixed(2);
     document.getElementById('sand').value = numberWithCommas(sand);
    
    var mixes = sand / 200;
    mixes = (Math.round(mixes * 100) / 100).toFixed(2);
     document.getElementById('mixes').value = numberWithCommas(mixes);

    var matrixA = 7.5 * mixes / 4;
    matrixA = ((Math.round(matrixA * 100) / 100)).toFixed(2);
    document.getElementById('epoxy-a').value = numberWithCommas(matrixA) + ' gal.';
    

    var matrixB = matrixA / 5;
     matrixB = ((Math.round(matrixB * 100) / 100)).toFixed(2);
     document.getElementById('epoxy-b').value = matrixB + ' gal.';
});