document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    var bmi = calculateBMI(height, weight);
    var idealWeight = calculateIdealWeight(height);

    displayResult(bmi, idealWeight);
});

function calculateBMI(height, weight) {
    var bmi = weight / Math.pow(height / 100, 2);
    return bmi.toFixed(2);
}

function calculateIdealWeight(height) {
    var idealWeight = (height - 100) - (0.1 * (height - 100));
    return idealWeight.toFixed(2);
}

function displayResult(imt, idealWeight) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    var imtInfo = document.createElement('p');
    imtInfo.classList.add('result-text');
    imtInfo.innerHTML = 'Indeks Massa Tubuh (IMT): ' + imt;

    var idealWeightInfo = document.createElement('p');
    idealWeightInfo.classList.add('result-text');
    idealWeightInfo.innerHTML = 'Ideal Weight: ' + idealWeight + ' kg';

    var statusGizi = document.createElement('p');
    statusGizi.classList.add('status-gizi');
    statusGizi.innerHTML = getStatusGizi(imt);

    resultDiv.appendChild(imtInfo);
    resultDiv.appendChild(idealWeightInfo);
    resultDiv.appendChild(statusGizi);
}
