export interface Event {
    id: number,
    title: string,
    subtitle: string,
    side: 'left' | 'right' | undefined,
    icon: string | undefined,
    content: string,
    dialog: boolean,
    location: { lat: number, lng: number }
}

export type Planning = Event[]

export const mercredi: Planning = [
    {
        id: 0,
        title: 'Accueil des participants',
        subtitle: '8h00',
        side: 'right',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 1,
        title: 'Discours d\'introduction',
        subtitle: '8h30',
        side: 'left',
        icon: 'chat',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 2,
        title: 'Vie du Réseau',
        subtitle: '8h30 - 10h30',
        side: 'right',
        icon: 'share',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 3,
        title: 'Pause',
        subtitle: '10h30',
        side: 'left',
        icon: 'pause',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 4,
        title: 'Vie associative',
        subtitle: '10h55 - 11h55',
        side: 'right',
        icon: 'group',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 5,
        title: 'Déjeuner & Session posters',
        subtitle: '12h00 - 13h45',
        side: 'left',
        icon: 'bakery_dining',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 6,
        title: 'Table ronde',
        subtitle: '14h00 - 17h30',
        side: 'right',
        icon: 'autorenew',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 7,
        title: 'Visite des caves',
        subtitle: '18h00',
        side: 'left',
        icon: 'wine_bar',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    },
    {
        id: 8,
        title: 'Dîner',
        subtitle: '20h00',
        side: 'right',
        icon: 'restaurant',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        dialog: false,
        location: { lat: 0, lng: 0 }
    }
]

export const jeudi: Planning = []
