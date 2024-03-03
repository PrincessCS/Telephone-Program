

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
            console.log(`Could not dial ${number}. Number not found!`);
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

    constructor(name){
        this.name = name;
    }
    update(action, number) {
        console.log(`${this.name}: Phone number ${number} has been ${action}.`);
    }
}


// creating an instance of the Telephone class
const telephone = new Telephone();

//adding phonenumbers to the phoneNumber array
telephone.addPhoneNumber("1234");
telephone.addPhoneNumber("12345");
telephone.addPhoneNumber("123456");
telephone.addPhoneNumber("1234567");

//removing a phonenumber
telephone.removePhoneNumber("1234567");

//dialling a removed phonenumber
telephone.dialPhoneNumber("1234567");



//creating an instance of the updateObserver class
const observer = new updateObserver("Observer 1");
telephone.observers.push(observer);
observer.update ("added", "12345");




console.log(telephone);














