

class Telephone{

    constructor(){
        this.phoneNumber = [];
        this.observers = [];
    }
    addPhoneNumber(number) {
        if (!this.phoneNumber.includes(number)) {
            this.phoneNumber.push(number);
            this.notifyObservers('added', number);
        }
    }

    removePhoneNumber(number) {
        const index = this.phoneNumber.indexOf(number);
        if (index !== -1) {
            this.phoneNumber.splice(index, 1);
            this.notifyObservers('removed', number);
        }
    }

    dialPhoneNumber(number) {
        if (this.phoneNumber.includes(number)) {
            console.log(`Dialing ${number}...`);
        } else {
            console.log(`Could not dial ${number}. Number not found in the phone book.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(action, number) {
        this.observers.forEach(observer => {
            observer.update(action, number);
        });
    }
}

class updateObserver {
    update(action, number) {
        console.log(`Phone number ${number} has been ${action}.`);
    }
}

const telephone = new Telephone();
telephone.addPhoneNumber("12345679");
telephone.addPhoneNumber("000000");
telephone.addPhoneNumber("1234");
telephone.removePhoneNumber("1234");
telephone.removePhoneNumber("11111");

const observer = new updateObserver();
observer.update("added", "1234");
telephone.addObserver(observer);



//observer.update("added", "12345679");



console.log(telephone);


