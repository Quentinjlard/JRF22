export interface Event {
    id: number,
    title: string,
    subtitle: string,
    side: 'left' | 'right' | undefined,
    icon: string | undefined,
    content: string
}

export type Planning = Event[]

export const mercredi: Planning = [
    {
        id: 0,
        title: 'Accueil des participants',
        subtitle: '8h00',
        side: 'right',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 1,
        title: 'Discours d\'introduction',
        subtitle: '8h30',
        side: 'left',
        icon: 'save',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 2,
        title: 'Vie du Réseau',
        subtitle: '8h30 - 10h30',
        side: 'right',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 3,
        title: 'Pause',
        subtitle: '10h30',
        side: 'left',
        icon: 'save',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 4,
        title: 'Vie associative',
        subtitle: '10h55 - 11h55',
        side: 'right',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 5,
        title: 'Déjeuner & Session posters',
        subtitle: '12h00 - 13h45',
        side: 'left',
        icon: 'save',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 6,
        title: 'Table ronde',
        subtitle: '14h00 - 17h30',
        side: 'right',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 7,
        title: 'Visite des caves',
        subtitle: '18h00',
        side: 'left',
        icon: 'save',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
        id: 8,
        title: 'Dîner',
        subtitle: '20h00',
        side: 'right',
        icon: undefined,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    }
]

export const jeudi: Planning = []
