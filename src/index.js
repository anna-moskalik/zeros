module.exports = function zeros(expression) {
  let array = expression.split ("*");
  let n = array.length;
  let zeros = 0;
  let s = 1;

  for (let i = 0; i <= n; i++)
    if (array[i].endsWith('!!')) {
      let num = array[i].slice(-6, -2);
        if (num % 2 == 1) {
            zeros = 0;
            }
          else if (num % 10 == 0) {
            zeros += 1;
            }
      }
    else for (s = 1; (n / (5 ** s)) >= 1; s++) {
        let zero = Math.floor (n / (5 ** s));
        zeros += zero;
      }
  return zeros;
    }
