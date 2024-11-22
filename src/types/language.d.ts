export type Language = {
  english: NavigationLanguage
  german: NavigationLanguage
  french: NavigationLanguage
}

export type NavigationLanguage = {
  home: string
  parcours: string
  projects: string
  knowledge: string
  bts: string
  aboutMe: string
}

const AVAILABLE_LANGUAGES = {
  english: "english",
  german: "german",
  french: "french",
}
export type AvailableLanguages = keyof typeof AVAILABLE_LANGUAGES
