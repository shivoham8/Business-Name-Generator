/* Business Name Generator (Adjectives - Shop name - Another name)
Adjectives: Crazy, amazing, fire
Shop name: Engine, food, garments
Another name: Bros, limited, hub */

let adjectives = "Crazy, Amazing, Fire";
let shop_name = "Engine, Food, Garments"; 
let another_name = "Bros, Limited, Hub"; 

function first_name() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";

    let d = Math.floor((Math.random())*3);

    if(d==0) {
        return a;
    }

    if(d==1) {
        return b;
    }

    if(d==2) {
        return c;
    }

}

function second_name() {
    let a = "Engine";
    let b = "Food";
    let c = "Garments";

    let d = Math.floor((Math.random())*3);

    if(d==0) {
        return a;
    }

    if(d==1) {
        return b;
    }

    if(d==2) {
        return c;
    }

}

function last_name() {
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";

    let d = Math.floor((Math.random())*3);

    if(d==0) {
        return a;
    }

    if(d==1) {
        return b;
    }

    if(d==2) {
        return c;
    }

}

let a = first_name();
let b = second_name();
let c = last_name();

function business_name() {
    console.log(`Business Name: ${a} ${b} ${c}`);
}

business_name();