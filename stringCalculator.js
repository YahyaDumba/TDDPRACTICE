function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  if (numbers.length === 1) {
    return parseInt(numbers);
  }

    let sum = 0;
    const parts = numbers.split(/,|\n/);
    for(let part of parts){
        sum += parseInt(part);
    }
    return sum;
  
}

module.exports = add;
