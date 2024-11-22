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

const AVAILABLE_LANGUAGES = {
  english: "english",
  german: "german",
  french: "french",
}
export type AvailableLanguages = keyof typeof AVAILABLE_LANGUAGES
