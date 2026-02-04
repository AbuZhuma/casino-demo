import icons from "../../assets/icons"

export const GAME_CONFIGS = {
    url: "https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
}

export type SocialPlatform = {
    icon: string, 
    link: string
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
    {
        icon: icons.instagramIcon, 
        link: "/"
    },
    {
        icon: icons.telegramIcon, 
        link: "/"
    },
    {
        icon: icons.twitterIcon, 
        link: "/"
    },
    {
        icon: icons.emailIcon, 
        link: "/"
    }
]