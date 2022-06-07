<template>
    <div class="q-pa-none" style="height: 75px">
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
                :width="Screen.width > 500 ? (Screen.width > 1000 ? '60%' : '70%') : '100%'" class="m-illustration"
                :style="(Screen.width < 500) ? 'margin-bottom: 2.5em' : ''" />
        </div>
    </div>
    <div>
        A ajouter :<br>
        Recap des Journées<br>
        Partenaires (lien vers page annexe)<br>
        Que faire a Reims le we ? (lien vers page annexe)
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Screen } from 'quasar'

const bigTitle = ref('Journées du Réseau FIGURE')
</script>

<style lang="scss">




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

@media screen and (min-width: 700px) {
    .m-big-title_text {
        font-size: 5em;
    }
}
</style>
