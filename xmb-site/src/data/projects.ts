export type Project = {
  title: string
  stack: string[]
  blurb: string
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Option-11 (e-commerce)',
    stack: ['Laravel','React','Inertia','MySQL'],
    blurb: 'Bike parts store with compatibility checker, basket & wishlist.',
    repo: 'https://github.com/MaciejDotDev/Option-11'
  },
  {
    title: 'Shopify Postcode Checker App',
    stack: ['Shopify','Liquid','JS'],
    blurb: 'Custom app proxy + AJAX cart features.'
  },
  {
    title: 'PS3-style Portfolio',
    stack: ['React','TypeScript','Framer Motion','Canvas'],
    blurb: 'This very site—XMB navigation + flowing aero background.',
    repo: 'https://github.com/MaciejDotDev/maciejm.dev'
  },
    {
    title: 'Aurora Melodies',
    stack: ['React','TypeScript','API'],
    blurb: 'My very own ad-less radio replacement playing top Playlists and Tracks from the UK\'s top hits with search and playlist creation functionality',
    repo: 'https://github.com/MaciejDotDev/AuroraMelodies'
  },
    {
    title: 'Komify',
    stack: ['JavaScript','HTML','CSS','Google Extension Store'],
    blurb: 'A Google Chrome Extension that overlays images of the famous Komi-san from Komi can\'t communicate over your Youtube thumbnails to brighten your day',
    repo: 'https://github.com/MaciejDotDev/Komify'
  }
]
