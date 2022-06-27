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
        <div class="text-center text-h4 q-mb-md">Aperçu</div>
        <div class="row">
            <div class="col">
                <div class="text-h6">Réseau & Vie associative</div>
                <div class="q-py-sm text-justify">
                    Cette année, nous nous donnons rendez-vous pour les 10 ans du Réseau FIGURE, du mercredi 8 au jeudi
                    9 novembre à Reims, la cité des sacres.<br /> Nous aurons l’opportunité de découvrir plusieurs lieux
                    emblématiques de la ville. Organisée par le Réseau FIGURE, l'Université de Reims, l'association
                    MIRAGE - CMI Reims et CMI ALUMNI, cette rencontre réunira étudiants, alumnis et enseignants issus de
                    plus de 25 universités françaises. C’est l’occasion pour le Réseau de faire un bilan associatif,
                    d’organiser des ateliers variés et surtout de fédérer ses membres !
                </div>
            </div>
            <div class="col flex flex-center m-img">
                <img src="figure/48A0209_copie.jpg" alt="Assemblée générale du Réseau FIGURE" width="80%"
                    style="min-width: 300px" class="shadow-3">
            </div>
        </div>
        <br />
        <div class="row">
            <div class="col flex flex-center m-img">
                <img src="figure/vignoble-reims.png" alt="Vignoble de Reims" width="80%" style="min-width: 300px"
                    class="shadow-3">
            </div>
            <div class="col">
                <div class="text-h6 text-right">Activités & Visites</div>
                <div class="text-justify q-py-sm">
                    Suite au bilan du Réseau, nous nous laisserons emporter pars des témoignages de la formation et du
                    rôle d'ingénieur en Europe et dans le reste du monde !<br />
                    Et puisque 10 ans ça se fête, nous avons prévu une expérience 100% rémoise : la visite des caves de
                    la Maison de Champagne Vranken-Pommery, suivie d'un dîner dans ce cadre merveilleux.<br />
                    Le lendemain ? Nous nous retrouverons pour des ateliers en petits groupes au Salon Degermann.
                </div>
            </div>
        </div>
        <br />
        <div class="row">
            <div class="col">
                <div class="text-h6">Remise des Labels et Soirée</div>
                <div class="q-py-sm text-justify">
                    Temps fort de ce rendez-vous annuel, voici venir la cérémonie de remise des labels.<br />
                    Les promotions 2022 de toutes les formations CMI sont attendues ce jeudi 10 novembre au Salon
                    Degermann. Nous y applaudirons nos jeunes alumnis avant de célébrer leur arrivée dans le monde du
                    travail autour d'un buffet. Après quoi, étudiants et alumnis sont invités à profiter de cette
                    suptueuse salle jusqu'au bout de la nuit !<br />
                    CMI ALUMNI et MIRAGE - CMI Reims organisent à cette occasion un dîner de gala (entrée, plat,
                    dessert) suivi d'une soirée dansante avec DJ !
                </div>
            </div>
            <div class="col flex flex-center m-img">
                <img src="figure/DSC_0115_copie.jpg" alt="Remise des diplômes" width="80%" style="min-width: 300px"
                    class="shadow-3">
            </div>
        </div>
    </div>
    <div class="full-width q-px-lg q-py-xl">
        <div class="text-center text-h4 text-primary">Nos Partenaires</div>
        <div class="bg-grey-3 rounded-borders q-mx-auto q-mt-md q-py-xl q-px-md" id="parts">
            <q-img v-for="part in parts" :key="part.id" :src="part.icon" alt="Partenaire" width="120px" height="120px" fit="cover" style="border-radius: 10px; --caption: none;" @mouseenter="show($event)" @mouseleave="hide($event)" @click="changeLocation(part.link)">
                <div class="absolute-full text-subtitle2 flex flex-center text-center cursor-pointer" style="line-height: 90%; display: var(--caption);">{{ part.label }}</div>
            </q-img>
        </div>
    </div>
    <div class="full-width q-px-lg q-py-xl" style="position: relative">
        <div class="text-center text-h4 text-primary">Que faire à Reims ?</div>
        <div class="text-center text-subtitle1 text-primary">Vous restez passer le week-end à Reims et ne savez pas
            comment en profiter ? Les bons plans ici !</div>
        <q-carousel animated infinite arrows :autoplay="autoplay" @mouseenter="autoplay = false"
            @mouseleave="autoplay = true" transition-prev="slide-right" transition-next="slide-left" v-model="slide"
            class="q-my-md q-mx-auto rounded-borders shadow-1" style="max-width: 900px">
            <q-carousel-slide v-for="s in slides" :key="s.id" :name="s.id" :img-src="s.src">
                <div class="absolute-bottom text-white text-center q-pa-lg" style="background: rgba(60, 60, 60, .5)">
                    <div class="text-h5">{{ s.title }}</div>
                    <div>{{ s.text }}</div>
                </div>
            </q-carousel-slide>
        </q-carousel>
        <br />
        <div class="row q-mx-auto q-my-md" style="max-width: 750px" v-if="Screen.width > 600">
            <div class="col flex flex-center">
                <q-btn label="Office du tourisme" color="primary" outline rounded ripple
                    href="https://www.reims-tourisme.com/" />
            </div>
            <div class="col flex flex-center">
                <q-btn label="Voyage Tips" color="primary" outline rounded ripple
                    href="https://www.voyagetips.com/que-faire-a-reims/" />
            </div>
            <div class="col flex flex-center">
                <q-btn label="Trip Advisor" color="primary" outline rounded ripple
                    href="https://www.tripadvisor.fr/Attractions-g187137-Activities-Reims_Marne_Grand_Est.html" />
            </div>
        </div>
        <div class="row q-mx-auto q-mt-xl" v-else>
            <div class="col flex flex-center">
                <q-btn icon="info" color="primary" outline round ripple
                    @click="changeLocation('https://www.reims-tourisme.com/')">
                    <q-tooltip class="bg-primary text-info" anchor="top middle" self="bottom middle">Office du tourisme
                    </q-tooltip>
                </q-btn>
            </div>
            <div class="col flex flex-center">
                <q-btn icon="mode_of_travel" color="primary" outline round ripple
                    @click="changeLocation('https://www.voyagetips.com/que-faire-a-reims/')">
                    <q-tooltip class="bg-primary text-info" anchor="top middle" self="bottom middle">Voyage Tips
                    </q-tooltip>
                </q-btn>
            </div>
            <div class="col flex flex-center">
                <q-btn icon="flutter_dash" color="primary" outline round ripple
                    @click="changeLocation('https://www.tripadvisor.fr/Attractions-g187137-Activities-Reims_Marne_Grand_Est.html')">
                    <q-tooltip class="bg-primary text-info" anchor="top middle" self="bottom middle">Trip Advisor
                    </q-tooltip>
                </q-btn>
            </div>
        </div>
        <div v-if="Screen.width < 600">
            <div class="text-center q-mt-md" v-if="Platform.has.touch">Maintenez votre doigt sur les boutons pour voir
                apparaître le tooltip.</div>
            <div class="text-center q-mt-md" v-else>Passer votre souris sur les boutons pour voir apparaître le tooltip.
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Screen, Platform } from 'quasar'

