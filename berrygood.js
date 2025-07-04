const problem1 = {
  question: 'Differentiate: f(x) = 3x^4 - 5x^2 + 2x - 7',
  answer: '12x^3 - 10x + 2'
};

const problem2 = {
  question: 'Differentiate: k(x) = sin(3x^2)',
  answer: 'cos(3x^2) * 6x'
};

const problem3 = {
  question: 'Differentiate: h(x) = 5x^3 - 4x^2 + 2x - 32',
  answer: '15x^2 - 8x + 2' // Corrected from 15x^20 to 15x^2
};

const problem4 = {
  question: 'Differentiate: g(x) = (x^2 + 1) / (x^3 - 2x)',
  answer: '(-x^4 - 5x^2 + 2) / (x^3 - 2x)^2' // Fixed the extra 'x' at the end
};

const problem5 = {
  question: 'Differentiate: p(x) = tan(5x^2)',
  answer: '10x * sec^2(5x^2)'
};

let problem = Math.Floor(Math.Random()*5)+1;
