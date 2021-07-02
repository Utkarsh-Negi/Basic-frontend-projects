//Array to store the questions and optionsand answers
const questionaire = [
  {
    ques: 'What is the birth year of Dr. APJ Abdul Kalam ?',
    a: '1995',
    b: '1888',
    c: '2000',
    d: '1931',
    ans: 'ans4',
  },
  {
    ques: 'What is the birth year of Atal vihari vajpayyi ji ?',
    a: '1924',
    b: '1888',
    c: '2000',
    d: '1931',
    ans: 'ans1',
  },
  {
    ques: 'What is the birth year of Dr.B R Ambedkar ?',
    a: '1995',
    b: '1891',
    c: '2000',
    d: '1931',
    ans: 'ans2',
  },
  {
    ques: 'What is the birth year of Amitabh Bacchhan?',
    a: '1995',
    b: '1888',
    c: '1942',
    d: '1931',
    ans: 'ans3',
  },
  {
    ques: 'What is the birth year of Virat Kohli?',
    a: '1995',
    b: '1888',
    c: '2000',
    d: '1988',
    ans: 'ans4',
  },
];

// All variables
const optionbox = document.querySelectorAll('.option-area');

const num = document.querySelector('#Number');
const ques = document.querySelector('.querries');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answer = document.querySelectorAll('.answer');
const submit = document.querySelector('.sub-button');
const congratulations = document.querySelector('.congo');

//Event listeners
submit.addEventListener('click', SubmitAns);

//Functions

let questionno = 0;
let correctAns = 0;

function loadquest() {
  num.innerHTML = 'No.' + (questionno + 1) + '   ';
  ques.innerHTML = questionaire[questionno].ques;
  option1.innerHTML = questionaire[questionno].a;
  option2.innerHTML = questionaire[questionno].b;
  option3.innerHTML = questionaire[questionno].c;
  option4.innerHTML = questionaire[questionno].d;
}

function quizbox() {
  document.querySelector('.quizbox').classList.remove('box');

  document.querySelector('.inbox').classList.add('box');
  loadquest();
}

function final() {
  questionno++;
  if (questionno == questionaire.length - 1) {
    submit.innerHTML = 'End';
  }

  if (questionno >= questionaire.length) {
    console.log('Test Over');
    reload();
  } else {
    console.log('More ques');
    loadquest();
  }
}

function SubmitAns() {
  if (questionno >= questionaire.length) return;
  answer.forEach((ele) => {
    if (ele.checked) {
      if (ele.id === questionaire[questionno].ans) {
        correctAns++;
        console.log('Correct Ans');
      } else {
        console.log('Incorrect Ans');
      }
      final();
    }
    ele.checked = false;
  });
}

function reload() {
  document.querySelector('.butt').textContent +=
    correctAns + ' out of ' + questionaire.length;
  document.querySelector('.quizbox').classList.remove('box');
  congratulations.classList.add('box');
}
