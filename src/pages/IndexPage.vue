<template>
  <q-page class="fit absolute-center">
    <div class="full-width m-content_container">
      <q-tabs
        v-model="slide"
        class="text-grey bg-primary"
        active-color="secondary"
        indicator-color="secondary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="index" label="Accueil" />
        <q-tab name="program" label="Programme" />
        <q-img
          src="icons/favicon-32x32.png"
          height="32px"
          width="32px"
          class="q-mx-md"
        />
        <q-tab name="pay" label="S'inscrire" />
        <q-tab name="pictures" label="Photos" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="slide" animated :transition-duration="300" swipeable infinite style="min-height: 100vh">
        <q-tab-panel name="index" class="m-content_slide">
          <m-index />
        </q-tab-panel>
        <q-tab-panel name="program" class="m-content_slide">
          <m-pay />
        </q-tab-panel>
        <q-tab-panel name="pay" class="m-content_slide">
          <m-program />
        </q-tab-panel>
        <q-tab-panel name="pictures" class="m-content_slide">
          <m-pictures />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MIndex from 'src/components/MIndex.vue'
import MPay from 'src/components/MPay.vue'
import MPictures from 'src/components/MPictures.vue'
import MProgram from 'src/components/MProgram.vue'

const slide = ref('index')
</script>
