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
  Forum: 'forum',
  Toruisum: 'tourism',
  Tourguide: 'tourguide',
  Notice: 'notice',
  Traffic: 'traffic',
  Medic: 'medic',
  Tourist: 'tourist',
  Vegan: 'vegan',
  Muslim: 'muslim',
  ThemeAd: 'theme_ad',
  OccupationIntro: 'occupation_intro',
  LiveStream: 'live_stream',
  VOD: 'vod',
  Regulation: 'regulation',
} as const;

export const HOST_SECTION_ENUM = {
  Skill: `#${SECTION_ID.Skill}`,
  Taipei: `#${SECTION_ID.Taipei}`,
  WDA: `#${SECTION_ID.WDA}`,
  Location: `#${SECTION_ID.Location}`,
  Traffic: `#${SECTION_ID.Traffic}`,
  Medic: `#${SECTION_ID.Medic}`,
  Tourist: `#${SECTION_ID.Tourist}`,
  Vegan: `#${SECTION_ID.Vegan}`,
  Muslim: `#${SECTION_ID.Muslim}`,
} as const;

export type HostSection = keyof typeof HOST_SECTION_ENUM;
export type HostSectionValue = typeof HOST_SECTION_ENUM[keyof typeof HOST_SECTION_ENUM];


export const COMPETITION_SECTION_ENUM = {
  Competition: `#${SECTION_ID.Competition}`,
  Schedule: `#${SECTION_ID.Schedule}`,
  Member: `#${SECTION_ID.Member}`,
  Competitor: `#${SECTION_ID.Competitor}`,
} as const;

export type CompetitionSection = keyof typeof COMPETITION_SECTION_ENUM;
export type CompetitionSectionValue = typeof COMPETITION_SECTION_ENUM[keyof typeof COMPETITION_SECTION_ENUM];

export const INVOLVED_SECTION_ENUM = {
  Sponsorship: `#${SECTION_ID.Sponsorship}`,
  Visa: `#${SECTION_ID.Visa}`,
  Forum: `#${SECTION_ID.Forum}`,
  Tourguide: `#${SECTION_ID.Tourguide}`,
  Notice: `#${SECTION_ID.Notice}`,
} as const;

export type InvolvedSection = keyof typeof INVOLVED_SECTION_ENUM;
export type InvolvedSectionValue = typeof INVOLVED_SECTION_ENUM[keyof typeof INVOLVED_SECTION_ENUM];

export const MEDIA_SECTION_ENUM = {
  Regulation: `#${SECTION_ID.Regulation}`,
  ThemeAd: `#${SECTION_ID.ThemeAd}`,
  OccupationIntro: `#${SECTION_ID.OccupationIntro}`,
  LiveStream: `#${SECTION_ID.LiveStream}`,
  VOD: `#${SECTION_ID.VOD}`,
} as const;

export type MediaSection = keyof typeof MEDIA_SECTION_ENUM;
export type MediaSectionValue = typeof MEDIA_SECTION_ENUM[keyof typeof MEDIA_SECTION_ENUM];

export type PageValue = HostSectionValue | CompetitionSectionValue | InvolvedSectionValue | MediaSectionValue;


// export const PageSectionEnum = {
//   Skill: `#${SECTION_ID.Skill}`,
//   Taipei: `#${SECTION_ID.Taipei}`,
//   WDA: `#${SECTION_ID.WDA}`,
//   Location: `#${SECTION_ID.Location}`,
//   Schedule: `#${SECTION_ID.Schedule}`,
//   Competition: `#${SECTION_ID.Competition}`,
//   Member: `#${SECTION_ID.Member}`,
//   Competitor: `#${SECTION_ID.Competitor}`,
//   Sponsorship: `#${SECTION_ID.Sponsorship}`,
//   Visa: `#${SECTION_ID.Visa}`,
//   Forum: `#${SECTION_ID.Forum}`,
//   Tourguide: `#${SECTION_ID.Tourguide}`,
//   Notice: `#${SECTION_ID.Notice}`,
//   Traffic: `#${SECTION_ID.Traffic}`,
//   Medic: `#${SECTION_ID.Medic}`,
//   Tourist: `#${SECTION_ID.Tourist}`,
//   Vegan: `#${SECTION_ID.Vegan}`,
//   Muslim: `#${SECTION_ID.Muslim}`,
// } as const;

// export type PageSection = keyof typeof PageSectionEnum;
// export type PageValue = typeof PageSectionEnum[keyof typeof PageSectionEnum];
