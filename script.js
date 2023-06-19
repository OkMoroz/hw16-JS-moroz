"use strict";

function Human(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Flat() {
  this.humans = [];
}
Flat.prototype.addHuman = function (human) {
  this.humans.push(human);
};

function Building(maxFlats) {
  this.flats = [];
  this.maxFlats = maxFlats;
}

Building.prototype.addFlat = function (flat) {
  if (this.flats.length < this.maxFlats) {
    this.flats.push(flat);
  } else {
    console.log(`The maximum number of flat in our building is 3.`);
  }
};

const dad = new Human("Max", "male");
const daughter = new Human("Sofia", "female");
const son = new Human("Andriy", "male");
const mom = new Human("Ksenia", "female");

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addHuman(dad);
flat1.addHuman(mom);
flat2.addHuman(daughter);
flat3.addHuman(son);

const building = new Building(3);

building.addFlat(flat1);
building.addFlat(flat2);
building.addFlat(flat3);

building.flats.forEach(function (flat, index) {
  console.log(
    `In our building in the flat № ${index + 1}: ${flat.humans
      .map(function (human) {
        return human.name;
      })
      .join(" and ")}`
  );
});
