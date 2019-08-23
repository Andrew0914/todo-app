export const state = () => ({
    items: [{
        id: 2,
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

export const actions = {
    editTodo({ state, commit }, todo) {
        const storedTodo = state.items.find(item => item.id == todo.id && item.userId == todo.userId);
        if (storedTodo) {
            commit('UPDATE_TODO', todo);
            return true;
        }
        return false;
    },
    deleteTodo({ state, commit }, todoId) {
        const index = state.items.findIndex(item => item.id == todoId);
        if (index >= 0) {
            commit('DELETE_TODO', index);
            return true;
        }
        return false;
    },
    doneTodo({ state, commit }, todo) {;
        if (state.items.find(item => item.id == todo.id)) {
            commit('DONE_TODO', todo);
            return true;
        } else {
            return false;
        }
    }
};

export const mutations = {
    UPDATE_TODO(state, todo) {
        state.items.find(item => item.id == todo.id && item.userId == todo.userId).title = todo.title;
        state.items.find(item => item.id == todo.id && item.userId == todo.userId).content = todo.content;
        state.items.find(item => item.id == todo.id && item.userId == todo.userId).color = todo.color;
    },
    DELETE_TODO(state, index) {
        state.items.splice(index, 1);
    },
    DONE_TODO(state, todo) {
        state.items.find(item => item.id == todo.id).done = todo.done;
    }
};