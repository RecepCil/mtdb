const actions = {
    ADD_ITEM: "ADD_ITEM"
}

const addItem = (item) => {
    return {
        type: actions.ADD_ITEM,
        item: item
    };
};

export { addItem };