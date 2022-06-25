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
        content: 'Nous vous attendons entre 8h30 et 9h à l\'Université de Reims Champagne Ardenne, Campus Moulin de la Housse, amphi STAPS.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
    },
    {
        id: 1,
        title: 'Discours d\'introduction des JRF22',
        subtitle: '9h15',
        side: 'left',
        icon: 'chat',
        content: 'Ouverture des Journées du Réseau FIGURE 2022, en partenariat avec MIRAGE, CMI Alumni et le Réseau FIGURE.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
    },
    {
        id: 2,
        title: 'Vie du Réseau FIGURE',
        subtitle: '9h30 - 11h00',
        side: 'right',
        icon: 'share',
        content: 'Qui dit Journée FIGURE dit bilan de la vie du Réseau. Les différents membres du bureau vous présenteront les nouvelles de l’association ainsi que les évènements phares de l’année.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
    },
    {
        id: 3,
        title: 'Pause & Posters',
        subtitle: '11h00 - 11h30',
        side: 'right',
        icon: 'pause',
        content: 'Découvrez les projets des étudiants des différentes universités partenaires du Réseau Figure autour d’un café ou d’un verre de jus.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
    },
    {
        id: 4,
        title: 'Vie associative des étudiants et Alumni',
        subtitle: '11h30 - 12h00',
        side: 'left',
        icon: 'group',
        content: 'Que serait le réseau sans nos étudiants et Alumni ! CMI France, Fédération des étudiants du Cursus Master en Ingénierie en France et CMI Alumni, l’association des anciens étudiants du cursus vous présenteront leurs activités.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
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
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
    },
    {
        id: 6,
        title: 'Mobilité à l\'international',
        subtitle: '14h00 - 17h30',
        side: 'left',
        icon: 'autorenew',
        content: 'Le CMI c’est aussi explorer de nouveaux horizons. Nous vous proposons donc de voyager le temps d’une après-midi pour découvrir les témoignages d’étudiants et d’alumni qui sont partis pour un semestre, un stage ou pour débuter leur carrière à l’étranger ; mais également d’échanger sur les cursus exigeants proposés dans d’autres pays. Si vous souhaitez partager votre expérience, faites nous le savoir en remplissant ce questionnaire jusqu’au 15 septembre.',
        dialog: false,
        location: { lat: 49.244293236124676, lng: 4.068483151320841 },
        address: 'bât. 25 Chemin des Rouliers, 51100 REIMS',
        link: 'https://goo.gl/maps/h4Y4HE5YBDyfNErx6',
        details: 'UFR Sciences et Techniques des Activités Physiques et Sportives'
    },
    {
        id: 7,
        title: 'Visite des caves Vranken-Pommery',
        subtitle: '18h00',
        side: 'left',
        icon: 'liquor',
        content: 'Au travers de la visite des caves de la Maison de Champagne Vranken-Pommery, la fabrication du champagne n’aura plus aucun secret pour vous.',
        dialog: false,
        location: { lat: 49.242474145780214, lng: 4.0515323631981515 },
        address: '5 Place du Général Gouraud, 51100 Reims',
        link: 'https://www.vrankenpommery.com/',
        details: 'Domaine Vranken Pommery'
    },
    {
        id: 8,
        title: 'Dîner des 10 ans du Réseau',
        subtitle: '20h00',
        side: 'right',
        icon: 'restaurant',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    }
]

export const jeudi: Planning = [
    {
        id: 0,
        title: 'Accueil des participants',
        subtitle: '9h30',
        side: 'left',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: '35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'details'
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
        address: '35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'details'
    },
    {
        id: 2,
        title: 'Déjeuner',
        subtitle: '12h00-13h00',
        side: 'left',
        icon: 'bakery_dining',
        content: 'Venez partager un repas : l\'occasion d\'une bonne cohésion entre étudiants et jeunes diplômés.',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: '35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'details'
    },
    {
        id: 3,
        title: 'Remise des Labels',
        subtitle: '14h00',
        side: 'left',
        icon: 'workspace_premium',
        content: 'Après 5 années passées au sein du Cursus Master en Ingénierie, nous aurons l’honneur d’accueillir les labellisés 2022 venus des quatre coins de la France pour célébrer ce moment',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: '35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'details'
    },
    {
        id: 4,
        title: 'Vin d\'honneur',
        subtitle: '16h30 - 18h00',
        side: 'right',
        icon: 'wine_bar',
        content: 'Nous avons le plaisir de célébrer la promotion 2022 autour d’un verre et de quelques douceurs. Une opportunité pour discuter et se détendre ',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: '35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'details'
    },
    {
        id: 5,
        title: 'Gala',
        subtitle: '19h30',
        side: 'left',
        icon: 'celebration',
        content: 'Nous avons le plaisir de célébrer la promotion 2022 autour d’un verre et de quelques douceurs. Une opportunité pour discuter et se détendre ',
        dialog: false,
        location: { lat: 49.254064320796445, lng: 4.024797099932668 },
        address: '35 rue Buirette, 51100 REIMS',
        link: 'http://www.salon-degermann.com',
        details: 'details'
    }
]
