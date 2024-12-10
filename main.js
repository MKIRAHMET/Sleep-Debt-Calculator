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
  let idealHours = 8;
  return idealHours * 7;
}


//console.log(getIdealSleepHours());







