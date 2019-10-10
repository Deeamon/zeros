module.exports = function zeros(expression) {
  let countTwo = 0;
  let countFive = 0;
  let exp = expression.split('*');
   
  for (let i = 0; i < exp.length; i++) {
    let flag;

    (exp[i].includes('!!')) ? flag = 2 : flag = 1;
    (exp[i].includes('!!')) ? exp[i] = exp[i].replace('!!', '') : exp[i] = exp[i].replace('!', '');


    while (exp[i] >= 1 ) {
      let temp = exp[i];
      while (temp  % 5 == 0) {
        countFive++;
        temp /= 5;
      }

      temp  = exp[i];
      while (temp  % 2 == 0) {
        countTwo++;
        temp /= 2;
      }

      exp[i] = exp[i] - flag;
    }
  }

  return (countTwo < countFive) ? countTwo : countFive;
}
