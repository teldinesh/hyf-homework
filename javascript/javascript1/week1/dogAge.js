const dogYearOfBirth = 2000;
const dogYearFuture = 2025;
let dogAgeResult;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    let dogYear = (dogYearFuture-dogYearOfBirth)*7;
    dogAgeResult = `${dogYear} dog`;
}
else{
    let dogYear = (dogYearFuture-dogYearOfBirth);
    dogAgeResult = `${dogYear} human`;
}
console.log(`Your dog will be ${dogAgeResult} years old in ${dogYearFuture}`);
