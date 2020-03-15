import { LOAD_LISTS } from '../../constants/action-types.constants';

const INITIAL_STATE = {
    lists: [],
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_LISTS:
            return {
                ...state,
                lists: action.payload,
            }

        default:
            return state;
    }
}

export default booksReducer;

