<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab-mini icon="expand_less" color="accent" @click="scrollTop" />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { scroll } from 'quasar'

const { setVerticalScrollPosition } = scroll

function scrollTop(): void {
  setVerticalScrollPosition(window, 0, 250)
}
</script>
