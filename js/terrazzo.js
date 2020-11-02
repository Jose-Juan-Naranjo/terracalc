// FUNCTION THAT PUTS COMMAS AFTER THREE DIGITS
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

document.querySelector('.terrazzo-materials').style.display = 'none';


document.getElementById('calculate-btn').addEventListener('click', function() {
    /* SET UP VALUES TO CALCULATE*/
    var sqft = document.getElementById('sqft').value;

    var height = document.getElementById('height').value;

    var heightInches = height / 12;

    var sqftPerMix = document.getElementById('sqftpermix').value;

        /* CALCULATE VOLUME */
    var volume = sqft * heightInches;
    volume = (Math.round(volume * 100) / 100).toFixed(2);

    var mixes = sqft / sqftPerMix;
    mixes = (Math.round(mixes * 100) / 100).toFixed(2);
        // ROCK PER MIX INPUT 
    var rockPerMix = document.getElementById('rockpermix').value;
    var rock = mixes * rockPerMix;
    rock = (Math.round(rock * 100) / 100).toFixed(2);

        // FILLER PER MIX INPUT
    var fillerPerMix = document.getElementById('fillersand').value;
    var fillerSand = mixes * fillerPerMix;
    fillerSand = (Math.round(fillerSand * 100) / 100).toFixed(2);

    // EPOXY VARIABLES \/
    var matrixAQuartz = mixes * 20;
    matrixAQuartz = (Math.round(matrixAQuartz * 100) / 100).toFixed(2);
    var matrixAGallons = mixes * 5;
    matrixAGallons = (Math.round(matrixAGallons * 100) / 100).toFixed(2);

    var hardnerBQuartz = mixes * 4;
    hardnerBQuartz = (Math.round(hardnerBQuartz * 100) / 100).toFixed(2);
    var hardnerBGallons = mixes * 1;
    hardnerBGallons = (Math.round(hardnerBGallons * 100) / 100).toFixed(2);

    // OUTPUT VALUES \/

    document.querySelector('.terrazzo-materials').style.display = 'flex';

    document.getElementById('output').value = volume + ' cubic feet';
    
    document.getElementById('mixes').value = mixes;
    
    document.getElementById('rockweight').textContent = numberWithCommas(rock) + ' lbs';

    document.getElementById('sandweight').textContent = numberWithCommas(fillerSand) + ' lbs';

    document.getElementById('matrixa').innerHTML = numberWithCommas(matrixAGallons) + ' gal.';

    document.getElementById('hardnerb').innerHTML = numberWithCommas(hardnerBGallons) + ' gal.';

});