import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import characterReducer from "./reducer/character-reducer";

export const initialState = {
    characters: [],
    filters: {
        species: [],
        gender: [],
        origin: []
    }
};

export const store = createStore(characterReducer, applyMiddleware(thunk));