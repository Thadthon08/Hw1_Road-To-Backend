const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("กรุณากรอกคะแนน :  ", (score) => {
  let grade = "";
  if (score > 100 || score < 0) console.log("Error");
  else if (score >= 90) grade = "4";
  else if (score >= 80) grade = "3";
  else if (score >= 70) grade = "2";
  else if (score >= 60) grade = "1";
  else grade = "0";

  console.log(grade);

  rl.close();
});
