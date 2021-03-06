<template>
    <div class="q-pa-none">
        <div class="q-py-lg q-px-sm text-h5 text-primary text-center m-title">
            Découvrez le programme de l'événement
        </div>
        <div class="q-px-lg q-pb-md q-mb-lg">
            <q-timeline :layout="layout" color="secondary" style="max-width: 950px; margin: auto">
                <q-timeline-entry heading tag="h4" class="text-primary">
                    Mercredi 9 Novembre
                </q-timeline-entry>
                <q-timeline-entry v-for="event in mer" :key="event.id" :title="event.title" :subtitle="event.subtitle"
                    :side="event.side" :icon="event.icon" class="cursor-default">
                    <div class="m-event">
                        {{ event.content }}
                    </div>
                    <q-btn flat dense label="En savoir plus" color="accent"
                        @click="() => { event.dialog = !event.dialog; expanded = false }">
                        <q-dialog v-model="event.dialog">
                            <q-card style="position: relative">
                                <q-card-section style="min-height: 150px; max-height: 350px; height: 35vh; width: 100%"
                                    class="bg-grey-3 q-pa-none">
                                    <GMapMap :center="event.location" :zoom="15">
                                        <GMapCluster :zoomOnClick="true">
                                            <GMapMarker :position="event.location" clickable />
                                        </GMapCluster>
                                    </GMapMap>
                                </q-card-section>
                                <q-separator />
                                <q-card-section>
                                    <div class="text-subtitle2 text-secondary" style="line-height: 70%">{{
                                        event.subtitle }}</div>
                                    <div class="text-h6">{{ event.title }}</div>
                                    {{ event.content }}
                                </q-card-section>
                                <q-card-actions align="right">
                                    <q-btn flat rounded dense :icon="expanded ? 'expand_less' : 'expand_more'"
                                        label="Voir plus" color="grey" @click="expanded = !expanded" />
                                </q-card-actions>
                                <q-slide-transition>
                                    <div v-show="expanded">
                                        <q-separator />
                                        <q-card-section>
                                            <q-card-section class="q-pa-sm">{{ event.details }}</q-card-section>
                                            <q-card-section class="q-pa-sm">{{ event.address }}</q-card-section>
                                            <q-card-section class="q-pa-sm"><a :href="event.link">{{ event.link }}</a>
                                            </q-card-section>
                                        </q-card-section>
                                    </div>
                                </q-slide-transition>
                            </q-card>
                        </q-dialog>
                    </q-btn>
                </q-timeline-entry>
                <q-timeline-entry heading tag="h4" class="text-primary">
                    Jeudi 10 Novembre
                </q-timeline-entry>
                <q-timeline-entry v-for="event in jeu" :key="event.id" :title="event.title" :subtitle="event.subtitle"
                    :side="event.side" :icon="event.icon" class="cursor-default">
                    <div class="m-event">
                        {{ event.content }}
                    </div>
                    <q-btn flat dense label="En savoir plus" color="accent"
                        @click="() => { event.dialog = !event.dialog; expanded = false }">
                        <q-dialog v-model="event.dialog">
                            <q-card style="position: relative">
                                <q-card-section style="min-height: 150px; max-height: 350px; height: 35vh; width: 100%"
                                    class="bg-grey-3 q-pa-none">
                                    <GMapMap :center="event.location" :zoom="15">
                                        <GMapCluster :zoomOnClick="true">
                                            <GMapMarker :position="event.location" clickable />
                                        </GMapCluster>
                                    </GMapMap>
                                </q-card-section>
                                <q-separator />
                                <q-card-section>
                                    <div class="text-subtitle2 text-secondary" style="line-height: 70%">{{
                                        event.subtitle }}</div>
                                    <div class="text-h6">{{ event.title }}</div>
                                    {{ event.content }}
                                </q-card-section>
                                <q-card-actions align="right">
                                    <q-btn flat rounded dense :icon="expanded ? 'expand_less' : 'expand_more'"
                                        label="Voir plus" color="grey" @click="expanded = !expanded" />
                                </q-card-actions>
                                <q-slide-transition>
                                    <div v-show="expanded">
                                        <q-separator />
                                        <q-card-section>
                                            <q-card-section class="q-pa-sm">{{ event.details }}</q-card-section>
                                            <q-card-section class="q-pa-sm">{{ event.address }}</q-card-section>
                                            <q-card-section class="q-pa-sm"><a :href="event.link">{{ event.link }}</a>
                                            </q-card-section>
                                        </q-card-section>
                                    </div>
                                </q-slide-transition>
                            </q-card>
                        </q-dialog>
                    </q-btn>
                </q-timeline-entry>
            </q-timeline>
        </div>
        <div class="m-program-illustrations">
            <q-img src="~assets/undraw_conversation_re_c26v.svg" width="18%" class="absolute-top-left"
                :style="'max-width: 220px; left: 25%; transform: translateX(-50%); top:' + img1 + 'px'"
                v-if="largeScreen" />
            <q-img src="~assets/undraw_urban_design_kpu8.svg" width="20%" class="absolute-top-left"
                :style="'max-width: 220px; left: 75%; transform: translateX(-50%); top:' + img2 + 'px'"
                v-if="largeScreen" />
            <q-img src="~assets/undraw_awards_fieb.svg" width="20%" class="absolute-top-left"
                :style="'max-width: 220px; left: 75%; transform: translateX(-50%); top:' + img3 + 'px'"
                v-if="largeScreen" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, watch } from 'vue'
import { Screen } from 'quasar'
import { Planning, mercredi, jeudi } from 'src/js/planning'

const mer = ref<Planning>(mercredi)
const jeu = ref<Planning>(jeudi)
const expanded = ref(false)
const height = ref(0)

const layout = computed(() => {
    return Screen.lt.sm ? 'dense' : 'loose'
})

const largeScreen = computed(() => {
    return layout.value === 'loose'
})

const img1 = computed(() => {
    return 3.75*height.value
})

const img2 = computed(() => {
    return 8.75*height.value
})

const img3 = computed(() => {
    return 15.45*height.value
})

watch(height, () => {
    const entries = document.querySelectorAll('.q-timeline__content')
    for (const key in entries) {
        const entry = entries[key] as unknown
        if (entry instanceof HTMLElement && key != '0') {
            entry.style.setProperty('height', height.value + 'px')
        }
    }
})

onMounted(() => {
    const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            height.value = entry.contentRect.height
        })
    })
    const targets = document.querySelectorAll('.q-timeline__entry') as NodeListOf<HTMLElement>
    observer.observe(targets[0])
    targets[targets.length - 1]?.style.setProperty('padding-bottom', '24px', 'important')
})
</script>

<style lang="scss">
.q-timeline__subtitle {
    color: $accent
}

.q-timeline__title {
    color: $primary
}

.vue-map-container {
    height: 100%;
    width: 100%;
}
</style>
