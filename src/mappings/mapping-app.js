import { addCharacters, addToStateFilter, removeToStateFilter } from "../store/action"

export const mapStateToProps = (state) =>
({
    characters: state.characters,
    filters: state.filters
})

export const mapDispatchToProps = (dispatch) => (
    {
        init: () => dispatch(addCharacters())
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