<template>
    <div class="my-container">
        <h1 class="title">TODO APP</h1>
        <div class="container sm-container mt-4">
                <input type="text" class="form-control" placeholder="User name" v-model="username">
                <br>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
                <br>
                <button type="button" class="btn btn-outline-info mb-4" @click="login">LOG IN</button>
                <div class="alert alert-warning" role="alert" v-if="failLogin">
                    Tu usuario o contraseña son incorrectos <b>:(</b> 
                    <p>Utiliza <b>bunsan100 / bunsan2</b> </p> 
                </div>
        </div>
    </div>
</template>

<script>
    
    import {mapGetters, mapActions} from 'vuex';

    export default {
        head(){
            return {
                title: 'Todo app Login',
            };
        },
        data(){
            return {
                username: '',
                password: '',
                failLogin: false
            };
        },
        computed: {
            ...mapGetters('user', {
                loggedUser: "getUserByCredentials"
            })
        },
        methods: {
            ...mapActions({
               userToLog: 'userToLog' 
            }),
            login(){
                const user = this.loggedUser( this.username, this.password );
                if(!user){
                    this.failLogin = true;
                }else{
                    this.failLogin = false;
                    this.userToLog(user);
                    this.$router.push('todos');
                }
            }
        }
    }
</script>