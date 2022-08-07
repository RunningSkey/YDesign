import lodash  from 'lodash';
import components from './components';
import Button from './Button';
import { List } from './type';
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

const list = (list: List) => {
  return list.map(i => i.name);
}

export {
  add,
  clone,
  Button,
  list
}

