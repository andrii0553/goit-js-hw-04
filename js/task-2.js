function calcAverageCalories(days) {

  let middleCalories;
  
  if (days.length === 0) {
    middleCalories = 0;
  } else {
  
  const cal = [];
  for(const c of days){
    cal.push(c.calories);
  }
  
  let sum = 0;
  for (const i of cal) {
    sum += i;
  }
    middleCalories = sum / cal.length;
    }
   return middleCalories;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
 
