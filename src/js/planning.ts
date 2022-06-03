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

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'

export const mercredi: Planning = [
    {
        id: 0,
        title: 'Accueil des participants',
        subtitle: '8h00',
        side: 'right',
        icon: undefined,
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: 'https://quasar.dev',
        details: 'details'
    },
    {
        id: 1,
        title: 'Discours d\'introduction',
        subtitle: '8h30',
        side: 'left',
        icon: 'chat',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 2,
        title: 'Vie du Réseau',
        subtitle: '8h30 - 10h30',
        side: 'right',
        icon: 'share',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 3,
        title: 'Pause',
        subtitle: '10h30',
        side: 'right',
        icon: 'pause',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 4,
        title: 'Vie associative',
        subtitle: '10h55 - 11h55',
        side: 'left',
        icon: 'group',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 5,
        title: 'Déjeuner & Session posters',
        subtitle: '12h00 - 13h45',
        side: 'right',
        icon: 'bakery_dining',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 6,
        title: 'Table ronde',
        subtitle: '14h00 - 17h30',
        side: 'left',
        icon: 'autorenew',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 7,
        title: 'Visite des caves',
        subtitle: '18h00',
        side: 'left',
        icon: 'liquor',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 8,
        title: 'Dîner',
        subtitle: '20h00',
        side: 'right',
        icon: 'restaurant',
        content: lorem,
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
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 1,
        title: 'Atelier insertions professionnelles',
        subtitle: '10h00 - 12h00',
        side: 'right',
        icon: 'inventory',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 2,
        title: 'Déjeuner',
        subtitle: '12h00-13h00',
        side: 'left',
        icon: 'bakery_dining',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 3,
        title: 'Remise des Labels',
        subtitle: '14h00',
        side: 'left',
        icon: 'workspace_premium',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 4,
        title: 'Vin d\'honneur',
        subtitle: '16h30 - 18h00',
        side: 'right',
        icon: 'wine_bar',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    },
    {
        id: 5,
        title: 'Gala',
        subtitle: '19h30',
        side: 'left',
        icon: 'celebration',
        content: lorem,
        dialog: false,
        location: { lat: 0, lng: 0 },
        address: 'adresse',
        link: undefined,
        details: 'details'
    }
]
