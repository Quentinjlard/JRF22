<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab-mini icon="expand_less" color="accent" to="#" />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>
