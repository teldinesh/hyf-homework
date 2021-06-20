const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function travellingTime(travelInformation) {
    const time = (travelInformation.destinationDistance) / (travelInformation.speed);
    const hours = Math.floor(travelInformation.destinationDistance / travelInformation.speed)
    const minutes = Math.floor((time - hours) * 60);
    return `${hours} Hours and ${minutes} Minutes`
};
  const travelTime = travellingTime(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes


  