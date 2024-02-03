import { createApp } from 'vue'

import App from './App.vue'

import Navbar from './Components/Navbar.vue'

const app = createApp(App)

app.component('Navbar', Navbar)

app.mount('#app')
