class Car {
  constructor(mileage, length, boot_space) {
    this.mileage = mileage;
    this.length = length;
    this.boot_space = boot_space;
  }

  details() {
    let carDetails = `Mileage: ${this.mileage}, Length: ${this.length}, Boot Space: ${this.boot_space}`;
    return carDetails;
  }
}

// Creating an instance of Car
let myCar = new Car("20 km/l", "4.5 meters", "500 liters");

// Function to append values to the body element
function appendToBody(value) {
  let paragraph = document.createElement("p");
  paragraph.textContent = value;
  document.body.appendChild(paragraph);
}

// Appending car details to the body element
appendToBody(myCar.details());
