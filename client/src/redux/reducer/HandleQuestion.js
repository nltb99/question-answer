import {
    ADDQUESTION,
    DELETEQUESTION,
    GETQUESTION,
    COUNTQUESTION,
    ISLOADING,
    ISDARKMODE,
} from '../actions/actions.js';

const initialState = {
    questions: [],
    comments: [],
    counting: null,
    isLoading: false,
    isDarkmode: false,
};

export const HandleQuestion = (state = initialState, action) => {
    switch (action.type) {
        case GETQUESTION:
            return {
                ...state,
                questions: action.payload,
                isLoading: false,
            };
        case ADDQUESTION:
            return {
                ...state,
                questions: [action.payload, ...state.questions],
            };
        case DELETEQUESTION:
            return {
                ...state,
                questions: state.questions.filter((cell) => cell._id !== action.payload.id),
                comments: state.comments.filter((cell) => cell.title !== action.payload.title),
            };
        case COUNTQUESTION:
            return {
                ...state,
                counting: action.payload,
            };
        case ISLOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ISDARKMODE:
            return {
                ...state,
                isDarkmode: !state.isDarkmode,
            };
        default:
            return state;
    }
};

export default HandleQuestion;
