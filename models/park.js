const Dinosaur = require('dinosaur.js');

const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}
//Get total number of dinosaurs
Park.prototype.numberOfDinosaurs = function(){
  return this.dinosaurs.length;
}
//Add dinosaur
Park.prototype.addDinosaur = function(){
  this.dinosaurs.push(dinosaur);
}
//Remove Dinosaur by species
Park.prototype.removeDinosaurBySpecies = function(dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
}
//Find most popular dinosaur
// Park.prototype.findPopularDinosaur = function(dinosaur) {
//   const
// }
//Find all dinosaurs by species

//calculate total number of visitors per day
// Park.protoype.numberOfGuestsPerDay = function(){
//   return this.guestsAttractedPerDay;
// }
//calculate total number of visitors per year

//calculate total revenue for one year


module.exports = Park;
