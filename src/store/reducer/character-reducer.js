import { initialState } from "..";

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT':
            return initialState;
        case 'SUCCESS':
            return { ...state, characters: action.payload };
        case 'ADD_FILTER':
            return { ...state, filters: action.payload };
        case 'REMOVE_FILTER':
            return { ...state, filters: action.payload };
        case 'ADD_FILTERED_CHARACTER':
            return { ...state, filteredArray: action.payload };
        default:
            return state;
    }
}