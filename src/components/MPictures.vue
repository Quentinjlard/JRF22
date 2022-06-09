<template>
    <div class="q-pa-none">
        <div class="q-py-lg q-px-sm text-h5 text-primary text-center m-title">
            Les Journées en quelques clichés...
        </div>
        <div class="text-subtitle1 text-primary text-center">
            Retrouver toutes les photos de l'événement ici !
        </div>
        <div class="q-mt-lg flex" id="m-images" style="align-items: flex-start;" v-if="imgCount">
            <q-img v-for="i in imgList" :key="i" width="100px" height="100px" :src="'pictures/jrf22-' + i + '.jpg'"
                fit="cover" loading="lazy" />
        </div>
        <div class="q-mt-lg flex" id="m-images" style="align-items: center;" v-else>
            <div class="bg-negative q-px-md rounded-borders shadow-1 text-warning">
                <q-icon name="support_agent" class="q-pa-sm" size="1.5em" />
                <span class="q-pa-sm">Aucune image disponible</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { api } from 'boot/axios'

const imgCount = ref(0)
const imgList = computed(() => {
    return toList(imgCount.value)
})

function toList(len: number): number[] {
    let arr = []
    for(var i=0; i<len; i++) {
        arr.push(i)
    }
    return arr
}

onMounted(() => {
    api.get('http://localhost:8080/pictures/count.json')
        .then((response) => {
            imgCount.value = response.data.count
        })
})
</script>

<style>
#m-images {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    gap: 5px;
}
</style>
