<template>
  <q-page class="fit absolute-center">
    <div class="full-width m-content_container">
      <q-tabs
        v-model="slide"
        class="text-info bg-primary"
        active-color="secondary"
        indicator-color="secondary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="index" label="Accueil" v-if="Screen.width > 500" />
        <q-tab name="index" icon="home" v-else />
        <q-tab name="program" label="Programme" v-if="Screen.width > 500" />
        <q-tab name="program" icon="insert_chart" v-else />
        <q-img
          src="icons/favicon-32x32.png"
          height="32px"
          width="32px"
          class="q-mx-md"
        />
        <q-tab name="pay" label="S'inscrire" v-if="Screen.width > 500" />
        <q-tab name="pay" icon="credit_card" v-else />
        <q-tab name="pictures" label="Photos" v-if="Screen.width > 500" />
        <q-tab name="pictures" icon="photo_library" v-else />
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
    <div class="full-width bg-primary text-info q-pa-lg m-mentions_container">
      <div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6">Mentions légales</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6">Liens</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6">Contacts</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Screen } from 'quasar'
import MIndex from 'src/components/MIndex.vue'
import MPay from 'src/components/MPay.vue'
import MPictures from 'src/components/MPictures.vue'
import MProgram from 'src/components/MProgram.vue'

const slide = ref('index')
</script>

<style>
.m-mentions_container > div {
  position: relative;
  display: flex;
  align-items: center;
}

.m-mentions_section {
  margin: 0 0 0 1.5rem;
}

@media screen and (max-width: 500px) {
  .m-mentions_container > div {
    flex-direction: column;
  }

  .m-mentions_section {
    margin: 1.5rem 0 0 0;
  }
}
</style>
