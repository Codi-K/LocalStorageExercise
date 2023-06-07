                                                // Jamie Exercise

// Create an array of Objects,
// Set your array in localStorage.
// Get your array from localStorage and store it in a variable called "Information"
// Display/Write the content of the variable "Information" on the document;

let carNames = [
    {
        carName: "Nissan",
        image: "https://car-images.bauersecure.com/wp-images/13098/480x270/2022-gt-r-nismo-00.jpg"
    },
    {
        carName: "Toyota",
        image: "https://scene7.toyota.eu/is/image/toyotaeurope/brown-hilux-1920x1080-1?qlt=80&wid=1280&fit=fit,1&ts=1661156555322&resMode=sharp2&op_usm=1.75,0.3,2,0"
    },
    {
        carName: "BMW",
        image: "https://www.bmw.co.za/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg"
    },
    {
        carName: "Kia",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2022/08/Large-19436-KiaPicantoGT-Line.jpg?w=1280&h=720"
    }
]

localStorage.setItem("cars", JSON.stringify(carNames))
let Information = JSON.parse(localStorage.getItem("cars"))
console.log(Information);


// to show car images
document.querySelector("#carlist")

carlist.innerHTML= "";
carNames.forEach(car=>{
    carlist.innerHTML +=`
    <h1>${car.carName}</h1>
    <img src="${car.image}" alt="${car.carName}" loading="lazy" id="pics">
    `
})


document.write(localStorage.getItem("cars"))