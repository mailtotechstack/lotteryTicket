export function genTicket(digit){
    const arr = new Array(digit);
    for(let i=0; i<digit; i++){
        arr[i]= Math.floor(Math.random()*10);
    };
    return arr;
};

export function sum(arr){
    return arr.reduce((acc, val)=> acc+val);
};