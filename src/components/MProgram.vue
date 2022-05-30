<template>
    <div class="q-pa-none">
        <div class="q-py-lg q-px-sm text-h5 text-primary text-center m-title">
            Découvrez le programme de l'événement
        </div>
        <div class="q-px-lg q-pb-md">
            <q-timeline :layout="layout" color="secondary" style="max-width: 950px; margin: auto">
                <q-timeline-entry heading tag="h4" class="text-primary">
                    Mercredi 9 Novembre
                </q-timeline-entry>
                <q-timeline-entry v-for="event in mer" :key="event.id" :title="event.title" :subtitle="event.subtitle" :side="event.side" :icon="event.icon" class="cursor-default">
                    <div class="m-event">
                        {{ event.content }}
                    </div>
                    <q-btn flat dense label="En savoir plus" color="accent" @click="() => { event.dialog = !event.dialog; expanded = false }">
                        <q-dialog v-model="event.dialog">
                            <q-card style="position: relative">
                                <q-card-actions class="absolute-top-right" style="z-index: 5">
                                    <q-btn v-close-popup round flat icon="cancel" color="negative"/>
                                </q-card-actions>
                                <q-card-section style="min-height: 150px; max-height: 350px; height: 35vh; width: 100%" class="bg-grey-3 q-pa-none">
                                    <GMapMap :center="event.location" :zoom="8"/>
                                </q-card-section>
                                <q-separator />
                                <q-card-section>
                                    <div class="text-subtitle2 text-secondary" style="line-height: 70%">{{ event.subtitle }}</div>
                                    <div class="text-h6">{{ event.title }}</div>
                                    {{ event.content }}
                                </q-card-section>
                                <q-card-actions align="right">
                                    <q-btn flat round dense :icon="expanded ? 'expand_less' : 'expand_more'" @click="expanded = !expanded" />
                                </q-card-actions>
                                <q-slide-transition>
                                    <div v-show="expanded">
                                        <q-separator />
                                        <q-card-section>
                                            test
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
                <q-timeline-entry v-for="event in jeu" :key="event.id" :title="event.title" :subtitle="event.subtitle" :side="event.side" :icon="event.icon" class="cursor-default">
                    <div class="m-event">
                        {{ event.content }}
                    </div>
                    <q-btn flat dense label="En savoir plus" color="accent">
                        <q-popup-proxy>
                            <q-card>
                                <q-card-section>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At odit est, eum consectetur numquam possimus corporis molestiae cum, reprehenderit, eveniet harum dignissimos sapiente saepe ipsam a earum omnis blanditiis! Optio!
                                </q-card-section>
                            </q-card>
                        </q-popup-proxy>
                    </q-btn>
                </q-timeline-entry>
            </q-timeline>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Screen } from 'quasar'
import { Planning, mercredi, jeudi } from 'src/js/planning'

const mer = ref<Planning>(mercredi)
const jeu = ref<Planning>(jeudi)
const expanded = ref(false)

const layout = computed(() => {
    return Screen.lt.sm ? 'dense' : 'loose'
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
