class Telephone {
    constructor(){
        this.Numbers = [];
        this.observers = [];
    }

AddPhoneNumber(number){
    this.Numbers.push(number);
    this.notifyObservers();
};

RemovePhoneNumber(number){
    this.Numbers.pop(number);
    this.notifyObservers();
}

DialPhoneNumber(){
    if (this.Numbers.includes(number)) {
        console.log(`Dialing ${number}`);
      } else {
        console.log(`number not found`);
      }
}
}