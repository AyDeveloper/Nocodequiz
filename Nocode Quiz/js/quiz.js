const correctAnswers = ['C', 'B', 'A', 'A', 'B'];
const resultSpan = document.querySelector('.result p span');
const result = document.querySelector('.result');
const form = document.querySelector('.mainForm');

form.addEventListener('submit', (e) => {
e.preventDefault();

let score = 0;
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    userAnswers.forEach((eachAnswer, index) => {
        if (eachAnswer === correctAnswers[index]) {
            score += 20;
        }
    })

    scrollTo(0,0)
    result.classList.add('show');

    let output = 0;
    const timer = setInterval(() => {
        resultSpan.textContent = `${output}%`
        if (output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 30);

})