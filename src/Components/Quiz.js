import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar, ScrollView, Text, View, Button } from 'react-native';
import Question from './Question/Question';
import { quiz_questions } from '../utils/quiz-questions';

const Quiz = ({ navigation }) => {

    const [questions, setQuestions] = useState(quiz_questions);
    const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

    const setAnswer = (userAns) => {
        const ansComplete = questions.filter(question => {
            if (question.id == selectedQuestion.id) {
                return question.user_ans = userAns;
            }
            return question;
        });
        setQuestions(ansComplete)
    }

    const changeQuestion = (nextQuestionId) => {
        questions.filter(question => {
            if (question.id == nextQuestionId) {
                setSelectedQuestion(question);
            }
        });
    }

    const submitAns = () => {
        let correctAns = 0;
        let wrongAns = 0;
        const resetQuestions = questions.map(question => {
            question.correct_ans == question.user_ans ? correctAns++ : wrongAns++
            question.user_ans = null;
            return question;
        });
        setQuestions(resetQuestions);
        changeQuestion(1);
        const resultData = { correctAns, wrongAns }
        navigation.navigate('Result', resultData);
    }

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Question selectedQuestion={selectedQuestion} setAnswer={setAnswer} />
                    <View style={styles.questionBtn}>
                        <Button title="Previous" disabled={selectedQuestion.id <= 1 ? true : false} onPress={() => changeQuestion(selectedQuestion.id - 1)} />
                        <Button title="Next" disabled={Object.keys(questions).length > selectedQuestion.id ? false : true} onPress={() => changeQuestion(selectedQuestion.id + 1)} style={{ marginLeft: 5 }} />
                    </View>
                    {
                        Object.keys(questions).length == selectedQuestion.id && <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Button title="Submit" onPress={submitAns} />
                        </View>
                    }
                </View>
            </ScrollView>
        </>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    questionBtn: {
        width: Dimensions.get("window").width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginBottom: 20,
        marginTop: 20,
    }
});