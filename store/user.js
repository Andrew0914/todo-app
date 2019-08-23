export const state = () => ({
    items: [{
            id: 1,
            nombre: "Andrew Gonzalez",
            username: "andrewG09",
            password: "bunsan0"
        },
        {
            id: 2,
            nombre: "Bunsan bunsan",
            username: "bunsan100",
            password: "bunsan2"
        },
        {
            id: 3,
            nombre: "Petter peter",
            username: "peter90",
            password: "bunsan1"
        }

    ]
});

export const getters = {
    getUserByCredentials(state) {
        return function(username, password) {
            return state.items.find(user => user.username === username && user.password === password);
        };
    }
};