<template>
  <v-app>
    <template v-if="isMobile">
      <mobile-layout />
    </template>
    <template v-else>
      <desktop-layout />
    </template>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import MobileLayout from './layouts/MobileLayout.vue';
import DesktopLayout from './layouts/DesktopLayout.vue';

export default {
  components: {
    MobileLayout,
    DesktopLayout,
  },
  data() {
    return {
      drawer: null,
      mottoDialog: false,
    };
  },
  computed: {
    name() {
      return this.$root.$data.name;
    },
    email() {
      return this.$root.$data.email;
    },
    picture() {
      return this.$root.$data.picture;
    },
    pageTitle() {
      return (this.$route.name && this.$route.name[0].toUpperCase() + this.$route.name.substr(1))
      || 'Routine Notes';
    },
    isMobile() {
      return this.$vuetify.breakpoint.name === 'xs';
    },
  },
  created() {
  },
};
</script>

<style>
  .v-toolbar--fixed {
    z-index: 5;
  }
</style>
