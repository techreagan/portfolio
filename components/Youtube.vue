<template>
  <div id="youtube" class="py-8 secondary">
    <h2 class="text-center text--primary">YOUTUBE</h2>
    <p class="text-center">
      Latest YouTube Tutorials, I create YouTube tutorials to give back to the
      community
    </p>
    <v-container>
      <v-row>
        <v-col
          v-for="(skill, key) in skills"
          :key="key"
          class="d-flex child-flex"
          cols="12"
          xs="12"
          sm="6"
          md="4"
        >
          <v-card class="secondary text-center">
            <v-icon class="py-5">{{ skill.icon }}</v-icon>
            <p class="text-center text--primary mb-0 font-weight-medium">
              {{ skill.title }}
            </p>
            <v-card-text class="pt-0">
              {{ skill.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: 'mdi-desktop-mac-dashboard',
          title: 'Frontend Development',
          description:
            'HTML, CSS, JavaScript, SASS, Vue JS, Nuxt JS, Vuetify JS',
        },
        {
          icon: 'mdi-database',
          title: 'Backend Development',
          description: 'Node JS, PHP, MongoDB, MySQL, PostgreSQL, SQLite',
        },
        {
          icon: 'mdi-server',
          title: 'Dev OPS',
          description: 'Docker',
        },
      ],
    }
  },
}
</script>
