class ToyCar{
    constructor(color, size, weight, year, doors, price){
        this.color = color;
        this.size = size;
        this.weight = weight;
        this.year = year;
        this.doors = doors;
        this.price = price;
    }
    
    Description(){

        return `Your car choices were color: ${this.color}, size: ${this.size}, scale: ${this.weight}, year: ${this.year}, number of doors: ${this.doors}, price: ${this.price}`;
    }
}

function CarDesc(){
    const color = document.getElementById("color").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const weight = document.getElementById("weight").value;
    const year = document.getElementById("year").value;
    const doors = document.querySelector('input[name="doors"]:checked').value;
    const price = document.getElementById("price").value;

    let car = new ToyCar(color, size, weight, year, doors, price);
    // const price = document.getElementById()

    let output = document.getElementById("output");
    output.textContent = car.Description();
}

const presets = {
    // Values to be used when selecting from the preset bar
    car1: {
        color: "Red",
        size: "Small",
        weight: "300g",
        year: "1990",
        doors: "2",
        price: "$10"
    },
    car2: {
        color: "Black",
        size: "Medium",
        weight: "500g",
        year: "2000",
        doors: "4",
        price: "$20"
    },
    car3: {
        color: "Yellow",
        size: "Large",
        weight: "1Kg",
        year: "2024",
        doors: "2",
        price: "$30"
    }
};

function usePreset(presetKey) {
    // Used for more flexibility, makes it simple to identify which preset was selected
    const preset = presets[presetKey];

    // Assigning the values depending on the preset
    if (preset) {
        document.getElementById("color").value = preset.color;
        document.querySelector(`input[name="size"][value="${preset.size}"]`).checked = true;
        document.getElementById("weight").value = preset.weight;
        document.getElementById("year").value = preset.year;
        document.querySelector(`input[name="doors"][value="${preset.doors}"]`).checked = true;
        document.getElementById("price").value = preset.price;

        // Display the preset car details
        CarDesc();
    }
}

// Event listener for preset dropdown
document.getElementById("preset").addEventListener("change", function() {
    usePreset(this.value);
});


let submit = document.getElementById("submit").addEventListener('click', CarDesc);