import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Question = ({ selectedQuestion, setAnswer }) => {
    return (
        <>
            <View>
                <Text style={styles.question}>{selectedQuestion.id}. {selectedQuestion.question}</Text>
                <TouchableOpacity
                    style={selectedQuestion.ans.ans_a == selectedQuestion.user_ans && styles.selectedAnswer}
                    onPress={() => setAnswer(selectedQuestion.ans.ans_a)}
                >
                    <Text style={styles.answer}>{selectedQuestion.ans.ans_a}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={selectedQuestion.ans.ans_b == selectedQuestion.user_ans && styles.selectedAnswer}
                    onPress={() => setAnswer(selectedQuestion.ans.ans_b)}
                >
                    <Text style={styles.answer}>{selectedQuestion.ans.ans_b}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={selectedQuestion.ans.ans_c == selectedQuestion.user_ans && styles.selectedAnswer}
                    onPress={() => setAnswer(selectedQuestion.ans.ans_c)}
                >
                    <Text style={styles.answer}>{selectedQuestion.ans.ans_c}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={selectedQuestion.ans.ans_d == selectedQuestion.user_ans && styles.selectedAnswer}
                    onPress={() => setAnswer(selectedQuestion.ans.ans_d)}
                >
                    <Text style={styles.answer}>{selectedQuestion.ans.ans_d}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Question;

const styles = StyleSheet.create({
    question: {
        fontSize: 22,
        paddingBottom: 20
    },
    answer: {
        fontSize: 18,
        padding: 5,
    },
    selectedAnswer: {
        fontSize: 18,
        backgroundColor: 'skyblue',
    },
});