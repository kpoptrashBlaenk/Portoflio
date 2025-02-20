import {
  AccordionItem,
  Chapter,
  AboutMeFormation,
  LanguageInfo,
  AboutMeExperience,
  AboutMeSkills,
  AboutMeInterests,
} from "./types"

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
    languages: LanguageInfo[]
  }
}

export type ParcoursLanguage = {
  title: string
  accordionItems: AccordionItem[]
}
export type AccordionLanguage = {
  focus: string
  subject: string
  position: string
  location: string
  time: string
  notes: string
}

export type KnowledgeLanguage = {
  title: string
} // NodeLanguage is embedded into Node within types.d.ts for data.json

export type BTSLanguage = {
  title: string
  chapters: string
  semester: string
}
export type ChapterLanguage = Chapter[][]

type AboutMeLanguage = {
  header: {
    country: string
  }
  formations: {
    title: string
    formations: AboutMeFormation[]
  }
  languages: {
    title: string
    languages: AboutMeLanguages[]
  }
  experience: {
    title: string
    experience: AboutMeExperience[]
  }
  skills: {
    title: string
    skills: AboutMeSkills
  }
  interests: {
    title: string
    interests: AboutMeInterests[]
  }
}

const AVAILABLE_LANGUAGES = {
  english: "english",
  german: "german",
  french: "french",
}
export type AvailableLanguages = keyof typeof AVAILABLE_LANGUAGES
