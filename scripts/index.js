class Creature {
    static number = 0;
    constructor(name,healthPoints, damage){
        this.id= Creature.number++;
        this.name= name;
        this.healthPoints = healthPoints;
        this.damage= damage;
    }
  
    defeat(obj) {
alert(`${obj.name} уничтожен!!!`);
    }
};

class Player extends Creature{
#lvl;
constructor(lvl,name,healthPoints, damage){
    super(name,healthPoints, damage);  
    this.#lvl= lvl;
}

getlvl(){
    return this.#lvl;
}
attack(other) {
    if(other.healthPoints > 0&& this.healthPoints >0){
    other.healthPoints -= this.damage
    this.#lvl+= 10;
    console.log(other.healthPoints);
    console.log(`У ${this.name} уровень составляет ${this.#lvl},healthPoints  составляет ${this.healthPoints}!  У  ${other.name} healthPoints  составляет ${other.healthPoints} `);
   }
    if(other.healthPoints<= 0){
    super.defeat(other);
return true;
}
else false;
}
};



class Enemy extends Creature{
    constructor(name,healthPoints, damage){
        super(name,healthPoints, damage); }

    attack(other) {
        if(other.healthPoints > 0&& this.healthPoints >0){
        other.healthPoints -= this.damage
        console.log(other.healthPoints);
        console.log(`У ${this.name} healthPoints  составляет ${this.healthPoints}! У ${other.name} healthPoints  составляет ${other.healthPoints} `);
        }
        if(other.healthPoints<= 0){
            super.defeat(other);
        return true;
    }
        else false;
    }
};
let p1 = new Player(3,'Gector',10,2);
let e1 = new Enemy('Petr',12,4);
console.log(p1);
console.log(e1);

do{
p1.attack(e1);  
e1.attack(p1);
}while(p1.healthPoints>0);