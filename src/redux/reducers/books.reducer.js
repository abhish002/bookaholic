import { LOAD_LISTS, TOGGLE_DETAILS } from '../../constants/action-types.constants';

const INITIAL_STATE = {
    lists: [],
    hidden: true
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_LISTS:
            return {
                ...state,
                lists: action.payload
            }
        case TOGGLE_DETAILS:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;
    }
}

export default booksReducer;

