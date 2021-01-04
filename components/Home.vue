<template>
  <v-row>
    <v-col
      order="2"
      order-lg="1"
      order-md="1"
      cols="12"
      sm="12"
      md="6"
      lg="6"
      class="align-self-center"
    >
      <p class="mb-0 text--primary">Hello</p>
      <h1 class="my-1">
        I'm
        <span class="text--primary">Reagan Ekhameye (Tech Reagan)</span>
      </h1>
      <p>
        A world class full stack software and network engineer, passionate about
        changing the world by solving small and large scale problems.<br />
        I specialize in backend development
      </p>
      <v-btn class="primary black--text" small>Hire Me</v-btn>
      <section class="mt-15">
        <v-btn class="mr-2" fab outlined x-small color="white">
          <v-icon size="10"> mdi-github </v-icon>
        </v-btn>
        <v-btn class="mr-2" fab outlined x-small color="white">
          <v-icon size="10"> mdi-youtube </v-icon>
        </v-btn>
        <v-btn class="mr-2" fab outlined x-small color="white">
          <v-icon size="10"> mdi-linkedin </v-icon>
        </v-btn>
        <v-btn class="mr-2" fab outlined x-small color="white">
          <v-icon size="10"> mdi-twitter </v-icon>
        </v-btn>

        <v-btn class="" fab outlined x-small color="white">
          <v-icon size="10"> mdi-facebook </v-icon>
        </v-btn>
      </section>
    </v-col>
    <v-col order="1" order-lg="2" order-md="2" cols="12" sm="12" md="6" lg="6">
      <div class="">
        <v-img
          :src="require('~/assets/img/1.jpg')"
          aspect-ratio="1.3"
          contain
          max-height="300"
        ></v-img>
      </div>
    </v-col>
  </v-row>
</template>
