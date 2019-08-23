export const state = () => ({
    items: [{
        id: 1,
        userId: 1,
        title: "Andrew Gonzalez",
        content: "Mi priner todo estatico",
        color: "primary",
        done: true
    }]
});

export const getters = {
    getTodosByUser(state) {
        return function(userId) {
            return state.items.filter(item => item.userId == userId);
        };
    }
};