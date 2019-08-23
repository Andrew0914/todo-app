export const state = () => ({
    authUser: null
});

export const getters = {
    getAuthUser(state) {
        return state.authUser;
    }
};

export const actions = {
    userToLog({ commit }, user) {
        commit('SET_USER', user);
    }
};

export const mutations = {
    SET_USER: function(state, user) {
        state.authUser = user;
    }
};