import { FacebookIcon, GoogleIcon, 
    XIcon, XBOXIcon, TwitchIcon, 
    InstagramIcon, LinkedInIcon, PatreonIcon,
    RedditIcon, TelegramIcon, OFIcon, 
    WhatsAppIcon, ThreadsIcon, YoutubeIcon,
    TikTokIcon 
} from "@/components/icons"

export interface Link {
    name: string,
    url: string,
    icon?: React.ReactElement
}
export const Links : Link[] = [
    {
        name: 'Google',
        url: 'https://www.google.com',
        icon: <GoogleIcon />
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        icon: <FacebookIcon />
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com',
        icon: <XIcon />
    },{
        name: 'Xbox',
        url: 'https://www.xbox.com',
        icon: <XBOXIcon />
    },{
        name: 'Twitch',
        url: 'https://www.twitch.com',
        icon: <TwitchIcon />
    
    },{
        name: 'Instagram',
        url: 'https://www.instagram.com',
        icon: <InstagramIcon />
    },{
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        icon: <LinkedInIcon />
    },{
        name: 'Patreon',
        url: 'https://www.patreon.com',
        icon: <PatreonIcon />
    },{
        name: 'Reddit',
        url: 'https://www.reddit.com',
        icon: <RedditIcon />
    
    },{
        name: 'Telegram',
        url: 'https://www.telegram.com',
        icon: <TelegramIcon />
    },{
        name: 'WhatsApp',
        url: 'https://www.whatsapp.com',
        icon: <WhatsAppIcon />
    },{
        name: 'Threads',
        url: 'https://www.threads.com',
        icon: <ThreadsIcon />
    },{
        name: 'Youtube',
        url: 'https://www.youtube.com',
        icon: <YoutubeIcon />
    
    },{
        name: 'OnlyFans',
        url: 'https://www.onlyfans.com',
        icon: <OFIcon />
    },{
        name: 'TikTok',
        url: 'https://www.tiktok.com',
        icon: <TikTokIcon />
    }
]