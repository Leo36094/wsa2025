// Try a Skill table data types
export interface TrySkillItem {
  company: string
  activity: string
  category: string
  location: string
}

export interface TrySkillData {
  headers: {
    company: string
    activity: string
    category: string
    location: string
  }
  items: TrySkillItem[]
}

