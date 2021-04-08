<template>
  <div class="text-center">
    <v-btn
        class="ma-2 special--text"
        :loading="loading"
        :disabled="loading"
        color="#332D2E"
        backgroundColor="#FAF6E6"
        @click="loader = 'loading'"
        x-large
    >
      LOG IN
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'button_login',
  data () {
    return {
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style lang="css" scoped>
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.v-btn.v-size--x-large {
  font-size: 3rem;
}
</style>