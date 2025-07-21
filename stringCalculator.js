function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  if (numbers.length === 1) {
    return parseInt(numbers);
  }
  if(numbers.includes(',')){
    let sum = 0;
    const parts = numbers.split(',');
    for(let part of parts){
        sum += parseInt(part);
    }
    return sum;
  }
}

module.exports = add;
