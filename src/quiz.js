class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions
    this.timeLimit = timeLimit
    this.timeRemaining = timeRemaining
    this.correctAnswers = 0
    this.currentQuestionIndex = 0
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex]
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = this.questions[i]
      this.questions[i] = this.questions[j]
      this.questions[j] = temp
    }
    return this.questions
  }

  checkAnswer(answer) {
    this.correctAnswers++
  }

  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true
    } else {
      return false
    }
  }
  filterQuestionsByDifficulty(difficulty) {
    /**
     * text
     * questions
     * answer
     * difficulty
     */
    const filteredQuestions = this.questions.filter((question) => {
      /**
       * question might have:
       *  difficulty : 1 | 2 | 3
       */
      return question.difficulty === difficulty
    })
    return this.filterQuestionsByDifficulty
  }

  averageDifficulty() {
    const sumOfDifficulty = this.questions.reduce((acc, question) => {
      return acc + question.difficulty
    }, 0)
    const average = (sumOfDifficulty / this.questions.length).toFixed(2)
    return Number(average)
    /** return average * 1 | JS will parse the string and when multiplying by 1
     * it will give us a number back
     */
  }
}
