"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        ;
        return totalMass;
    };
    ;
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        var notAtMax;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            notAtMax = true;
        }
        else {
            notAtMax = false;
        }
        return notAtMax;
    };
    ;
    Rocket.prototype.addCargo = function (cargo) {
        var cargoAdded;
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            cargoAdded = true;
        }
        else {
            cargoAdded = false;
        }
        ;
        return cargoAdded;
    };
    ;
    Rocket.prototype.addAstronaut = function (astronaut) {
        var astronautAdded;
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            astronautAdded = true;
        }
        else {
            astronautAdded = false;
        }
        ;
        return astronautAdded;
    };
    ;
    return Rocket;
}());
exports.Rocket = Rocket;
;
