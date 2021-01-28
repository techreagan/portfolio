<template>
  <v-app app>
    <v-app-bar :clipped-left="clipped" elevate-on-scroll dense fixed app>
      <v-container class="py-0 px-0 fill-height">
        <v-img
          lazy-src="./img/tech-reagan-logo.png"
          max-width="50"
          class="mr-3"
          alt="Tech Reagan's Logo"
          title="Tech Reagan's Logo"
          src="./img/tech-reagan-logo.png"
        ></v-img>
        <v-toolbar-title class="hidden-sm-and-down" v-text="title" />
        <v-spacer />
        <client-only>
          <scrollactive
            active-class="is-active"
            bezier-easing-value=".5,2,.35,1"
          >
            <v-btn
              v-for="link in links"
              :key="link"
              text
              :href="`#${link}`"
              class="hidden-sm-and-down scrollactive-item"
              nuxt
            >
              {{ link }}
            </v-btn>
          </scrollactive>
        </client-only>
        <v-btn
          icon
          class="hidden-md-and-up"
          @click.stop="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      class="background"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <client-only>
          <scrollactive
            active-class="is-active"
            bezier-easing-value=".5,2,.35,1"
          >
            <v-list-item
              v-for="link in links"
              :key="link"
              active-class="is-active"
              exact-active-class="is-active"
              exact
              link
              :href="`#${link}`"
              class="scrollactive-item"
              nuxt
              @click="rightDrawer = !rightDrawer"
            >
              <v-list-item-title class="text-capitalize">{{
                link
              }}</v-list-item-title>
            </v-list-item>
          </scrollactive>
        </client-only>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span class="text-caption"
        >Copyright &copy; {{ new Date().getFullYear() }} Tech Reagan</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      links: ['home', 'projects', 'skills', 'youtube', 'about', 'contact'],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tech Reagan',
    }
  },
}
</script>

<style>
.theme--dark.v-application .text--primary {
  color: #f3bc17 !important;
  /* color: #f0d13b !important; */
}

.scrollactive-item.v-list-item.v-list-item--link.theme--dark.is-active {
  color: #f3bc17 !important;
  /* color: #f0d13b !important; */
}
</style>
