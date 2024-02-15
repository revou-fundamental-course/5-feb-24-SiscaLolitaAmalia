var isCelsiusToFarhenheit = true;

function toggleKonversi() {
    isCelsiusToFarhenheit = !isCelsiusToFarhenheit;
    var labelCelcius = document.querySelector('label[for=celcius]');
    labelCelcius.textContent = isCelsiusToFarhenheit ? 'Celcius (°C):' : 'Fahrenheit (°F):';
    var labelFahrenheit = document.querySelector('label[for=fahrenheit]');
    labelFahrenheit.textContent = isCelsiusToFarhenheit ? 'Fahrenheit (°F):' : 'Celcius (°C):';
    var labelH3 = document.querySelector('label[for=h3]');
    labelH3.textContent = isCelsiusToFarhenheit ? 'Cara Konversi dari Celcius ke Fahrenheit' : 'Cara Konversi dari Fahrenheit ke Celcius';
    var labelParagraf1 = document.querySelector('#paragraf-1');
    labelParagraf1.textContent = isCelsiusToFarhenheit ? 'Masukkan suhu Celcius (°C) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).' : 'Masukkan suhu Fahrenheit (°F) ke kotak dibawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (°C).';
    var labelParagraf2 = document.querySelector('#paragraf-2');
    labelParagraf2.textContent = isCelsiusToFarhenheit ? 'Suhu dalam Derajat Fahrenheit (°F) sama dengan suhu dalam Derajat Celcius (°C) dikali 9/5 ditambah 32' : 'Suhu dalam Derajat Celcius (°C) sama dengan suhu dalam Derajat Fahrenheit (°F) dikurangi 32 dikali 5/9';
    var labelParagraf3 = document.querySelector('#paragraf-3');
    labelParagraf3.textContent = isCelsiusToFarhenheit ? 'Suhu °F = (Suhu °C x 9/5) + 32' : 'Suhu °C = (Suhu °F - 32) x 5/9';
    reset();
}

function konversi() {
    var input = document.getElementById("angka_input").value;

    if (isNaN(input)) {
        reset();
        return;
    }

    var inputRounded = parseFloat(input);
    var outputValue;

    if (isCelsiusToFarhenheit) {
        var celcius = parseFloat(input);
        var fahrenheit = (celcius * 9 / 5) + 32;
        outputValue = parseFloat(fahrenheit.toFixed(2));
    } else {
        var fahrenheit = parseFloat(input);
        var celcius = (fahrenheit - 32) * 5 / 9;
        outputValue = parseFloat(celcius.toFixed(2));
    }

    var inputLabel = isCelsiusToFarhenheit ? '°C' : '°F';
    var outputLabel = isCelsiusToFarhenheit ? '°F' : '°C';
    var kalkulasi = `(${inputRounded}${inputLabel} ${isCelsiusToFarhenheit ? '× 9/5) + 32' : '- 32) × 5/9'} = ${outputValue}${outputLabel}`;

    document.getElementById("output").value = outputValue;
    document.getElementById("output_kalkulasi").value = kalkulasi;
}

function reset() {
    document.getElementById("angka_input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("output_kalkulasi").value = "";
}
