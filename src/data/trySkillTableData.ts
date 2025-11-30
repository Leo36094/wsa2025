// Try a Skill separate tables data based on PDF
export interface TrySkillTableItem {
  companyName: string
  experienceActivity: string
  location: string
}

export interface TrySkillTableGroup {
  tableNumber: number
  items: TrySkillTableItem[]
}

// Traditional Chinese data - 8 separate tables
export const trySkillTablesDataTw: TrySkillTableGroup[] = [
  {
    tableNumber: 1,
    items: [
      { companyName: '常舜貿易股份有限公司', experienceActivity: '產品性能、用途說明、親手測試', location: '南港二館一樓' },
      { companyName: 'Siemens Taiwan Limited', experienceActivity: '工業3D軟體體驗', location: '南港二館一樓' },
      { companyName: '喜利得股份有限公司', experienceActivity: '工具體驗', location: '南港二館一樓' }
    ]
  },
  {
    tableNumber: 2,
    items: [
      { companyName: '志鋼金屬股份有限公司', experienceActivity: '金屬創意DIY手作體驗', location: '南港二館一樓' },
      { companyName: '國立臺北科技大學', experienceActivity: '焊接手臂體驗', location: '南港二館一樓' },
      { companyName: '凱士士企業股份有限公司', experienceActivity: '重複使用造型紮線帶', location: '南港二館一樓' },
      { companyName: '台灣發那科股份有限公司', experienceActivity: '協作型機器人', location: '南港二館一樓' },
      { companyName: '中鋼焊材廠股份有限公司', experienceActivity: '體驗銲接實作：量測、裁切、折彎', location: '南港二館一樓' },
      { companyName: '台灣三豐儀器股份有限公司', experienceActivity: '體驗精密量測工具使用', location: '南港二館一樓' }
    ]
  },
  {
    tableNumber: 3,
    items: [
      { companyName: '聯造實業有限公司', experienceActivity: '3D列印手機架的實際列印及組裝', location: '南港二館一樓' },
      { companyName: 'Studica Limited x ReMiSYS 瑞明系統科技', experienceActivity: '機器人遙控車', location: '南港二館一樓' }
    ]
  },
  {
    tableNumber: 4,
    items: [
      { companyName: '臺大生物資源暨農學院實驗林管理處', experienceActivity: '檜木筷子製作', location: '南港二館四樓' },
      { companyName: '梵莎爾企業股份有限公司', experienceActivity: '體驗芳香精油調香、乾洗手', location: '南港二館四樓' },
      { companyName: '起點設計股份有限公司', experienceActivity: '3D列印筆實作體驗', location: '南港二館四樓' }
    ]
  },
  {
    tableNumber: 5,
    items: [
      { companyName: '互榮行(益源工具行)', experienceActivity: '木工鋸切體驗、手機架製作', location: '南港一館一樓' },
      { companyName: 'RootMe Pro', experienceActivity: '撬鎖工具體驗', location: '南港一館一樓' },
      { companyName: '寶工實業股份有限公司', experienceActivity: '三用電表操作體驗', location: '南港一館一樓' },
      { companyName: '鼎志電子股份有限公司', experienceActivity: '銅纜與光纖網路佈線系統實作', location: '南港一館一樓' }
    ]
  },
  {
    tableNumber: 6,
    items: [
      { companyName: '允禾發國際有限公司', experienceActivity: '安全防護鞋拆解體驗', location: '南港一館一樓' },
      { companyName: '匠將室內裝修設計股份有限公司', experienceActivity: '馬賽克磁磚DIY體驗課程', location: '南港一館一樓' },
      { companyName: '登馳國際有限公司', experienceActivity: '鎖螺絲結合木材：趣味遊戲、闖關', location: '南港一館一樓' },
      { companyName: '丹佛斯股份有限公司', experienceActivity: '冷凍與空調管路元件介紹', location: '南港一館一樓' },
      { companyName: '樹德企業股份有限公司', experienceActivity: '板金凹折體驗', location: '南港一館一樓' }
    ]
  },
  {
    tableNumber: 7,
    items: [
      { companyName: 'GreenControls Technology Sdn Bhd', experienceActivity: 'KNX設備編程、佈線體驗', location: '南港一館一樓' }
    ]
  },
  {
    tableNumber: 8,
    items: [
      { companyName: '新加坡商實耐寶股份有限公司', experienceActivity: '互動式遊戲、問答式互動', location: '南港一館一樓' },
      { companyName: '新綸實業股份有限公司', experienceActivity: 'GPR膠拉體驗', location: '南港一館一樓' },
      { companyName: '宗年國際行銷股份有限公司', experienceActivity: '塗膜缺陷拋光DIY', location: '南港一館一樓' },
      { companyName: '船井塗料有限公司', experienceActivity: '產品試用體驗', location: '南港一館一樓' },
      { companyName: '裕景實業股份有限公司', experienceActivity: '卡威士水性可撕膜', location: '南港一館一樓' }
    ]
  }
]

