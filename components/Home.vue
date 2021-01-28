<template>
  <v-container>
    <v-row class="my-3">
      <v-col
        order="2"
        order-lg="1"
        order-md="1"
        cols="12"
        sm="12"
        md="7"
        lg="7"
        class="align-self-center"
      >
        <p class="mb-0 text--primary">Hello,</p>
        <h1 class="my-1 display-1 font-weight-bold">
          I'm
          <span class="text--primary">Reagan Ekhameye (Tech Reagan)</span>
        </h1>
        <p>
          A world class full stack software and network engineer; passionate
          about changing the world by solving problems.
        </p>
        <client-only>
          <scrollactive
            active-class="is-active"
            bezier-easing-value=".5,2,.35,1"
          >
            <v-btn
              class="primary black--text scrollactive-item"
              href="#contact"
              nuxt
              small
              >Hire Me</v-btn
            >
          </scrollactive>
        </client-only>
        <section class="mt-15">
          <v-btn
            v-for="social in socialLinks"
            :key="social.link"
            :href="social.link"
            target="_blank"
            class="mr-2"
            fab
            outlined
            x-small
            color="white"
          >
            <v-icon size="12"> {{ social.icon }}</v-icon>
          </v-btn>
        </section>
      </v-col>
      <v-col
        order="1"
        order-lg="2"
        order-md="2"
        cols="12"
        sm="12"
        md="5"
        lg="5"
      >
        <div
          class="rounded-circle overflow-hidden ma-auto"
          style="max-width: 250px"
        >
          <v-img
            src="./img/techreagan-profile-pics.jpg"
            alt="Tech Reagan's Avatar"
            max-height="300"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          link: 'https://github.com/techreagan',
          icon: 'mdi-github',
        },
        {
          link: 'https://youtube.com/techreagan',
          icon: 'mdi-youtube',
        },
        {
          link: 'https://linkedin/in/techreagan',
          icon: 'mdi-linkedin',
        },
        {
          link: 'https://twitter.com/techreagan',
          icon: 'mdi-twitter',
        },
        {
          link: 'https://facebook.com/techreagan',
          icon: 'mdi-facebook',
        },
      ],
    }
  },
}
</script>
