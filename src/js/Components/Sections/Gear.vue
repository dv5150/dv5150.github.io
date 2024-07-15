<script setup>
import { MusicalNoteIcon } from '@heroicons/vue/24/outline/index'
</script>

<template>
  <div class="flex flex-row">
    <div class="container w-1/4">
      <img class="w-100 rounded-lg" src="src/img/david-szabados-2.webp" alt="David Szabados">
    </div>
    <div class="container w-3/4 px-16">
      <p class="mont-thin text-emerald-900 text-lg mb-8">
        I have a passion for almost all kinds of guitar music, especially for <span class="mont-bold text-emerald-700">hardcore</span>, <span class="mont-bold text-emerald-700">modern metal</span> and <span class="mont-bold text-emerald-700">punk</span> mostly in Hungarian language alongside with <span class="mont-bold text-emerald-700">celtic rock</span>.
        My favorite bands are <span class="mont-bold text-emerald-700">PETOFI</span>, <span class="mont-bold text-emerald-700">AWS</span>, <span class="mont-bold text-emerald-700">Carson Coma</span> and <span class="mont-bold text-emerald-700">Paddy and the Rats</span>. As a hobby I make guitar covers on <YouTubeButton :url="'https://youtube.com/@dv5150/videos'" class="align-sub p-1"></YouTubeButton>.
      </p>
      <p class="text-emerald-700 text-lg mb-2">
        Guitars<br>
        <span class="mont-thin">Fender Player Telecaster <br>
          <span class="text-sm mont-thin text-gray-500">Elixir NanoWeb custom set | .011 .014 .018 .028 .038 .059</span>
        </span>
        <br>
        <span class="mont-thin">Squier Classic Vibe 50s Telecaster <br>
          <span class="text-sm mont-thin text-gray-500">Elixir NanoWeb custom set | .009 .011 .016 .024 .032 .049</span>
        </span>
      </p>
      <p class="text-emerald-700 text-lg mb-2">
        Audio Interface<br>
        <span class="mont-thin">Focusrite Scarlett Solo 3rd Gen</span>
      </p>
      <p class="text-emerald-700 text-lg mb-2">
        Plugins<br>
        <span class="mont-thin">Neural Amp Modeler, ToneBoosters Equalizer 4, KiloHearts Essentials</span>
      </p>
      <p class="text-emerald-700 text-lg mb-2">
        Software<br>
        <span class="mont-thin">Reaper, Moises, Guitar Pro 8, DaVinci Resolve</span>
      </p>
    </div>
  </div>
</template>