// English data - 8 separate tables
export const trySkillTablesDataEn: TrySkillTableGroup[] = [
  {
    tableNumber: 1,
    items: [
      { companyName: 'CHARNG SHUN TRADING CO., LTD.', experienceActivity: 'Product performance and usage demonstration with hands-on testing', location: 'Nangang Hall 2, 1F' },
      { companyName: 'Siemens Taiwan Limited', experienceActivity: 'Industrial 3D software experience', location: 'Nangang Hall 2, 1F' },
      { companyName: 'Hilti Taiwan Company Ltd', experienceActivity: 'Tool experience', location: 'Nangang Hall 2, 1F' }
    ]
  },
  {
    tableNumber: 2,
    items: [
      { companyName: 'CHIH KANG MATERIAL COMPANY LTD.', experienceActivity: 'Creative metal DIY workshop', location: 'Nangang Hall 2, 1F' },
      { companyName: 'National Taipei University of Technology', experienceActivity: 'Welding robot arm experience', location: 'Nangang Hall 2, 1F' },
      { companyName: 'KAI SUH SUH ENTERPRISE CO., LTD.', experienceActivity: 'Reusable decorative cable ties', location: 'Nangang Hall 2, 1F' },
      { companyName: 'FANUC', experienceActivity: 'Collaborative robot experience', location: 'Nangang Hall 2, 1F' },
      { companyName: 'GOODWELD CORPORATION', experienceActivity: 'Welding practice: measurement, cutting, and bending', location: 'Nangang Hall 2, 1F' },
      { companyName: 'MITUTOYO TAIWAN CO., LTD.', experienceActivity: 'Precision measurement tool experience', location: 'Nangang Hall 2, 1F' }
    ]
  },
  {
    tableNumber: 3,
    items: [
      { companyName: 'LINKIN FACTORY CO., LTD.', experienceActivity: '3D printing and assembly of mobile phone stands', location: 'Nangang Hall 2, 1F' },
      { companyName: 'Studica Limited x ReMiSYS', experienceActivity: 'Robot remote-controlled car', location: 'Nangang Hall 2, 1F' }
    ]
  },
  {
    tableNumber: 4,
    items: [
      { companyName: 'Experimental Forest of National Taiwan University', experienceActivity: 'Hinoki chopsticks making', location: 'Nangang Hall 2, 4F' },
      { companyName: 'VASAILL', experienceActivity: 'Essential oil blending and hand sanitizer making', location: 'Nangang Hall 2, 4F' },
      { companyName: 'Kiden Trading Company Ltd.', experienceActivity: '3D printing pen experience', location: 'Nangang Hall 2, 4F' }
    ]
  },
  {
    tableNumber: 5,
    items: [
      { companyName: 'HR', experienceActivity: 'Woodworking sawing experience, phone holder making', location: 'Nangang Hall 1, 1F' },
      { companyName: 'RootMe Pro', experienceActivity: 'Lock-picking tool experience', location: 'Nangang Hall 1, 1F' },
      { companyName: 'PROKIT\'S INDUSTRIES CO., LTD.', experienceActivity: 'Multimeter operation experience', location: 'Nangang Hall 1, 1F' },
      { companyName: 'Dintek Electronic Ltd', experienceActivity: 'Copper cable and fiber-optic network cabling practice', location: 'Nangang Hall 1, 1F' }
    ]
  },
  {
    tableNumber: 6,
    items: [
      { companyName: 'HARVEST FUN INTERNATIONAL CORPORATION LIMITED', experienceActivity: 'Safety shoes disassembly experience', location: 'Nangang Hall 1, 1F' },
      { companyName: 'JIANG-JIANG', experienceActivity: 'Mosaic tile DIY workshop', location: 'Nangang Hall 1, 1F' },
      { companyName: 'TENZ INTERNATIONAL LIMITED', experienceActivity: 'Screw fastening with wood: fun challenge game', location: 'Nangang Hall 1, 1F' },
      { companyName: 'Danfoss Co.,Ltd.', experienceActivity: 'Introduction to refrigeration and air-conditioning pipeline components', location: 'Nangang Hall 1, 1F' },
      { companyName: 'SHUTER ENTERPRISE CO., LTD.', experienceActivity: 'Sheet metal bending experience', location: 'Nangang Hall 1, 1F' }
    ]
  },
  {
    tableNumber: 7,
    items: [
      { companyName: 'GreenControls Technology Sdn Bhd', experienceActivity: 'KNX equipment programming and wiring experience', location: 'Nangang Hall 1, 1F' }
    ]
  },
  {
    tableNumber: 8,
    items: [
      { companyName: 'SNAP-ON TOOLS SINGAPORE PTE. LTD. (TAIWAN BRANCH)', experienceActivity: 'Interactive game and quiz activities', location: 'Nangang Hall 1, 1F' },
      { companyName: 'SINEWS W&H CO., LTD.', experienceActivity: 'GPR adhesive pulling experience', location: 'Nangang Hall 1, 1F' },
      { companyName: 'P&G INTERNATIONAL MARKETING CO.,LTD.', experienceActivity: 'Coating defect polishing DIY', location: 'Nangang Hall 1, 1F' },
      { companyName: 'Shipwell Enterprise Co., Ltd.', experienceActivity: 'Product testing experience', location: 'Nangang Hall 1, 1F' },
      { companyName: 'YUEA CHING BUSINESS CO., LTD.', experienceActivity: 'Kaviss water-based peelable coating', location: 'Nangang Hall 1, 1F' }
    ]
  }
]

// Headers for i18n
export const trySkillTableHeaders = {
  zh: {
    companyName: '廠商名稱',
    experienceActivity: '體驗項目',
    location: '位置'
  },
  en: {
    companyName: 'Company Name',
    experienceActivity: 'Experience Activity',
    location: 'Location'
  }
}

