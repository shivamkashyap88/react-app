import { getAllCharacters } from "../../api/characterApi"

export function addCharacters() {
    return (dispatch) => {
        dispatch(addCharactersInit())
        getAllCharacters().then((characters) => {
            dispatch(addCharactersSuccess(characters));
        })
    }
}

export function addToStateFilter(filter) {
    return (dispatch, getState) => {
        let updatedFilter = { ...getState().filters };
        Object.keys(updatedFilter).map((key) => {
            if (key === Object.keys(filter)[0]) {
                if (typeof updatedFilter[key] === 'object') {
                    updatedFilter[key].push(filter[Object.keys(filter)[0]]);
                } else {
                    updatedFilter[key] = filter[Object.keys(filter)[0]]
                }
            }
        });
        dispatch(addtoFilter(updatedFilter));
    }
}

export function removeToStateFilter(filter) {
    return (dispatch, getState) => {
        let updatedFilter = { ...getState().filters };
        Object.keys(getState().filters).map((key) => {
            if (key === Object.keys(filter)[0]) {
                updatedFilter[key] = getState().filters[key].filter((val) => {
                    return val !== filter[key];
                });
            }
        });
        dispatch(addtoFilter(updatedFilter));
    }
}

export const addCharactersInit = () => ({
    type: 'INIT'
})

export const addCharactersSuccess = (payload) => ({
    type: 'SUCCESS',
    payload
})

export const addtoFilter = (payload) => ({
    type: 'ADD_FILTER',
    payload
})

export const removeFromFilter = (payload) => ({
    type: 'REMOVE_FILTER',
    payload
})

export const addCharactersToSorted = (payload) => ({
    type: 'ADD_FILTERED_CHARACTER',
    payload
})