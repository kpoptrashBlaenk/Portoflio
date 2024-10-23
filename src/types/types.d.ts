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
  visibility: 'public' | 'private'
  topics: string[]
}