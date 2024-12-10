function getSleepHours(day) {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 6;
  } else if (day === 'Thursday') {
    return 7.5;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 9;
  } else if (day === 'Sunday') {
    return 8.5;
  } else {
    return 'Invalid day'; // Handle invalid input
  }
}

//console.log(getSleepHours('Wednesday'));

function getActualSleepHours() {
  return (
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday')
  );
}

//console.log(getActualSleepHours());

function getIdealSleepHours(){
  let idealHours = 2;
  return idealHours * 7;
}


//console.log(getIdealSleepHours());


function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDebt = 0;

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You need to sleep more.');
    sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`You need to sleep ${sleepDebt} more hours.`);
  } else {
    console.log('You slept more than you need.');
    sleepDebt = actualSleepHours - idealSleepHours;
    console.log(`You slept ${sleepDebt} hours more than you need.`);
  }
}


calculateSleepDebt()

