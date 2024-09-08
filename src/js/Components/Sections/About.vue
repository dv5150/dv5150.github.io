<script setup>
import { BriefcaseIcon, HomeIcon } from '@heroicons/vue/24/outline/index'
</script>

<template>
<div class="flex flex-row mb-16">
  <div class="container 2xl:w-1/2 pt-4">
    <p class="mont-bold">Szia Uram, gitártab érdekel?</p>
    <p class="mont-bold text-emerald-700 text-4xl mt-2 mb-2">Szabados Dávid</p>
    <p class="flex flex-row mb-3">
      <BriefcaseIcon class="h-6 w-6 text-emerald-700 mr-2" /> <span class="text-emerald-700 mr-4">Laravel Developer</span>
      <HomeIcon class="h-6 w-6 text-emerald-700 mr-2" /> <span class="text-emerald-700">Győr</span>
    </p>
    <p class="mont-thin text-emerald-900 text-lg">
      Szabadidőmben gitártabokat írok, itt lejjebb megtalálod őket.<br>
      Ha kérdésed van, dobj egy üzenetet a <a href="mailto:dv5150music@pm.me" class="text-emerald-700">dv5150music@pm.me</a> címre.<br>
    </p>
    <p class="mont-thin text-emerald-900 text-lg mt-3">
      Ha jobban megörültél az egyik tabomnak, mint indokolt lett volna, hívj meg egy Big Kahuna Burgerre!
    </p>
    <p class="mt-4 bg-emerald-500 rounded-lg px-4 py-2 inline-flex w-full">
      <div class="space-x-4">
        <YouTubeButton :url="'https://youtube.com/@dv5150/videos'"></YouTubeButton>
        <SpotifyButton :url="'https://spoti.fi/3YKolvJ'"></SpotifyButton>
        <LastFmButton :url="'https://www.last.fm/user/DavidFreeman777/library/artists?date_preset=ALL'"></LastFmButton>
      </div>
      <div class="self-center ml-auto">
        <DonateButton :url="'https://www.last.fm/user/DavidFreeman777/library/artists?date_preset=ALL'"></DonateButton>
      </div>
    </p>
  </div>
  <div class="container 2xl:w-1/2 rounded-lg p-2 mont-thin text-emerald-700">

  </div>
</div>
</template>