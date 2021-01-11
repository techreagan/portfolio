<template>
  <div id="about" class="py-8">
    <v-container>
      <v-row class="my-3">
        <v-col cols="12" sm="12" md="5" lg="5">
          <div class="text-left">
            <v-img src="/img/2.jpg" aspect-ratio="1.3" max-height="300"></v-img>
          </div>
        </v-col>
        <v-col
          offset-md="1"
          offset-lg="1"
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class=""
        >
          <h2 class="text--primary">ABOUT</h2>
          <p class="mb text--primary">Software & Network Engineer</p>

          <p>
            I'm Reagan Ekhamaye a.k.a Tech Reagan, A full stack developer but
            specialize in backend development with three(3) years of experience
            in the field. I'm a problem solver and can deliver under pressure.
          </p>
          <p>
            I hold two degrees, Economics and Communication & Information
            Technology (CIT). I'm also a Cisco Certified Network Associate
            (CCNA) A Network Engineer.
          </p>
          <p>
            I'm passionate about programming and teaching/helping people write
            their first line of code.
          </p>
          <v-btn class="primary black--text" small>Download CV</v-btn>
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
