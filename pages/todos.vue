<template>
    <section>
        <!-- USER DATA/ ACTIONS -->
        <div class="row">
            <div class="col-10">
                <h1 class="subtitle">
                    Bienvenido <b>{{authUser.nombre}}</b>
                </h1>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-outline-secondary btn-block mt-3 float-right" @click="logout">LOG OUT</button>
            </div>
        </div>

        <!-- SEARCH TODOS -->
        <br>
        <div class="row">
            <div class="col-10">
                <h1 class="subtitle">
                    <input type="text" class="form-control" placeholder="busqueda" v-model="termSearch">
                </h1>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-block btn-secondary" @click="search">BUSCAR</button>
            </div>
        </div>

        <hr class="separator">

        <!-- TODOS -->
        <div class="card-deck mt-4">
            <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    Todo Important!
                    <input type="checkbox" class="float-right">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Danger TODO title</h5>
                    <p class="card-text">This is a temporary static todo</p>
                </div>
            </div>
        </div>

    </section>  
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            authUser : this.$store.getters.getAuthUser,
            termSearch: ''
        }
    },
    methods:{
        logout(){
            alert("Temporary action logout");
        },
        search(){
            alert("Temporary action search: " + this.termSearch);
        }
    }
}
</script>