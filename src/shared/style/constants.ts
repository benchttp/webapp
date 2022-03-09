export const SPACINGS = [
  '0',
  '8px',
  '12px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
]

export const BORDER_RADIUS = ['0', '8px']

export enum Colors {
  PRIMARY = 'primary',
  BLACK = 'black',
  WHITE = 'white',
  GREY1 = 'grey1',
  GREY2 = 'grey2',
  GREY3 = 'grey3',
  GREEN = 'green',
  BLUE = 'blue',
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  TRANSPARENT = 'TRANSPARENT',
}

export const COLORS = {
  [Colors.PRIMARY]: '#F1B445',
  [Colors.BLACK]: '#26282E',
  [Colors.WHITE]: '#FFFBFF',
  [Colors.GREY1]: '#383B46',
  [Colors.GREY2]: '#808080',
  [Colors.GREY3]: '#C4C4C4',
  [Colors.GREEN]: '#2ECC71',
  [Colors.BLUE]: '#6D8A96',
  [Colors.POST]: '#605DE3',
  [Colors.GET]: '#0CBB52',
  [Colors.PUT]: '#097BED',
  [Colors.PATCH]: '#212121',
  [Colors.DELETE]: '#EB2013',
  [Colors.TRANSPARENT]: 'transparent',
}

export enum FontSizes {
  BASE = 'base',
  SMALL = 'small',
  LARGE = 'large',
}

export const FONT_SIZES = {
  [FontSizes.BASE]: '16px',
  [FontSizes.SMALL]: '12.8px',
  [FontSizes.LARGE]: '31.25px',
}

export enum FontFamilies {
  POPPINS = 'poppins',
  INTER = 'inter',
}

export const FONT_FAMILIES = {
  [FontFamilies.POPPINS]: "'Poppins', sans-serif",
  [FontFamilies.INTER]: "'Inter', sans-serif",
}

export enum FontWeights {
  BOLD = 'bold',
  MEDIUM = 'medium',
  SEMI = 'semi',
}

export const FONT_WEIGHTS = {
  [FontWeights.BOLD]: '700',
  [FontWeights.SEMI]: '600',
  [FontWeights.MEDIUM]: '500',
}

export const SHADOWS = ['0px 5px 10px rgba(0, 0, 0, 0.1)']

export enum ZIndexes {
  HEADER = 'header',
}

export const Z_INDEXES = {
  [ZIndexes.HEADER]: 1,
}

export enum ButtonAppearence {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}
