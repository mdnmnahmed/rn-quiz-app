import { quiz_questions } from '../../utils/quiz-questions';

const initialState = {
    questions: quiz_questions,
    selectedQuestion: {}
}

const questionReducer = (state = initialState, { type, payload }) => {
    return state;
}

export default questionReducer;