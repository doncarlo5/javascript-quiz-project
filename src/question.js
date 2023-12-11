class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.choices[i];
      this.choices[i] = this.choices[j];
      this.choices[j] = temp;
    }
    return this.choices;
  }
}

const question1 = new Question(
  "What is the capital of France?",
  ["Paris", "Berlin", "Madrid", "Rome"],
  "Paris",
  "Easy"
);

question1.shuffleChoices();
