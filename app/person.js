import {addToDom} from './helpers';

export class Person{
    constructor(name){
        this.name=name;
    }

    speak(text){
        addToDom(`${this.name} Says: ${text}`);
    }

    greet(){
        this.speak(`Hello, my name is ${this.name}`);
    }

}


export class SuperPerson extends Person{

    constructor(name,superpower){
        /* have to pass in what the constructor expects from the class person*/
        super(name);
        this.superpower=superpower;
    }

    /*when extend a class do not necessarily need a constructor, do if need to pass in properties or methods*/
    saySuperpower(){
        this.speak(`My superpower is ${this.superpower}`);
    }
}