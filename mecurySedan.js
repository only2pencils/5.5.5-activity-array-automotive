//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

//this shows how to call from this module...

//5.Inside mercurySedan.js, import vehicle.js
// var Vehicle = require("./vehicle.js"); WRONG WRONG WRONG

//6.Create a Car class that extends the Vehicle class(located in the vehicle.js)
//7.Add a constructor
//8.Add the super keyword to call the parent class constructor

// Name                 Initial Value
// maximumPassengers    5
// passenger            0
// numberOfWheels       4
// maximumSpeed         160
// fuel                 10
// scheduleService      false
//.9Add the properties listed in the Properties chart above

// Name            Parameters      Logic
// loadPassenger   num             if passenger less than maximumPassengers then availableRoom == true
// start           no parameters   if fuel is greater than 0, then start == true
// scheduleService mileage         if mileage is greater than 30000, time for maintenance == true
//10.Add the method with psuedo logic listed in the Methods chart above
class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  checkService() {
    if (this.mileage > 3000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }

  //   start() {
  //     if (this.fuel > 0) {
  //       console.log("engine started...!!!");
  //       return (this.started = true);
  //     } else {
  //       console.log("engine cannot start...");
  //       return (this.started = false);
  //     }
  //   }
  start() {
    if (this.fuel > 0) {
      console.log("engine has started.");
      return (this.started = true);
    } else {
      console.log("no fuel");
      return (this.started = false);
    }
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassenger) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.model +
            "" +
            this.make +
            "not have enough space to take all passengers."
        );
      }
    } else {
      console.log(this.model + "" + this.make + "is full");
    }
  }
}
// let v = new VehicleModule.Vehicle(
//   "Mecury",
//   "Sedan",
//   "1965",
//   "color",
//   "mileage"
// );
// console.log(v.make);
let myCar = new Car("Mecury", "Sedan", "1965", "olive", "15000");
myCar.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkService();
console.log(myCar);
