export const SECTION_ID = {
  Skill: 'skill',
  Taipei: 'host',
  WDA: 'wda',
  Location: 'location',
  Schedule: 'schedule',
  Competition: 'competition',
  Sponsorship: 'sponsorship',
  ThemeExhibition: 'theme-exhibition',
  TryOut: 'try-out',
} as const;

export const PageSectionEnum = {
  Skill: `#${SECTION_ID.Skill}`,
  Taipei: `#${SECTION_ID.Taipei}`,
  WDA: `#${SECTION_ID.WDA}`,
  Location: `#${SECTION_ID.Location}`,
  Schedule: `#${SECTION_ID.Schedule}`,
  Competition: `#${SECTION_ID.Competition}`,
  Sponsorship: `#${SECTION_ID.Sponsorship}`,
  ThemeExhibition: `#${SECTION_ID.ThemeExhibition}`,
  TryOut: `#${SECTION_ID.TryOut}`,
} as const;

export type PageSection = keyof typeof PageSectionEnum;
export type PageValue = typeof PageSectionEnum[keyof typeof PageSectionEnum];
