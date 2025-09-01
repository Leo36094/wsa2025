export const SECTION_ID = {
  Skill: 'skill',
  Taipei: 'host',
  WDA: 'wda',
  Location: 'location',
  Schedule: 'schedule',
  Competition: 'competition',
  Member: 'member',
  Competitor: 'competitor',
  Sponsorship: 'sponsorship',
  Visa: 'visa',
  TryOut: 'try-out',
  Forum: 'forum',
  Tourguide: 'tourguide',
  Notice: 'notice',
  Traffic: 'traffic',
  Medic: 'medic',
  Tourist: 'tourist',
  Vegan: 'vegan',
  Muslim: 'muslim',
} as const;

export const PageSectionEnum = {
  Skill: `#${SECTION_ID.Skill}`,
  Taipei: `#${SECTION_ID.Taipei}`,
  WDA: `#${SECTION_ID.WDA}`,
  Location: `#${SECTION_ID.Location}`,
  Schedule: `#${SECTION_ID.Schedule}`,
  Competition: `#${SECTION_ID.Competition}`,
  Member: `#${SECTION_ID.Member}`,
  Competitor: `#${SECTION_ID.Competitor}`,
  Sponsorship: `#${SECTION_ID.Sponsorship}`,
  Visa: `#${SECTION_ID.Visa}`,
  TryOut: `#${SECTION_ID.TryOut}`,
  Forum: `#${SECTION_ID.Forum}`,
  Tourguide: `#${SECTION_ID.Tourguide}`,
  Notice: `#${SECTION_ID.Notice}`,
  // TODO
  Traffic: `#${SECTION_ID.Traffic}`,
  Medic: `#${SECTION_ID.Medic}`,
  Tourist: `#${SECTION_ID.Tourist}`,
  Vegan: `#${SECTION_ID.Vegan}`,
  Muslim: `#${SECTION_ID.Muslim}`,
} as const;

export type PageSection = keyof typeof PageSectionEnum;
export type PageValue = typeof PageSectionEnum[keyof typeof PageSectionEnum];
