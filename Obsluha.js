// Obsluha.js
import Pojistenec from './Pojistenec.js';
import SeznamPojistencu from './SeznamPojistencu.js';

const seznamPojistencu = new SeznamPojistencu();

document.addEventListener('DOMContentLoaded', () => {
    const buttonUloz = document.getElementById('buttonUloz');
    const buttonVypis = document.getElementById('buttonVypis');
    buttonUloz.addEventListener('click', ulozData);
    /*buttonVypis.addEventListener('click', vypisData);*/

    const savedData = localStorage.getItem('pojistenci');
    if (savedData) {
        seznamPojistencu.pojistenci = JSON.parse(savedData);
    }
});

function ulozData() {
    const inputJmeno = document.getElementById('inputJmeno');
    const inputPrijmeni = document.getElementById('inputPrijmeni');
    const inputVek = document.getElementById('inputVek');
    const inputTel = document.getElementById('inputTel');

    const jmeno = inputJmeno.value;
    const prijmeni = inputPrijmeni.value;
    const vek = inputVek.value;
    const telefon = inputTel.value;

    if (jmeno.trim() != '' && prijmeni.trim() != '' && vek.trim() != '' && telefon.trim() != '') {
        const pojistenec = new Pojistenec(jmeno, prijmeni, vek, telefon);
        seznamPojistencu.pridatPojistence(pojistenec);

        inputJmeno.value = '';
        inputPrijmeni.value = '';
        inputVek.value = '';
        inputTel.value = '';

        localStorage.setItem('pojistenci', JSON.stringify(seznamPojistencu.pojistenci));

        alert('Pojištěnec byl uložen.');
    } else {
        alert('Vyplňte prosím vaše údaje');
    }
}



/*function vypisData() {
    const vypisContainer = document.getElementById('vypisContainer');
    vypisContainer.innerHTML = '';

    seznamPojistencu.pojistenci.forEach((pojistenec, index) => {
        const pojistenecDiv = document.createElement('div');
        pojistenecDiv.innerHTML = `
            <strong>Pojištěnec ${index + 1}:</strong><br>
            Jméno: ${pojistenec.jmeno}<br>
            Příjmení: ${pojistenec.prijmeni}<br>
            Věk: ${pojistenec.vek}<br>
            Telefon: ${pojistenec.telefon}<br><br>
        `;
        vypisContainer.appendChild(pojistenecDiv);
    });
}*/

function RegexText() {
    const key = event.key;
    if (isNaN(key)) {
    } else {
        event.preventDefault();
    }
}

function RegexNumber() {
    const key = event.key;
    if (!isNaN(key)) {
    } else {
        event.preventDefault();
    }
}

inputVek.addEventListener('keypress', (event) => {
    RegexNumber();
})

inputTel.addEventListener('keypress', (event) => {
    RegexNumber();
})

inputPrijmeni.addEventListener('keypress', (event) => {
    RegexText();
})
inputJmeno.addEventListener('keypress', (event) => {
    RegexText();
});
