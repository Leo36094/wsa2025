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

// Theme Exhibition table data types
export interface ThemeExhibitionItem {
  number: number
  company: string
  displayItem: string
}

export interface ThemeExhibitionData {
  headers: {
    number: string
    company: string
    displayItem: string
  }
  items: ThemeExhibitionItem[]
}

// Skill Mission table data types
export interface SkillMissionItem {
  experienceArea: string
  redemptionArea: string
  howToParticipate: string
  howToRedeem: string
  giftGiveaways: string
}

export interface SkillMissionData {
  headers: {
    experienceArea: string
    redemptionArea: string
    howToParticipate: string
    howToRedeem: string
    giftGiveaways: string
  }
  items: SkillMissionItem[]
}

// Country by Skill table data types
export interface CountryBySkillItem {
  code: string
  skill: string
  memberCountries: string
  nonMemberCountries: string
}

export interface CountryBySkillData {
  title: string
  headers: {
    code: string
    skill: string
    memberCountries: string
    nonMemberCountries: string
  }
  items: CountryBySkillItem[]
}

