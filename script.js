

class Telephone{

    constructor(){
        this.phoneNumber = [];
        this.observers = [];
    }

    addPhoneNumber(number) {
        if (!this.phoneNumber.includes(number)) {
            this.phoneNumber.push(number);
            console.log(`Added ${number} to the list of Phonenumbers.`);
           
        }
    }

    removePhoneNumber(number) {
        const index = this.phoneNumber.indexOf(number);
        if (index !== -1) {
            this.phoneNumber.splice(index, 1);
            console.log(`${number} has been removed from list of Phonenumbers.`);
          
        }
        else {
            console.log(`Phone number ${number} not found in list.`);
        }
    }

    dialPhoneNumber(number) {
        if (this.phoneNumber.includes(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(`dialed, ${number}`);
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


class Observer {

    constructor(name){
        this.name = name;
    }
   
    update(action, number) {
        console.log(`${this.name}: Now Dialling ${number}`);
    }
}


// creating an instance of the Telephone class
const telephone = new Telephone();

/*adding observers. The first observer prints the number to the console
the second observer prints now dialling 2347023232*/

const observer1 = {

    update(action, number) {
        console.log(`Observer 1:${number}`);
    }
};
const observer2 = new Observer("Observer 2");


telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("12345");
telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");

const observer = new Observer("Observer 1");
telephone.observers.push(observer);





console.log(telephone);














