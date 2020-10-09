function solve(arr){
  if(arr.length === 1) return '23:59';
  const multiplier = [600, 60, 0, 10, 1]
  let max = 0;
  const timeValues = arr.map(str => {
    let timeValue = 0;
    for(let i = 0; i < str.length ; i++) {
      let num = parseInt(str[i]) * multiplier[i];
      if(num) {
        timeValue += num
      };
    }
    return timeValue;
  }).sort((a,b) => a-b);
  console.log(timeValues);
  timeValues.push(timeValues[0] + 1440)
  for(let i = 0 ; i < timeValues.length ; i++) {
    let difference;
    let thisVal = timeValues[i];
    let nextVal = timeValues[i + 1];
    if(i + 1 < timeValues.length) {
      difference = nextVal - thisVal - 1;
      max = Math.max(max, difference)
    }
  }
  let minutes = max % 60;
  let hours = Math.floor(max / 60);
  const addZeroHr = (hours) => hours < 10 ? '0' + hours.toString() : hours.toString(); 
  const addZeroMin = (minutes) => minutes < 10 ? '0' + `${minutes}` : `${minutes}`;
  hours = addZeroHr(hours);
  minutes = addZeroMin(minutes);
  let output = `${hours}:${minutes}`;
  return output;

  // convert the times into numerical values
  //   multiply the integer value by the arr[i] and add to the total time value
  //  sort the times from smallest to biggest
  //   calculate the difference between each pair of times
  // ["23:00","04:22","18:05","06:24"]
  // [1380, 82, 1085, 384]
  // [82, 384, 1085, 1380, 1522]
  //     302  701   295   142 
  // minutes = 701 % 60 = 41
  // hours = math.floor(701/60) = 11
  // 
}

console.log(solve(["23:00","04:22","18:05","06:24"]));

solve(["23:00","04:22","18:05","06:24"]);

module.exports = solve;