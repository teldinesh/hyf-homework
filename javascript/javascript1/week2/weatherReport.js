function weatherReport (degrees){
    if (degrees <= 0) {
        return 'Cold weather! Wear warm jackets and Sweaters';
    }
    else if (degrees > 0 && degrees <= 5){
        return 'Nice weather! Wear Sweatshirts';
    }

    else if (degrees > 5 && degrees <= 10){
        return 'Warm weather! Wear Hoodies';
    }

    else if (degrees > 10 && degrees <= 15){
        return 'Sunny weather! Wear Shirt and Pants';
    }
    else
    {
        return 'Hot weather! Wear shorts and a t-shirt';
    }
};

const clothesToWear = weatherReport(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"