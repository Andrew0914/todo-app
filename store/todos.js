export const state = () => ({
    items: [{
            id: 1,
            userId: 1,
            title: "Andrew Gonzalez",
            content: "Mi priner todo estatico",
            color: "primary",
            done: true
        },
        {
            id: 2,
            userId: 1,
            title: "Andrew Gonzalez",
            content: "Mi priner todo estatico",
            color: "primary",
            done: true
        },
        {
            id: 4,
            userId: 1,
            title: "Andrew Gonzalez",
            content: "Mi priner todo estatico",
            color: "primary",
            done: true
        },
        {
            id: 3,
            userId: 1,
            title: "Andrew Gonzalez",
            content: "Mi priner todo estatico",
            color: "primary",
            done: true
        }
    ]
});

export const getters = {
    getTodosByUser(state) {
        return function(userId) {
            return state.items.filter(item => item.userId == userId);
        };
    }
};

export const actions = {
    editTodo({ state, commit }, todo) {
        const storedTodo = state.items.find(item => item.id == todo.id && item.userId == todo.userId);
        if (storedTodo) {
            commit('UPDATE_TODO', todo);
            return true;
        }
        return false;
    }
};

export const mutations = {
    UPDATE_TODO(state, todo) {
        state.items.find(item => item.id == todo.id && item.userId == todo.userId).title = todo.title;
        state.items.find(item => item.id == todo.id && item.userId == todo.userId).content = todo.content;
        state.items.find(item => item.id == todo.id && item.userId == todo.userId).color = todo.color;
    }
};