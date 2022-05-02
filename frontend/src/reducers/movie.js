const actions = {
    ADD_ITEM: "ADD_ITEM"
}

const initialState = {items:[]};

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.ADD_ITEM:
            return Object.assign({}, action.item)
            
        default:
            return state;
    }
}

export default movieReducer;