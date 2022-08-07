import Button from './Button';
import { List } from './type';
declare const add: (n: number) => {
    n: number;
    components: (x: number, y: number) => {
        x: number;
        y: number;
    };
};
declare const clone: (n: string[]) => string[];
declare const list: (list: List) => string[];
export { add, clone, Button, list };
