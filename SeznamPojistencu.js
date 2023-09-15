
export default class SeznamPojistencu {
    constructor() {
        this.pojistenci = [];
    }

    pridatPojistence(pojistenec) {
        this.pojistenci.push(pojistenec);
        this.ulozitDoLocalStorage();
    }

    smazatPojistence(index) {
        if (index >= 0 && index < this.pojistenci.length) {
            this.pojistenci.splice(index, 1);
            this.ulozitDoLocalStorage();
        }
    }

    ulozitDoLocalStorage() {
        localStorage.setItem('pojistenci', JSON.stringify(this.pojistenci));
    }
}

