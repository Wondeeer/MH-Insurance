// pojistenci.js
import SeznamPojistencu from './SeznamPojistencu.js';

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#seznamPojistencu tbody');
    const seznamPojistencu = new SeznamPojistencu();
    const savedData = localStorage.getItem('pojistenci');
    if (savedData) {
        seznamPojistencu.pojistenci = JSON.parse(savedData);

        seznamPojistencu.pojistenci.forEach((pojistenec, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pojistenec.jmeno}</td>
                <td>${pojistenec.prijmeni}</td>
                <td>${pojistenec.vek}</td>
                <td>${pojistenec.telefon}</td>
                <td><button class="smazat-button" data-index="${index}">Smazat</button></td> 
            `;
            const smazatButton = row.querySelector('.smazat-button');
            smazatButton.addEventListener('click', () => {

                seznamPojistencu.smazatPojistence(index);
                localStorage.setItem('pojistenci', JSON.stringify(seznamPojistencu.pojistenci));
                location.reload();
            });
            tableBody.appendChild(row);
        });
    }
});

function aktualizovatTabulku(pojistenci) {

    const tableBody = document.querySelector('#seznamPojistencu tbody');
    tableBody.innerHTML = '';


    pojistenci.forEach((pojistenec, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pojistenec.jmeno}</td>
            <td>${pojistenec.prijmeni}</td>
            <td>${pojistenec.vek}</td>
            <td>${pojistenec.telefon}</td>
            <td><button class="smazat-button" data-index="${index}">Smazat</button></td>
        `;

        const smazatButton = row.querySelector('.smazat-button');
        smazatButton.addEventListener('click', () => {
            seznamPojistencu.smazatPojistence(index);
            aktualizovatTabulku(seznamPojistencu.pojistenci);
        });
        tableBody.appendChild(row);
    });

}

