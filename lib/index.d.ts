import Button from './Button';
declare const add: (n: number) => {
    n: number;
    components: (x: number, y: number) => {
        x: number;
        y: number;
    };
};
declare const clone: (n: string[]) => string[];
export { add, clone, Button };
