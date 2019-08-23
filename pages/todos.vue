<template>
    <section>
        <!-- USER DATA/ ACTIONS -->
        <div class="row">
            <div class="col-8">
                <h1 class="subtitle">
                    Bienvenido <b>{{authUser.nombre}}</b>
                </h1>
            </div>
             <div class="col-2">
                <button type="button" class="btn btn-block btn-outline-success mt-3" @click="search">Nuevo +</button>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-outline-secondary btn-block mt-3" @click="logout">LOG OUT</button>
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
            <TodoItem v-for="todo in todos" 
                v-bind:key='todo.id'
                :title='todo.title'
                :content='todo.content'
                :color='todo.color'
                :done='todo.done'/>
        </div>

    </section>  
</template>

<script>

import TodoItem from '~/components/TodoItem.vue'
import {mapGetters} from 'vuex'

export default {
    middleware: 'auth',
    components: {TodoItem},
    data() {
        return {
            authUser : this.$store.getters.getAuthUser,
            termSearch: ''
        }
    },
    methods: {
        logout(){
            alert("Temporary action logout");
        },
        search(){
            alert("Temporary action search: " + this.termSearch);
        }
    },
    computed: {
        ...mapGetters('todos', {
            getTodosByUser: 'getTodosByUser'
        }),
        todos(){
            return this.getTodosByUser(this.authUser.id);
        }
    }
}
</script>