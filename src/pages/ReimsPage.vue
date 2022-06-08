<template>
    <q-banner class="bg-primary">
        <template v-slot:avatar>
            <q-btn icon="arrow_back" round color="white" flat to="/" />
        </template>
        <div class="text-white text-h5 q-px-lg">Reims, le week-end</div>
    </q-banner>
    <div style="position: relative; height: 100vh">
        <under-construction />
    </div>
</template>

<script lang="ts" setup>
import UnderConstruction from 'src/components/UnderConstruction.vue';
</script>
