function calculateBMI() {
  
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  console.table({ age, weight, height });

  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    alert("Your BMI is " + bmi.toFixed(1) + ". You are underweight.");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    alert("Your BMI is " + bmi.toFixed(1) + ". You have a normal weight.");
  } else if (bmi >= 25 && bmi < 29.9) {
    alert("Your BMI is " + bmi.toFixed(1) + ". You are overweight.");
  } else {
    alert("Your BMI is " + bmi.toFixed(1) + ". You are obese.");
  }
}