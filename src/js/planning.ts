export interface Event {
    id: number,
    title: string,
    subtitle: string,
    side: 'left' | 'right' | undefined,
    icon: string | undefined,
    content: string,
    dialog: boolean,
    location: { lat: number, lng: number },
    address: string,
    link: string | undefined,
    details: string
}

export type Planning = Event[]

export const mercredi: Planning = [
    {
        id: 0,
        title: 'Accueil des participants',
        subtitle: '8h30',
        side: 'right',
        icon: undefined,
        content: 'Venez très nombreux dès 8h30 à l\'Université de Reims pour ce premier rendez-vous. Que les Journées du Réseau FIGURE commencent !',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'Nous vous attendons entre 8h30 et 9h à l\'Université de Reims Champagne Ardenne, Campus Moulin de la Housse, à amphithéâtre STAPS.'
    },
    {
        id: 1,
        title: 'Discours d\'introduction',
        subtitle: '9h15',
        side: 'left',
        icon: 'chat',
        content: 'Ouverture des Journées du Réseau FIGURE 2022, en partenariat avec MIRAGE, CMI Alumni et le Réseau FIGURE.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: ''
    },
    {
        id: 2,
        title: 'Vie du Réseau FIGURE',
        subtitle: '9h30',
        side: 'right',
        icon: 'share',
        content: 'Nous entamerons cette journée intense par un débrif sur la vie du Réseau.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'Qui dit Journée FIGURE dit bilan de la vie du Réseau. Les différents membres du bureau vous présenteront les nouvelles de l’association ainsi que les évènements phares de l’année.'
    },
    {
        id: 3,
        title: 'Pause & Posters',
        subtitle: '11h00',
        side: 'right',
        icon: 'pause',
        content: 'L\'occasion pour tous de faire le tour des projets étudiants partout en France !',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'Découvrez les projets des étudiants des différentes universités partenaires du Réseau FIGURE autour d’un café ou d’un verre de jus.'
    },
    {
        id: 4,
        title: 'Vie associative',
        subtitle: '11h30 - 12h00',
        side: 'left',
        icon: 'group',
        content: 'Que diriez-vous de découvrir la vie de nos associations ? Elles n\'auront bientôt plus de secret pour vous.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'Que serait le Réseau sans nos étudiants et Alumni ! CMI France, Fédération des étudiants du Cursus Master en Ingénierie de France et CMI Alumni, l’association des anciens étudiants du cursus vous présenteront leurs activités.'
    },
    {
        id: 5,
        title: 'Déjeuner & Posters',
        subtitle: '12h00 - 14h00',
        side: 'right',
        icon: 'bakery_dining',
        content: 'Profitez d\'un repas convivial autour duquel chacun partagera ses expériences !',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: ''
    },
    {
        id: 6,
        title: 'Mobilité à l\'international',
        subtitle: '14h00 - 17h30',
        side: 'left',
        icon: 'autorenew',
        content: 'Voyagez au coeur de nos excursions à l\'étranger par le biais de nos étudiants embassadeurs.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'UFR Sciences et Techniques des Activités Physiques et Sportives, bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'Le CMI c’est aussi explorer de nouveaux horizons. Nous vous proposons donc de voyager le temps d’une après-midi pour découvrir les témoignages d’étudiants et d’alumni qui sont partis pour un semestre, un stage ou pour débuter leur carrière à l’étranger ; mais également d’échanger sur les cursus exigeants proposés dans d’autres pays. Si vous souhaitez partager votre expérience, faites nous le savoir en remplissant ce questionnaire jusqu’au 15 septembre.'
    },
    {
        id: 7,
        title: 'Visite des caves Pommery',
        subtitle: '18h00',
        side: 'left',
        icon: 'liquor',
        content: 'Venez découvrir un petit bout du patrimoine champenois : Route du Champagne, nous voilà !',
        dialog: false,
        location: { lat: 49.242474145780214, lng: 4.0515323631981515 },
        address: 'Domaine Vranken Pommery, 5 Place du Général Gouraud, 51100 Reims',
        link: 'https://www.vrankenpommery.com/',
        details: 'Au travers de la visite des caves de la Maison de Champagne Vranken-Pommery, la fabrication du Champagne n’aura plus aucun secret pour vous.'
    },
    {
        id: 8,
        title: 'Dîner des 10 ans du Réseau',
        subtitle: '20h00',
        side: 'right',
        icon: 'restaurant',
        content: 'Fêtons ensemble les dix du Réseau FIGURE autour d\'un chaleureux repas.',
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: ''
    }
]

export const jeudi: Planning = [
    {
        id: 0,
        title: 'Accueil des participants',
        subtitle: '9h30',
        side: 'left',
        icon: undefined,
        content: 'Bienvenue pour ce second jour des JRF 2022 ! Nous vous attendons tout aussi nombreux que la veille.',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: 'Salon Degermann, 35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: ''
    },
    {
        id: 1,
        title: 'Atelier insertions professionnelles',
        subtitle: '10h00 - 12h00',
        side: 'right',
        icon: 'inventory',
        content: 'Nous vous proposons plusieurs ateliers pour cette matinée, plus d\'informations à venir...',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: 'Salon Degermann, 35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: ''
    },
    {
        id: 2,
        title: 'Déjeuner',
        subtitle: '12h00-13h00',
        side: 'left',
        icon: 'bakery_dining',
        content: 'Venez partager un repas : enrichissons cette bonne cohésion entre étudiants et jeunes diplômés.',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: 'Salon Degermann, 35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: ''
    },
    {
        id: 3,
        title: 'Remise des Labels',
        subtitle: '14h00',
        side: 'left',
        icon: 'workspace_premium',
        content: 'L\'heure fatidique arrive pour les jeunes diplômés de cette année : le moment de venir les féliciter.',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: 'Salon Degermann, 35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'Après 5 années passées au sein du Cursus Master en Ingénierie, nous aurons l’honneur d’accueillir les labellisés 2022 venus des quatre coins de la France pour célébrer ce moment.'
    },
    {
        id: 4,
        title: 'Vin d\'honneur',
        subtitle: '16h30 - 18h00',
        side: 'right',
        icon: 'wine_bar',
        content: 'Célébrons la promotion 2022 autour d’un verre et de quelques douceurs. Une opportunité pour discuter et se détendre.',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: 'Salon Degermann, 35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: ''
    },
    {
        id: 5,
        title: 'Gala',
        subtitle: '19h30',
        side: 'left',
        icon: 'celebration',
        content: 'Terminons ces journées par une soirée animée de musique et profitons une dernière fois des plaisirs qu\'offre la ville de Reims.',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: 'Salon Degermann, 35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: ''
    }
]