const bigTitle = ref('Journées du Réseau FIGURE')
const autoplay = ref(true)
const slide = ref(1)

const parts = ref([
    {
        id: 1,
        icon: 'figure/parts/apparelo.png',
        label: 'Apparelo',
        link: 'https://www.apparelo.com/'
    },
    {
        id: 2,
        icon: 'figure/parts/cmi-alumni.jpg',
        label: 'CMI Alumni',
        link: 'https://cmi-alumni.fr/'
    },
    {
        id: 3,
        icon: 'figure/parts/cmi-france.png', 
        label: 'CMI France',
        link: 'http://cmifrance.fr/'
    },
    {
        id: 4,
        icon: 'figure/parts/figure.png',
        label: 'Réseau FIGURE',
        link: 'https://reseau-figure.fr/'
    },
    {
        id: 5,
        icon: 'figure/parts/grand-est.jpg',
        label: 'Région Grand Est',
        link: 'https://www.grandest.fr/'
    },
    {
        id: 6,
        icon: 'figure/parts/mendo.jpg',
        label: 'Mendo',
        link: 'https://www.instagram.com/mendosuitsparis/?hl=fr'
    },
    {
        id: 7,
        icon: 'figure/parts/mirage.png',
        label: 'Master en Ingénierie de Reims, Association Générale des Etudiants',
        link: 'https://mirage-cmi-reims.fr/'
    },
    {
        id: 8,
        icon: 'figure/parts/reims.jpg',
        label: 'Ville de Reims',
        link: 'https://www.reims.fr/'
    },
    {
        id: 9,
        icon: 'figure/parts/urca.jpg',
        label: 'Université de Reims Champagne Ardennes', 
        link: 'https://www.univ-reims.fr/'
    },
])

const slides = ref([
    {
        id: 1,
        src: 'figure/reims/REIMS.jpg',
        title: 'Cathédrale Notre-Dame de Reims',
        text: 'L\'incontournable de la Cité des Sacres !'
    },
    {
        id: 2,
        src: 'figure/reims/REIMS2.jpg',
        title: 'Caves de Champagne',
        text: 'Un détour savoureux par la Route du Champagne auprès des maisons les plus prestigieuses'
    },
    {
        id: 3,
        src: 'figure/reims/REIMS3.jpg',
        title: 'Place d\'Erlon',
        text: 'L\'un des passages les plus touristiques de Reims, à mi-chemin entre la gare et les rues commerçantes'
    },
    {
        id: 4,
        src: 'figure/reims/REIMS4.jpg',
        title: 'Place Royale',
        text: 'A la découverte du centre ville : Place Royale, Le Forum, et plein d\'autres endroits vous attendent...'
    },
])

function changeLocation(url: string): void {
    window.location.href = url
}

function show(event: unknown): void {
    if (event instanceof MouseEvent) {
        const target = event.target as HTMLElement
        target.style.setProperty('--caption', 'flex')
    }
}

function hide(event: unknown): void {
    if (event instanceof MouseEvent) {
        const target = event.target as HTMLElement
        target.style.setProperty('--caption', 'none')
    }
}
</script>

<style lang="scss">

.m-img img {
    border-radius: 12px;
}

#parts {
    position: relative;
    max-width: 900px;
    min-height: 6em;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
}

#apercu .row > .col {
    max-width: 450px;
}

#apercu .row {
    align-items: center;
    flex-direction: column;
}

#apercu img {
    margin: 16px 0;
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
