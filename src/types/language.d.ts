export type NavigationLanguage = {
  home: string
  parcours: string
  projects: string
  knowledge: string
  bts: string
  aboutMe: string
}

export type FooterLanguage = {
  legalMentionsLeft: {
    owner: string
    host: string
    usage: string
  }
  legalMentionsRight: {
    title: string
    protection: string
    collection: string
    country: string
  }
  language: string
}

type Tile = {
  title: string
  body: string
}
export type TilesLanguage = {
  title: string
  aboutMe: Tile
  parcours: Tile
  projects: Tile
  knowledge: Tile
  bts: Tile
}

export type HomeLanguage = {
  jumbotron: {
    title: string
    subtitle: string
    subSubtitle: string
  }
  languages: {
    title: string
    side: {
      title: string
      body: string
    }
    languages: Array<{
      language: string
      body: string
      color: string
      icon: string
    }>
  }
}

const AVAILABLE_LANGUAGES = {
  english: "english",
  german: "german",
  french: "french",
}
export type AvailableLanguages = keyof typeof AVAILABLE_LANGUAGES
