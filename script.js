async function fetchQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    const data = await response.json();
    return data.results.map((question) => ({
        question: decodeHTML(question.question),
        answers: shuffle([
            ...question.incorrect_answers.map(decodeHTML),
            decodeHTML(question.correct_answer)
        ]),
        correct: decodeHTML(question.correct_answer)
    }));
}

function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function generateQuiz() {
    const questions = await fetchQuestions();
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    questions.forEach((question, i) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${i + 1}. ${question.question}`;
        questionElement.appendChild(questionTitle);

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';

        question.answers.forEach((answer) => {
            const optionItem = document.createElement('li');

            const optionLabel = document.createElement('label');
            optionLabel.textContent = answer;

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${i}`;
            optionInput.value = answer;

            optionItem.appendChild(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });

        // Store the correct answer in a data attribute
        questionElement.dataset.correctAnswer = question.correct;
        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
}

function checkAnswers() {
    const quizContainer = document.getElementById('quiz-container');
    const questions = quizContainer.querySelectorAll('.question');
    let score = 0;

    questions.forEach((questionElement) => {
        const selectedOption = questionElement.querySelector('input[type="radio"]:checked');

        if (selectedOption && selectedOption.value === questionElement.dataset.correctAnswer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Your score: ${score} out of 10`;
}

document.getElementById('submit-btn').addEventListener('click', checkAnswers);

window.onload = generateQuiz;
