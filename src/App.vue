<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>Melissa Audio</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app class="d-flex flex-column">
      <div class="text-center w-100">
        &copy; {{ new Date().getFullYear() }} Melissa Audio
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
// No script needed for this simple layout
</script>

<style>
/* You can add global styles here if needed */
body {
  background-color: #F5F5F5; /* Match the Vuetify background color */
}

a {
  color: inherit;
}
</style>