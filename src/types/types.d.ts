import { File } from "./nested-types"

export type LanguageInfo = {
  language: string
  body: string
  color: string
  icon: string
}

export type AccordionItem = {
  year: string
  title: string
  bodyTitle: string
  focus?: string
  subject?: string
  position?: string
  location: string
  time: string
  notes: string
}

export type LanguageColors = {
  language: string
  color: string
  textColor: string
}

export type Repo = {
  html_url: string
  name: string
  description: string
  language: string
  updated_at: string
  created_at: string
  visibility: "public" | "private"
  topics: string[]
  commits_count: number
}

export type Chapter = {
  semester: number
  title: string
  content: string
  files: File[]
  tags: string[]
  date: string
}

export type Semesters = {
  [key: number]: Chapter[]
}

export type File = {
  fileName: string
  filePath: string
}

export type MainNode = {
  text: string
  x: number
  y: number
  fill: string
  "text-color": string
  subs: Node[]
}

export type Node = {
  text: string
  x1: number
  y1: number
  x2: number
  y2: number
  fill: string
  "text-color": string
  important: boolean
  tooltip: {
    english: string
    german: string
    french: string
  }
}

export type AboutMeFormation = {
  title: string
  location: string
  time: string
  extra?: string
}

export type AboutMeLanguages = {
  language: string
  level: string
}

export type AboutMeExperience = {
  title: string
  location: string
  time: string
  extra?: string
}

export type AboutMeSkills = {
  general: string[]
  programming: string[]
}

export type AboutMeInterests = {
  title: string
  extra: string
}

const ROUTES = {
  Home: "Home",
  Parcours: "Parcours",
  Projects: "Projects",
  Knowledge: "Knowledge",
  BTS: "BTS",
  AboutMe: "AboutMe",
}
export type Routes = keyof typeof ROUTES
