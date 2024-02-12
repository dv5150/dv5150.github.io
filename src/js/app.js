import { createApp } from 'vue'

import App from './App.vue'

import Navbar from './Components/Navbar.vue'
import NavMenu from './Components/NavMenu.vue'
import NavLink from './Components/NavLink.vue'

import GitHubButton from './Components/Icons/GitHubButton.vue'
import YouTubeButton from './Components/Icons/YouTubeButton.vue'
import SpotifyButton from './Components/Icons/SpotifyButton.vue'
import LastFmButton from './Components/Icons/LastFmButton.vue'
import FacebookButton from './Components/Icons/FacebookButton.vue'

import About from './Components/Sections/About.vue'
import Gear from './Components/Sections/Gear.vue'

import '../../dist/build.css'

const app = createApp(App)

app.component('Navbar', Navbar)
app.component('NavMenu', NavMenu)
app.component('NavLink', NavLink)

app.component('GitHubButton', GitHubButton)
app.component('YouTubeButton', YouTubeButton)
app.component('SpotifyButton', SpotifyButton)
app.component('LastFmButton', LastFmButton)
app.component('FacebookButton', FacebookButton)

app.component('About', About)
app.component('Gear', Gear)

app.mount('#app')
