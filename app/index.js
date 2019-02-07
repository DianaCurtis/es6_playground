import {Person, SuperPerson} from './person';

const mike= new Person('Mike');
const superDiana=new SuperPerson('Diana','can learn');

mike.greet();
 /* can only use greet bc we extended*/
superDiana.greet();
superDiana.saySuperpower();
