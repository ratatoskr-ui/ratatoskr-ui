const blue = {
  // Blue
  blue01: '#e7f5ff',
  blue02: '#d0ebff',
  blue03: '#a5d8ff',
  blue04: '#74c0fc',
  blue05: '#4dabf7',
  blue06: '#339af0',
  blue07: '#228be6',
  blue08: '#1c7ed6',
  blue09: '#1971c2',
  blue10: '#1864ab',
};

const indigo = {
  // Indigo
  indigo01: '#f3f0ff',
  indigo02: '#e5dbff',
  indigo03: '#d0bfff',
  indigo04: '#b197fc',
  indigo05: '#9775fa',
  indigo06: '#845ef7',
  indigo07: '#7950f2',
  indigo08: '#7048e8',
  indigo09: '#6741d9',
  indigo10: '#5f3dc4',
};

const turquoise = {
  // Turquoise
  turquoise01: '#e3fafc',
  turquoise02: '#c5f6fa',
  turquoise03: '#99e9f2',
  turquoise04: '#66d9e8',
  turquoise05: '#3bc9db',
  turquoise06: '#22b8cf',
  turquoise07: '#15aabf',
  turquoise08: '#1098ad',
  turquoise09: '#0c8599',
  turquoise10: '#0b7285',
};

const green = {
  // Green
  green01: '#e6fcf5',
  green02: '#c3fae8',
  green03: '#96f2d7',
  green04: '#63e6be',
  green05: '#38d9a9',
  green06: '#20c997',
  green07: '#20c997',
  green08: '#0ca678',
  green09: '#099268',
  green10: '#087f5b',
};

const yellow = {
  // Yellow
  yellow01: '#fff9db',
  yellow02: '#fff3bf',
  yellow03: '#ffec99',
  yellow04: '#ffe066',
  yellow05: '#ffd43b',
  yellow06: '#fcc419',
  yellow07: '#fab005',
  yellow08: '#f59f00',
  yellow09: '#f08c00',
  yellow10: '#e67700',
};

const red = {
  // Red
  red01: '#fff5f5',
  red02: '#ffe3e3',
  red03: '#ffc9c9',
  red04: '#ffa8a8',
  red05: '#ff8787',
  red06: '#ff6b6b',
  red07: '#fa5252',
  red08: '#f03e3e',
  red09: '#e03131',
  red10: '#c92a2a',
};

const greyLegacy = {
  // Grey (legacy)
  grey01: '#ffffff',
  grey02: '#f7f8f9',
  grey03: '#ebedef',
  grey04: '#d7dbdf',
  grey05: '#b0b7bf',
  grey06: '#89949f',
  grey07: '#62707f',
  grey08: '#313f4e',
  grey09: '#253648',
  grey10: '#1e2b3a',
};

const grey = {
  greylight01: '#FFFFFF',
  greylight02: '#FAFBFD',
  greylight03: '#F5F6F8',
  greylight04: '#E5EAEF',
  greylight05: '#C6D0DB',
  greymed01: '#B0B7BF',
  greymed02: '#949DA7',
  greymed03: '#758495',
  greymed04: '#6A7A8A',
  greymed05: '#62707F',
  greydark01: '#3C4D5F',
  greydark02: '#313F4E',
  greydark03: '#2A3643',
  greydark04: '#232D38',
  greydark05: '#181E25',
};

/** Color pallette derived from https://yeun.github.io/open-color/ */
const colors = {
  white: '#fff',
  black: '#000',

  ...blue,
  ...indigo,
  ...turquoise,
  ...green,
  ...yellow,
  ...red,
  ...greyLegacy,
  ...grey,

  // Core tokens
  bg: greyLegacy.grey01,
  'bg-secondary': greyLegacy.grey02,
};

export type Colors = typeof colors;

export default colors;
