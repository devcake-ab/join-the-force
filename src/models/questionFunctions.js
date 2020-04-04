import React from 'react'
import Question from '../components/Question'

export const generateQuestions = data => {
    return data.map(item => {
        return <Question key={item.id} title={item.question} answers={item.answers} />
    })
}
