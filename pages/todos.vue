<template>
    <h1 class="subtitle">
        Bienvenido {{authUser.nombre}}
    </h1>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            authUser : this.$store.getters.getAuthUser
        }
    }
}
</script>