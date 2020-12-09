const mergeMeetings = (arr) => {
  /*  
    example: 
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 9,  endTime: 10 },
    { startTime: 10, endTime: 12 },
  */ 

  // create an empty object
  // iterate through the array
  // if there is not a key that matches the meeting start time, create that key and set it's value to the end time of that arr item.
  // otherwise, set the value of the key to the greater endTime

  // {
  // 0: 1
  // 3: 8
  // 9: 12
  // }
// for(let meeting in mergedMeetings) {
  // output.push({startTime: meeting, endTime: mergedMeetings[meeting]})
// }

  // iterate throught the object
  // for each key, see if there is a startTime in the object equal the end time
  // if yes, set the current end time to the greater end time. then, delete the second listing. otherwise, decrement until you reach start time.
  for(let startTime in allMeetings) {
    let endTime = allMeetings[startTIme]
    // 1
    let i = endTime;
    while(i > startTime) {
      if(allMeetings[i]) {
        // if there is a meeting that starts at this point, set new end time to the greater meeting end time
        allMeetings[startTime] = Math.max(endTime, allMeetings[i])
        delete allMeetings[i]
      }
      i--
    }
    // 
  }

// example output:
//  [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]
}