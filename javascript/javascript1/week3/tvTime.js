const seriesDurations = [{
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
},
{
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
},
{
    title: "The Wire",
    days: 6,
    hours: 17,
    minutes: 0,
}
];
let totalTime = 0;
const totalLifeTime = 80 * 365 * 24 * 60;

function logOutSeriesText(seriesDurations) {
for (let i = 0; i < seriesDurations.length; i++) {
    let SeriesTimeDurationInMinutes = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + (seriesDurations[i].minutes);
    let SeriesTimeDurationInPercentage = (SeriesTimeDurationInMinutes * 100) / totalLifeTime;
    console.log(`${seriesDurations[i].title} took ${SeriesTimeDurationInPercentage.toFixed(3)}% of my life`);
    totalTime = totalTime + SeriesTimeDurationInPercentage;
}
console.log(`In total that is ${totalTime.toFixed(4)}% of my life`)
}
logOutSeriesText(seriesDurations); 