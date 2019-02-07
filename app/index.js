/*
 created a function in a different file so now we can use it here
  after import, says gives me whatever im importing from export

 */

import addToDom from './add_to_dom';
 /*can import all things in one line, the named exports need to be in {}*/
import calcDefault, {add,myArray} from './calculate';

console.log('My Array:',myArray);
calcDefault();

addToDom('h1', `2+8=${add(2,8)}`);