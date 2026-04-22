"use client"

import { useState } from "react"
import { HelpCircle, Check, X, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const quizQuestions = [
  {
    question: "Combien de nouveau-nés sont décédés à la Rabta en 2019 ?",
    options: ["5", "11", "15", "20"],
    correct: 1,
  },
  {
    question: "Que signifie l'ODD 3 ?",
    options: ["Éducation pour tous", "Bonne santé et bien-être pour tous", "Eau propre", "Énergie durable"],
    correct: 1,
  },
  {
    question: "Quelle région manque le plus de médecins ?",
    options: ["Tunis", "Sfax", "Kasserine et Jendouba", "Sousse"],
    correct: 2,
  },
  {
    question: "Qu'est-ce que la télémédecine ?",
    options: [
      "Un hôpital connecté",
      "Consulter un médecin à distance grâce à internet",
      "Un robot chirurgien",
      "Une application de fitness"
    ],
    correct: 1,
  },
  {
    question: "Quel % du PIB la Tunisie consacre-t-elle à la santé ?",
    options: ["3%", "6,2%", "10%", "15%"],
    correct: 1,
  },
  {
    question: "Qu'est-ce qu'un hôpital écologique ?",
    options: [
      "Un hôpital en plein air",
      "Un hôpital utilisant l'énergie solaire et réduisant ses déchets",
      "Un hôpital sans électricité",
      "Un hôpital végétarien"
    ],
    correct: 1,
  },
  {
    question: "Quel est le nom de notre musée virtuel ?",
    options: ["Espoir Santé", "Battements d'Espoir", "Cœur de Tunisie", "Vision Santé"],
    correct: 1,
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizComplete(false)
  }

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Quiz Interactif
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Testez Vos Connaissances
          </h2>
          <p className="text-muted-foreground">
            Avez-vous bien compris les enjeux du système de santé tunisien ?
          </p>
        </div>

        {!quizComplete ? (
          <Card className="border-2">
            <CardContent className="p-6 md:p-8">
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} / {quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  Score: {score}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full mb-8 overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {quizQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {quizQuestions[currentQuestion].options.map((option, index) => {
                  const isCorrect = index === quizQuestions[currentQuestion].correct
                  const isSelected = index === selectedAnswer

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        showResult
                          ? isCorrect
                            ? "border-green-500 bg-green-50 text-green-700"
                            : isSelected
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && isCorrect && (
                          <Check className="w-5 h-5 text-green-500" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Next Button */}
              {showResult && (
                <Button 
                  onClick={nextQuestion}
                  className="w-full"
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Question Suivante" : "Voir le Résultat"}
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-primary">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{score}/{quizQuestions.length}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {score >= 5 ? "Excellent !" : score >= 3 ? "Bien joué !" : "Continuez à apprendre !"}
              </h3>
              <p className="text-muted-foreground mb-6">
                Vous avez répondu correctement à {score} question{score > 1 ? "s" : ""} sur {quizQuestions.length}.
              </p>
              <Button onClick={resetQuiz} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Recommencer le Quiz
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
