<script setup>
import { BriefcaseIcon, HomeIcon } from '@heroicons/vue/24/outline/index'
</script>

<template>
<div class="flex flex-row mb-16">
  <div class="container w-1/2 pt-4">
    <p class="mont-bold">Hello Visitor,</p>
    <p class="mont-bold text-emerald-700 text-4xl mt-2 mb-4">I'm David Szabados</p>
    <p class="flex flex-row mb-3"><BriefcaseIcon class="h-6 w-6 text-emerald-700 mr-2" /> <span class="text-emerald-700 mr-4">Laravel Developer</span><HomeIcon class="h-6 w-6 text-emerald-700 mr-2" /> <span class="text-emerald-700">Győr, Hungary</span></p>
    <p class="mont-thin text-emerald-900 text-lg">Software engineer, amateur musician, rabbit and video game enthusiast, who is building websites since 2016 and breaking guitar strings since 2009.</p>
    <p class="text-emerald-700 my-3">I love working with <span class="mont-bold">Laravel</span>, <span class="mont-bold">Docker</span>, <span class="mont-bold">Vue</span>, <span class="mont-bold">Filament</span> and <span class="mont-bold">Tailwind</span>.</p>
    <p class="mont-thin text-emerald-900 text-lg">Other fancy buzzwords I'm more or less familiar with: <br> REST API, Redis, ElasticSearch, MySQL, Git, Nginx, Pinia, Bootstrap</p>
    <p class="space-x-4 mt-4">
      <GitHubButton :url="'https://github.com/dv5150'"></GitHubButton>
      <YouTubeButton :url="'https://youtube.com/@dv5150/videos'"></YouTubeButton>
      <SpotifyButton :url="'https://spoti.fi/3YKolvJ'"></SpotifyButton>
      <LastFmButton :url="'https://www.last.fm/user/DavidFreeman777/library/artists?date_preset=ALL'"></LastFmButton>
      <FacebookButton :url="'https://www.facebook.com/dv5150fb/'"></FacebookButton>
    </p>
  </div>
  <div class="container w-1/2">
    <img class="mx-auto rounded-lg w-1/2" src="src/img/david-szabados.webp" alt="David Szabados">
  </div>
</div>
</template>