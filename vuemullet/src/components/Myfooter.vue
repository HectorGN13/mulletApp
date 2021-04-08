<template>
  <v-footer dark absolute>
    <v-card flat tile width="100%" class="flex" style="background-color: #272727">
      <v-card-text class="py-2 white--text text-center">
        MulletApp ©
        {{ new Date().getFullYear() }} —
        <strong>Desarrollado por HectorGN13 </strong>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "my_footer",
  data: () => ({
    icon: 'fab fa-github',
  }),
}
</script>
