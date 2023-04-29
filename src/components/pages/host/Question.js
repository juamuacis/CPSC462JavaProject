import { Radio, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";

export default function Question({ questionIndex, question, setQuestions }) {
  // update question text
  function handleQuestionChange(e) {
    const value = e.currentTarget.value;
    setQuestions((prevValue) => {
      let newValue = [
        ...prevValue
      ];
      newValue[questionIndex].question = value;
      return newValue;
    });
  }

  // update image url text
  function handleImageChange(e) {
    const value = e.currentTarget.value;
    setQuestions((prevValue) => {
      let newValue = [
        ...prevValue
      ];
      newValue[questionIndex].image = value;
      return newValue;
    });
  }

  // Update answers text
  function handleAnswerChange(e) {
    const answerIndex = Number(e.currentTarget.dataset.index);
    const value = e.currentTarget.value;

    setQuestions((prevValue) => {
      let newValue = [...prevValue];

      newValue[questionIndex].answers[answerIndex].answerText = value;
      return newValue;
    });
  }

  // Update correct answer
  function handleCorrectChange(e) {
    const answerIndex = Number(e.currentTarget.dataset.index);

    setQuestions((prevValue) => {
      let newValue = [...prevValue];

      // newValue[questionIndex].answers = 
      const newAnswers = newValue[questionIndex].answers
        .map((answer) => {
          answer.isCorrect = false;
        })

      newValue[questionIndex].answers[answerIndex].isCorrect  = true;
      return newValue;
    });
  }

  return (
    <>
      <h2>Question {questionIndex + 1}</h2>
      <TextField
        label={`Question ${questionIndex + 1}`}
        name="question"
        value={question.question}
        onChange={handleQuestionChange}
      />
      <br />
      <TextField
        label={`Image URL`}
        name="image"
        value={question.image}
        onChange={handleImageChange}
      />
      <h3>Options</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Answer</TableCell>
            <TableCell>Is Correct?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            question.answers.map((answer, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      label       = {`Option ${index + 1}`}
                      name        = "answer"
                      value       = {answer.answerText}
                      onChange    = {handleAnswerChange}
                      inputProps  = {{"data-index": index}}
                    />
                  </TableCell>
                  <TableCell>
                    <Radio
                      checked     = {answer.isCorrect ?? false}
                      onChange    = {handleCorrectChange}
                      value       = {index}
                      name        = "correct"
                      inputProps  = {{"data-index": index}}
                    />
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </>
  )
}