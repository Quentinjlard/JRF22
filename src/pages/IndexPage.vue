<template>
  <q-page class="fit absolute-center">
    <div class="full-width m-content_container">
      <q-tabs v-model="slide" class="text-info bg-primary" active-color="secondary" indicator-color="secondary"
        align="justify" narrow-indicator>
        <q-tab name="index" label="Accueil" v-if="Screen.width > 500" />
        <q-tab name="index" icon="home" v-else />
        <q-tab name="program" label="Programme" v-if="Screen.width > 500" />
        <q-tab name="program" icon="menu_book" v-else />
        <q-img src="icons/favicon-32x32.png" height="36px" width="36px" class="q-mx-md bg-white"
          :img-style="{ width: '28px', height: '28px', position: 'relative', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' }"
          style="border-radius: 50%" />
        <q-tab name="pay" label="S'inscrire" v-if="Screen.width > 500" />
        <q-tab name="pay" icon="credit_card" v-else />
        <q-tab name="pictures" label="Photos" v-if="Screen.width > 500" />
        <q-tab name="pictures" icon="photo_library" v-else />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="slide" animated :transition-duration="300" infinite style="min-height: 100vh">
        <q-tab-panel name="index" class="q-pa-none m-content_slide">
          <m-index />
        </q-tab-panel>
        <q-tab-panel name="program" class="q-pa-none m-content_slide">
          <m-program />
        </q-tab-panel>
        <q-tab-panel name="pay" class="q-pa-none m-content_slide">
          <m-pay />
        </q-tab-panel>
        <q-tab-panel name="pictures" class="q-pa-none m-content_slide">
          <m-pictures />
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div class="full-width bg-primary text-info q-pa-lg m-mentions_container">
      <div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6">Mentions légales</div>
          <div>Ce site est le fruit du travail de l'association MIRAGE, CMI Reims, à l'occasion des Journées du Réseau
            FIGURE 2022. Merci de respecter ce travail.</div>
        </div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6">Nos liens</div>
          <div>
            <ul id="m-links">
              <li v-for="link in links" :key="link.id" class="cursor-pointer m-link">
                <a :href="link.link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6 q-pb-sm" style="line-height: 100%">Contact CMI Alumni</div>
          <div>
            <div class="m-contacts">
              <b>Gaëlle BEZAIN: </b>Présidente<br>
            </div>
            <div class="m-contacts">
              <b>Mail: </b><a href="mailto:bureau@cmi-alumni.fr" class="cursor-pointer">bureau@cmi-alumni.fr</a>
            </div>
            <div class="m-contacts">
              <b>Tél.: </b><a href="tel:0613898873" class="cursor-pointer">06.13.89.88.73</a>
            </div>
          </div>
        </div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6 q-pb-sm" style="line-height: 100%">Contact MIRAGE</div>
          <div>
            <div class="m-contacts">
              <b>Quentin JUILLIARD: </b>Président<br>
            </div>
            <div class="m-contacts">
              <b>Mail: </b><a href="mailto:presidence@mirage-cmi-reims.fr"
                class="cursor-pointer">presidence@mirage-cmi-reims.fr</a>
            </div>
            <div class="m-contacts">
              <b>Tél.: </b><a href="tel:0767510802" class="cursor-pointer">07.67.51.08.02</a>
            </div>
          </div>
        </div>
        <div class="q-px-sm m-mentions_section">
          <div class="text-h6 q-pb-sm" style="line-height: 100%">Contact FIGURE</div>
          <div>
            <div class="m-contacts">
              <b>Nathalie GAVEAU: </b>Trésorière<br>
            </div>
            <div class="m-contacts">
              <b>Mail: </b><a href="mailto:nathalie.gaveau@univ-reims.fr"
                class="cursor-pointer">nathalie.gaveau@univ-reims.fr</a>
            </div>
            <!-- <div class="m-contacts">
              <b>Tél.: </b><a href="" class="cursor-pointer"></a>
            </div> -->
          </div>
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

const links = ref([
  {
    id: 1,
    link: 'https://reseau-figure.fr/',
    label: 'Réseau FIGURE'
  },
  {
    id: 2,
    link: 'https://www.onisep.fr/Choisir-mes-etudes/Apres-le-bac/Organisation-des-etudes-superieures/Les-CMI-cursus-master-en-ingenierie-Figure',
    label: 'Cursus Master en Ingénierie'
  },
  {
    id: 3,
    link: 'https://cmi-alumni.fr/',
    label: 'Alumni'
  },
  {
    id: 4,
    link: 'https://mirage-cmi-reims.fr/',
    label: 'MIRAGE - CMI Reims'
  },
])
</script>

<style lang="scss">
.m-mentions_container > div {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.m-mentions_section {
  margin: 1.5rem 0 0 0;
  width: 200px;
}

#m-links,
.m-link {
  list-style: none;
  padding: 4px 0;
  margin: 0;
  line-height: 100%;
}

.m-link a,
.m-contacts a {
  text-decoration: none;
  color: inherit;
}

.m-link:hover,
.m-contacts a:hover {
  color: $secondary;
}

@media screen and (min-width: 560px) {
  .m-mentions_container > div {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
  }
}

@media screen and (min-width: 700px) {
  .m-mentions_container > div {
    flex-wrap: nowrap;
    justify-content: center;
  }

  .m-mentions_section {
    margin: 0;
  }
}
</style>
