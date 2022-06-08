<template>
    <div class="q-pa-none" style="height: 75px" id="m-head-container">
        <div class="full-width text-primary absolute-top-left" style="height: 50vh">
            <div class="absolute full-width text-center m-title"
                :style="Screen.height >= 500 ? (Screen.width < 500 ? 'top: 48%' : 'top: 40%') : 'top: 40px'">
                LE RESEAU FIGURE<br>
                CMI ALUMNI<br>
                MIRAGE CMI REIMS<br>
                <span style="line-height: 250%">Vous accueillent aux</span>
            </div>
        </div>
        <div class="m-big-title absolute-top-left full-width">
            <div class="m-big-title_container absolute fit" :style="Screen.height < 500 ? '' : 'display: flex'">
                <div class="m-big-title_text text-center q-mx-auto" :style="Screen.height < 500 ? 'top: 150px' : ''"
                    :data-text="bigTitle">
                    {{ bigTitle }}
                </div>
            </div>
        </div>
        <div class="m-illustration-container" :style="(Screen.height < 500) ? 'margin-top: 460px' : ''">
            <q-img src="~assets/undraw_graduation_re_gthn.svg"
                :width="Screen.width > 500 ? (Screen.width > 1000 ? '60%' : '70%') : '100%'"
                class="m-illustration q-mb-md" :style="(Screen.width < 500) ? 'margin-bottom: 4.75em' : ''" />
        </div>
    </div>
    <div id="apercu" class="full-width q-px-lg q-py-xl bg-primary text-white">
        <div class="text-center text-h4">Aperçu</div>
        <div class="row">
            <div class="col">
                <div class="text-h6">Réseau & Vie associative</div>
                <div class="q-pr-md q-py-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias temporibus dicta minus explicabo,
                    totam maxime. Soluta sapiente fugiat quas nobis ex, libero eos, odio voluptatem magnam ad omnis
                    inventore temporibus!<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi aliquam consequuntur officia
                    corporis molestias ex repellat quos, accusantium eligendi, praesentium incidunt optio delectus,
                    minima nesciunt provident enim quod earum.
                </div>
            </div>
            <div class="col">
                <img src="" alt="[Image]">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <img src="" alt="[Image]">
            </div>
            <div class="col">
                <div class="text-h6 text-right">Activités & Visites</div>
                <div class="text-right q-pl-md q-py-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias temporibus dicta minus explicabo,
                    totam maxime. Soluta sapiente fugiat quas nobis ex, libero eos, odio voluptatem magnam ad omnis
                    inventore temporibus!<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi aliquam consequuntur officia
                    corporis molestias ex repellat quos, accusantium eligendi, praesentium incidunt optio delectus,
                    minima nesciunt provident enim quod earum.
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-h6">Cérémonie & Gala</div>
                <div class="q-pr-md q-py-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias temporibus dicta minus explicabo,
                    totam maxime. Soluta sapiente fugiat quas nobis ex, libero eos, odio voluptatem magnam ad omnis
                    inventore temporibus!<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi aliquam consequuntur officia
                    corporis molestias ex repellat quos, accusantium eligendi, praesentium incidunt optio delectus,
                    minima nesciunt provident enim quod earum.
                </div>
            </div>
            <div class="col">
                <img src="" alt="[Image]">
            </div>
        </div>
    </div>
    <div class="full-width q-px-lg q-py-xl">
        <div class="text-center text-h4 text-primary">Nos Partenaires</div>
        <div class="bg-grey-3 rounded-borders q-mx-auto q-mt-md"
            style="position: relative; max-width: 900px; min-height: 6em; overflow: hidden;" @mouseenter="hover = true"
            @mouseleave="hover = false">
            <div id="part-list" v-show="Platform.has.touch || hover">
                <q-btn color="primary" label="Voir tous les partenaires" id="part-list-btn" to="partenaires" target="_blank" />
            </div>
        </div>
    </div>
    <div class="full-width q-px-lg q-py-xl" style="position: relative">
        <div class="text-center text-h4 text-primary">Que faire à Reims ?</div>
        <div class="text-center text-subtitle1 text-primary">Vous restez passer le week-end à Reims et ne savez pas comment en profiter ? Les bons plans ici !</div>
        <q-carousel animated infinite arrows :autoplay="autoplay" @mouseenter="autoplay = false"
            @mouseleave="autoplay = true" transition-prev="slide-right" transition-next="slide-left" v-model="slide"
            class="q-my-md q-mx-auto rounded-borders shadow-1" style="max-width: 900px">
            <q-carousel-slide v-for="s in slides" :key="s.id" :name="s.id" :img-src="s.src">
                <div class="absolute-bottom text-white text-center q-pa-lg" style="background: rgba(60, 60, 60, .40)">
                    <div class="text-h5">{{ s.title }}</div>
                    <div>{{ s.text }}</div>
                </div>
            </q-carousel-slide>
        </q-carousel>
        <q-btn label="Voir tous les bons plans" color="primary" outline rounded ripple style="left: 50%; transform: translateX(-50%);" to="we-reims" target="_blank" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Screen, Platform } from 'quasar'

const bigTitle = ref('Journées du Réseau FIGURE')
const hover = ref(false)
const autoplay = ref(true)
const slide = ref(1)

const slides = ref([
    {
        id: 1,
        src: 'https://cdn.quasar.dev/img/mountains.jpg',
        title: 'Titre 1',
        text: 'texte'
    },
    {
        id: 2,
        src: 'https://cdn.quasar.dev/img/parallax1.jpg',
        title: 'Titre 2',
        text: 'texte'
    },
    {
        id: 3,
        src: 'https://cdn.quasar.dev/img/parallax2.jpg',
        title: 'Titre 3',
        text: 'texte'
    },
    {
        id: 4,
        src: 'https://cdn.quasar.dev/img/quasar.jpg',
        title: 'Titre 4',
        text: 'texte'
    },
])
</script>

<style lang="scss">

#part-list {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(180, 180, 180, .5);
}

#part-list-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

#apercu .row > .col {
    max-width: 450px;
}

#apercu .row {
    align-items: center;
    flex-direction: column;
}

#m-head-container > div:not(.m-illustration-container) {
    transform: translateY(-40px) !important
}

.m-big-title {
    height: 100vh;
}

.m-big-title_container {
    // display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5
}

.m-big-title_text {
    position: relative;
    color: transparent;
    font-size: 3em;
    line-height: 86%;
    max-width: 800px;
    padding: 18px;
    font-weight: bold;
}

.m-big-title_text::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-0.35em);
    background: linear-gradient(to bottom, $primary 30%, $accent 65%, rgb(29, 255, 244) 110%);
    background-clip: text;
    padding: 18px;
}

.m-illustration {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 610px
}

.m-illustration-container {
    position: relative;
    margin-top: calc(100vh - 40px);
    transform: translateY(-120%);
}

@media screen and (min-width: 500px) {
    .m-big-title_text {
        font-size: 4em;
    }
}

@media screen and (min-width: 650px) {
    #apercu .row {
        gap: 3em;
        flex-direction: row;
        justify-content: center;
    }
}

@media screen and (min-width: 700px) {
    .m-big-title_text {
        font-size: 5em;
    }
}
</style>
