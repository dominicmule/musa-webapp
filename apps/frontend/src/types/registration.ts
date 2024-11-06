export interface Ward {
  name: string;
  constituency: string;
}

export interface Constituency {
  name: string;
  wards: string[];
}

export const constituencies: Record<string, string[]> = {
  'Mbooni': [
    'Tulimani',
    'Mbooni',
    'Kithungo-Kitundu',
    'Kiteta-Kisau',
    'Waia-Kako',
    'Kalawa'
  ],
  'Kilome': [
    'Kasikeu',
    'Mukaa',
    'Kiima Kiu-Kalanzoni'
  ],
  'Kaiti': [
    'Ukia',
    'Kee',
    'Kilungu',
    'Ilima'
  ],
  'Makueni': [
    'Wote',
    'Muvau-Kikuumini',
    'Mavindini',
    'Kitise-Kithuki',
    'Kathonzweni',
    'Nzau-Kilili-Kalamba',
    'Mbitini'
  ],
  'Kibwezi West': [
    'Makindu',
    'Nguumo',
    'Kikumbulyu North',
    'Kikumbulyu South',
    'Nguu-Masumba',
    'Emali-Mulala'
  ],
  'Kibwezi East': [
    'Masongaleni',
    'Mtito Andei',
    'Thange',
    'Ivingoni-Nzambani'
  ]
};

export const universities = [
  'University of Nairobi',
  'Kenyatta University',
  'Jomo Kenyatta University',
  'Moi University',
  'Egerton University',
  'Maseno University',
  'Technical University of Kenya',
  'Technical University of Mombasa',
  // Add more universities as needed
];

export const academicLevels = [
  'Certificate',
  'Diploma',
  "Bachelor's",
  'Masters',
  'Doctorate'
] as const;

export const graduationYears = Array.from(
  { length: 21 },
  (_, i) => 2010 + i
);