let houseEstimate1=(["Peter",8,10,10,100]);
let houseEstimate2=(["Julia",5,11,8,70]);

let volumeInMeters1=houseEstimate1[1]*houseEstimate1[2]*houseEstimate1[3];
let volumeInMeters2=houseEstimate2[1]*houseEstimate2[2]*houseEstimate2[3];

let gardenSizeInM21=houseEstimate1[4];
let gardenSizeInM22=houseEstimate2[4];
let housePrice1 = volumeInMeters1 * 2.5 * 1000 + gardenSizeInM21 * 300;
if (housePrice1 > 2500000) {
    console.log(houseEstimate1[0] + " is over paying for the house!" );
}
else {
    console.log(houseEstimate1[0] + " is getting the house for a good price!" );
}

let housePrice2 = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM22 * 300;
if (housePrice2 > 1000000) {
    console.log(`${houseEstimate2[0]} is over paying for the house!` );
}
else {
    console.log(`${houseEstimate2[0]} is getting the house for a good price!` );
}