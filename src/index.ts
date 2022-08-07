import lodash  from 'lodash';
import components from './components';
import Button from './Button';
const add = (n: number) => {
  return {
    n,
    components
  }
}

// const save = (str: string) => {
//   return str + str;
// }

// let number = 10;

// number = '1'
const clone = (n: string[]) => {
  return lodash.cloneDeep(n);
}

export {
  add,
  clone,
  Button
}