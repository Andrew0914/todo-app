<template>
  <div class="my-container">
    <div>
      <logo />
      <h1 class="title">
        todo-app
      </h1>
      <h2 class="subtitle">
        A TODO app power bye VUEjs,Vuex &amp; Nuxt js
      </h2>
      <div class="links">
        <nuxt-link to='/login' class="button--green">
          LOG IN
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
