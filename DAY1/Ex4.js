for(let c =0;c<4;c++) {
  let str = "";
  for(let r = 0;r<7;r++){
    if(c===0 || r===3) str +="*";
    else str+=" "
  }
  console.log(str)
}