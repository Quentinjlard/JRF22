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
                fit="cover" loading="lazy" class="cursor-pointer rounded-borders" style="--caption: none"
                @mouseenter="onEnter($event)" @mouseleave="onLeave($event)" @click="onClick($event)">
                <div class="absolute-full text-subtitle2 flex flex-center text-center" style="display: var(--caption)"
                    :data-src="'pictures/jrf22-' + i + '.jpg'">
                    Plein écran
                </div>
            </q-img>
        </div>
        <div class="q-mt-lg flex" id="m-images" style="align-items: center;" v-else>
            <div class="bg-negative q-px-md rounded-borders shadow-1 text-warning">
                <q-icon name="support_agent" class="q-pa-sm" size="1.5em" />
                <span class="q-pa-sm">Aucune image disponible</span>
            </div>
        </div>
        <div ref="view" class="absolute-center fit hidden flex flex-center" style="background: rgba(40, 40, 40, .75)">
            <q-img src="picture/jrf22-0.jpg" fit="contain" style="max-width: 900px"
                :class="Screen.width < 800 ? (Screen.width < 600 ? (Screen.width < 400 ? '' : 'q-mx-xs') : 'q-mx-md') : 'q-mx-xl'">
                <div class="absolute-top full-width" align="right">
                    <span class="text-subtitle2 q-px-lg">JRF2022</span>
                    <q-btn color="white" icon="more_horiz" size="sm" round flat>
                        <q-menu auto-close>
                            <q-list style="min-width: 120px">
                                <q-item clickable>
                                    <q-item-section style="flex-direction: row; align-items: center; gap: 5px"
                                        @click="onOpen">
                                        <span>Ouvrir</span>
                                        <q-icon name="call_made" />
                                    </q-item-section>
                                </q-item>
                                <q-item clickable @click="onDownload">
                                    <q-item-section style="flex-direction: row; align-items: center; gap: 5px">
                                        <span>Télécharger</span>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                        <q-tooltip class="bg-primary text-info">Plus</q-tooltip>
                    </q-btn>
                    <q-btn color="white" icon="download" size="sm" round flat @click="onDownload">
                        <q-tooltip class="bg-primary text-info">Télécharger</q-tooltip>
                    </q-btn>
                    <q-btn color="white" icon="close" size="sm" round flat @click="onClose">
                        <q-tooltip class="bg-primary text-info">Fermer</q-tooltip>
                    </q-btn>
                </div>
            </q-img>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { Screen } from 'quasar'
import { api } from 'boot/axios'

const view = ref()
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

function onEnter(event: unknown): void {
    if(event instanceof MouseEvent) {
        const target = event.target as HTMLElement
        target.style.setProperty('--caption', 'flex')
    }
}

function onLeave(event: unknown): void {
    if (event instanceof MouseEvent) {
        const target = event.target as HTMLElement
        target.style.setProperty('--caption', 'none')
    }
}

function onClick(event: unknown): void {
    if(event instanceof MouseEvent) {
        const target = event.target as HTMLElement
        const src = target.dataset.src
        const v = view.value as HTMLElement
        const img = v.querySelector('img')
        if(img) img.src = src as string
        v.classList.remove('hidden')
    }
}

function onClose(): void {
    const v = view.value as HTMLElement
    v.classList.add('hidden')
}

function onDownload(): void {
    console.log('on download')
}

function onOpen(): void {
    console.log('on open')
}

onMounted(() => {
    api.get('https://jrf22.mirage-cmi-reims.fr/pictures/count.json')
        .then((response) => {
            imgCount.value = response.data.count
        })
})
</script>

<style>
#m-images {
    --m-gap: 8px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: var(--m-gap);
    gap: var(--m-gap);
}
</style>
