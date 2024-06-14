const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("กรุณากรอกคะแนน :  ", (score) => {
  let grade = null;
  if (score >= 90) grade = "4";

  console.log(grade);

  rl.close();
});
