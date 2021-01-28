import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Vue.use(AOS.init())

const aosPlugin = {
  install: () => {
    AOS.init({})
  },
}

if (process.client) {
  Vue.use(aosPlugin)
}
