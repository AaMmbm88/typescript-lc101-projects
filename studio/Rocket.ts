import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let totalMass: number = 0;
        for (let i=0; i<items.length; i++){
            totalMass += items[i].massKg; 
        };
        return totalMass;
    };
    currentMassKg(): number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    canAdd(item: Payload): boolean{
        let notAtMax:boolean
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            notAtMax = true
        }else{
            notAtMax = false
        }
        return notAtMax
    };
    addCargo(cargo: Cargo): boolean{
        let cargoAdded:boolean 
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            cargoAdded = true
        }else{
            cargoAdded = false
            };
        return cargoAdded
    };
    addAstronaut(astronaut: Astronaut): boolean{
        let astronautAdded:boolean 
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            astronautAdded=  true
        }else{
            astronautAdded = false
            };
        return astronautAdded
    };
};

