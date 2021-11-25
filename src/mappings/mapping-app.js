import { addCharacters, addCharactersToSorted, addToStateFilter, removeToStateFilter } from "../store/action"

export const mapStateToProps = (state) =>
({
    characters: state.characters,
    filters: state.filters,
    filteredArray: state.filteredArray
})

export const mapDispatchToProps = (dispatch) => (
    {
        init: () => dispatch(addCharacters()),
        addFilteredCharacter: (val) => dispatch(addCharactersToSorted(val)),
        changeFilter: (value) => {
            dispatch(addToStateFilter(value))
        },
    }
)

export const mapStateToPropsFilter = (state) =>
({
    filters: state.filters
})

export const mapDispatchToPropsFilter = (dispatch) => (
    {
        changeFilter: (value) => {
            dispatch(addToStateFilter(value))
        },
        removeFromFilter: (value) => {
            dispatch(removeToStateFilter(value))
        }

    }
)