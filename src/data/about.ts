export const aboutBlurb = `I’m Maciej, a full-stack developer and freelance coder. I'm a Jack of All Trades from programming to Building hardware. Lets interact.`

export type Project = {
  title: string
  blurb: string
  stack: string[]
  url?: string
  repo?: string
  year?: string
}

export const freelanceProjects: Project[] = [
  {
    title: 'Komify',
    year: '2024–',
    blurb: 'YouTube overlay extension that swaps thumbnails for Komi-san images with quick toggles.',
    stack: ['Chrome Extension', 'TypeScript', 'DOM APIs'],
    repo: 'https://github.com/MaciejDotDev/Komify'
  },
  {
    title: 'WaterDash',
    year: '2025',
    blurb: 'Shopify water-delivery storefront with subscription integrations and custom UI.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Theme App Proxy', 'AWS']
  },
  {
    title: 'Aurora Melodies',
    year: '2023–',
    blurb: 'Music-visualizer experiments and lightweight audio tools.',
    stack: ['Web Audio', 'Canvas', 'TypeScript'],
    repo: 'https://github.com/MaciejDotDev/AuroraMelodies'
  }
]

export const passions = [
  { title: 'Pokémon & TCG', img: '/images/passions/mimikyu.jpg', caption: 'Mimikyu enjoyer, deck tinkerer' },
  { title: 'Avid Rodent Fan',     img: '/images/passions/hm-ham.jpg', caption: 'Hamster (Ohto) in Lollipop stick house' },
  { title: 'Tinkering and Soldering', img: 'images/passions/radio.jpg', caption: 'Solderable radio , fully functional with channel selection and volume controls' }
]
