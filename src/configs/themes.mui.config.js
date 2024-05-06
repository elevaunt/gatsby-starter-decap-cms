import { extendTheme } from '@mui/joy/styles';

export const brandShades = {
  green01: {
    50: "#F6FBF8",
    100: "#F0F8F2",
    200: "#E9F5ED",
    300: "#E3F1E7",
    400: "#DEEDE2",
    500: "#d8e9dd",
    600: "#CCDDCF",
    700: "#C1D0C2",
    800: "#B6C3B5",
    900: "#ABB7AA",
  },
  green02: {

    50: '#E1EDD8',
    100: '#D0E5C9',
    200: '#BDDDBA',
    300: '#ACD5B1',
    400: '#9DCDAC',
    500: '#8FC4A9',
    600: '#7CAC9E',
    700: '#6A9491',
    800: '#58787C',
    900: '#465A64',
  },
  green03: {
    50: "#E9EEEB",
    100: "#D8E1DB",
    200: "#C8D3CC",
    300: "#B7C5BC",
    400: "#A7B7AD",
    500: "#97a89d",
    600: "#8F9F93",
    700: "#879689",
    800: "#7F8D7F",
    900: "#788477",
  },
  green04: {
    25: "#DEDEDE",
    50: "#C8C8C8",
    100: "#B2B2B2",
    200: "#9B9B9B",
    300: "#858585",
    400: "#6F6F6F",
    500: "#595959",
    600: "#545454",
    700: "#4F4F4F",
    800: "#4B4B4B",
    900: "#464646",
  },
  yellow01: {
    50: '#FFF8FA',
    100: '#FFF6F6',
    200: '#FEF5F3',
    300: '#FEF5F1',
    400: '#FEF6EE',
    500: '#FDF8EC',
    600: '#DEDCCE',
    700: '#BCBEB1',
    800: '#9B9F93',
    900: '#7A7F75',
  },
  yellow11: {
    50: "#FFFEFA",
    100: "#FFFDF7",
    200: "#FFFCF4",
    300: "#FFFBF1",
    400: "#FEF9EE",
    500: "#FDF8EC",
    600: "#EFE9DF",
    700: "#E2DAD3",
    800: "#D4CBC6",
    900: "#C7BDB9",
  },
  yellow02: {
    50: "#FFFDF0",
    100: "#FFFBE5",
    200: "#FFF9DB",
    300: "#FFF6D2",
    400: "#FFF3CA",
    500: "#ffefc3",
    600: "#F1DCB9",
    700: "#E4CAAE",
    800: "#D6B8A4",
    900: "#C8A799",
  },
  orange01: {
    50: "#FFEDD1",
    100: "#FDDEAF",
    200: "#F8CE8F",
    300: "#F1BE72",
    400: "#E7AD57",
    500: "#db9c3f",
    600: "#CF843C",
    700: "#C36D38",
    800: "#B75835",
    900: "#AC4632",
  },
  brown02: {
    50: "#DFDDD7",
    100: "#C5C1B7",
    200: "#AAA698",
    300: "#8F8A79",
    400: "#736E5A",
    500: "#57513c",
    600: "#524A39",
    700: "#4E4336",
    800: "#493D32",
    900: "#44362F",
  },
  joyNeutral: {
    25: "#DEDEDE",
    50: "#C8C8C8",
    100: "#B2B2B2",
    200: "#9B9B9B",
    300: "#858585",
    400: "#6F6F6F",
    500: "#595959",
    600: "#545454",
    700: "#4F4F4F",
    800: "#4B4B4B",
    900: "#464646",
  }
};

const shadowOpacity = ".2";

const createTheme = (prefix, opts) => {
  const {primary: primaryLight, secondary: secondaryLight, background, ...paletteLight} = opts?.colorSchemes.light.palette;
  return {
    cssVarPrefix: prefix,
    colorSchemes: {
      light: {
        palette: {
          background: {
            default: "#FFFFFF",
            light: brandShades.yellow01[500],
            colored: brandShades.green01[500],
            dark: brandShades.green03[500],
            darkest: brandShades.green04[500],
            ...background,
          },
          primary: {
            ...primaryLight,
            // plain
            plainColor: `var(--${prefix}-palette-button-primary-500)`,
            plainHoverBg: `var(--${prefix}-palette-button-primary-50)`,
            plainActiveBg: `var(--${prefix}-palette-button-primary-100)`,
            plainDisabledColor: `var(--${prefix}-palette-neutral-100)`,
            // outline
            outlinedColor: `var(--${prefix}-palette-primary-500)`,
            outlinedBorder: `var(--${prefix}-palette-primary-300)`,
            outlinedHoverBg: `var(--${prefix}-palette-primary-100)`,
            outlinedActiveBg: `var(--${prefix}-palette-primary-200)`,
            outlinedDisabledColor: `var(--${prefix}-palette-neutral-100)`,
            outlinedDisabledBorder: `var(--${prefix}-palette-neutral-50)`,
            // soft
            softColor: `var(--${prefix}-palette-primary-700)`,
            softBg: `var(--${prefix}-palette-primary-100)`,
            softHoverBg: `var(--${prefix}-palette-primary-200)`,
            softActiveColor: `var(--${prefix}-palette-primary-800)`,
            softActiveBg: `var(--${prefix}-palette-primary-300)`,
            softDisabledColor: `var(--${prefix}-palette-neutral-300)`,
            softDisabledBg: `var(--${prefix}-palette-neutral-25)`,
            // solid
            solidColor: `var(--${prefix}-palette-common-white)`,
            solidBg: `var(--${prefix}-palette-button-primary-500)`,
            solidHoverBg: `var(--${prefix}-palette-button-primary-600)`,
            solidActiveBg: `var(--${prefix}-palette-button-primary-700)`,
            solidDisabledColor: `var(--${prefix}-palette-neutral-300)`,
            solidDisabledBg: `var(--${prefix}-palette-neutral-50)`,
          },
          secondary: {
            ...secondaryLight,
            // plain
            plainColor: `var(--${prefix}-palette-button-secondary-500)`,
            plainHoverBg: `var(--${prefix}-palette-button-secondary-50)`,
            plainActiveBg: `var(--${prefix}-palette-button-secondary-100)`,
            plainDisabledColor: `var(--${prefix}-palette-neutral-100)`,
            // outline
            outlinedColor: `var(--${prefix}-palette-secondary-500)`,
            outlinedBorder: `var(--${prefix}-palette-secondary-300)`,
            outlinedHoverBg: `var(--${prefix}-palette-secondary-100)`,
            outlinedActiveBg: `var(--${prefix}-palette-secondary-200)`,
            outlinedDisabledColor: `var(--${prefix}-palette-neutral-100)`,
            outlinedDisabledBorder: `var(--${prefix}-palette-neutral-50)`,
            // soft
            softColor: `var(--${prefix}-palette-secondary-700)`,
            softBg: `var(--${prefix}-palette-secondary-100)`,
            softHoverBg: `var(--${prefix}-palette-secondary-200)`,
            softActiveColor: `var(--${prefix}-palette-secondary-800)`,
            softActiveBg: `var(--${prefix}-palette-secondary-300)`,
            softDisabledColor: `var(--${prefix}-palette-neutral-300)`,
            softDisabledBg: `var(--${prefix}-palette-neutral-25)`,
            // solid
            solidColor: `var(--${prefix}-palette-common-white)`,
            solidBg: `var(--${prefix}-palette-button-secondary-500)`,
            solidHoverBg: `var(--${prefix}-palette-button-secondary-600)`,
            solidActiveBg: `var(--${prefix}-palette-button-secondary-700)`,
            solidDisabledColor: `var(--${prefix}-palette-neutral-300)`,
            solidDisabledBg: `var(--${prefix}-palette-neutral-50)`,
          },
          ...paletteLight,
        },
        // shadowRing: "0 0 #000",
        // shadowChannel: "",
        shadowOpacity: shadowOpacity,
      }
    },
    fontFamily: {
      display: 'Bebas Neue', // applies to `h1`–`h2`
      secondary: "Poppins", // applies to `h3` - `h4` and `title-*`
      tertiary: "Kalam",
      body: 'Montserrat', // applies to `body-*`
      handwriting: "kalam",
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      xl2: "2.25rem",
      xl3: "2.75rem",
      xl4: "3.25rem",
      xl5: "3.75rem",
      xl6: "4.5rem",
      xl7: "5.25rem",
    },
    radius: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px", 
      xl: "20px",
      xl2: "24px",
      xl3: "28px",
      xl4: "32px",
    },
    // shadow: {
    //   xs: `var(--${prefix}-shadowRing, 0 0 #000),0px 1px 2px 0px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity}))`,
    //   sm: `var(--${prefix}-shadowRing, 0 0 #000),0px 1px 2px 0px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity})),0px 2px 4px 0px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity}))`,
    //   md: `var(--${prefix}-shadowRing, 0 0 #000),0px 2px 8px -2px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity})),0px 6px 12px -2px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity}))`,
    //   lg: `var(--${prefix}-shadowRing, 0 0 #000),0px 2px 8px -2px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity})),0px 12px 16px -4px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity}))`,
    //   xl: `var(--${prefix}-shadowRing, 0 0 #000),0px 2px 8px -2px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity})),0px 20px 24px -4px rgba(var(--${prefix}-shadowChannel, 21 21 21) / var(--${prefix}-shadowOpacity, ${shadowOpacity}))`,
    // },
    typography: {
      h1: {
        marginBottom: "20px",
        letterSpacing: "0.01em",
      },
      h2: {
        letterSpacing: "0.01em",
      },
      h3: {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        letterSpacing: "0.01em",
        color: `var(--${prefix}-fontFamily-secondary)`,
      },
      h4: {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        letterSpacing: "0.01em",
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl7": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl6": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl5": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl4": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl3": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl2": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-xl": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-lg": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-md": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "title-sm": {
        fontFamily: `var(--${prefix}-fontFamily-secondary)`,
        color: `var(--${prefix}-palette-text-secondary)`,
      },
      "body-lg": {
        color: `var(--${prefix}-palette-text-body)`,
      },
      "body-md": {
        color: `var(--${prefix}-palette-text-body)`,
      },
      "body-sm": {
        color: `var(--${prefix}-palette-text-body)`,
      },
      "body-xs": {
        color: `var(--${prefix}-palette-text-body)`,
      }
    }, 
    components: {
      JoyButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.size === 'xl' && {
              '--Icon-fontSize': '2rem',
              '--Button-gap': '1rem',
              minHeight: 'var(--Button-minHeight, 4rem)',
              fontSize: theme.vars.fontSize.xl,
              paddingBlock: '0.5rem',
              paddingInline: '2rem',
            }),
            ...(ownerState.size === 'xl2' && {
              '--Icon-fontSize': '3rem',
              '--Button-gap': '1.5rem',
              minHeight: 'var(--Button-minHeight, 5rem)',
              fontSize: theme.vars.fontSize.xl,
              paddingBlock: '0.75rem',
              paddingInline: '2.5rem',
            }),
          }),
        },
      },
    },
  }
};

export const defaultTheme = extendTheme(createTheme("tpc-default", {
  colorSchemes: {
    light: {
      palette: {
        // neutral: brandShades.green01,
        primary: brandShades.green02,
        secondary: brandShades.orange01,
        text: {
          primary: brandShades.green04[500],
          secondary: brandShades.green02[500],
          tertiary: brandShades.orange01[500],
          body: brandShades.green04[500],
        },
        button: {
          primary: brandShades.green02,
          secondary: brandShades.orange01,
        }
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
}));

export const light = extendTheme(createTheme("tpc-light", {
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: brandShades.yellow01[500],
        },
        neutral: brandShades.green04,
        primary: brandShades.green02,
        secondary: brandShades.orange01,
        text: {
          primary: brandShades.green04[500],
          secondary: brandShades.green04[500],
          tertiary: brandShades.orange01[500],
          body: brandShades.green04[500],
        },
        button: {
          primary: brandShades.green02,
          secondary: brandShades.orange01,
        }
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
}));

export const colored = extendTheme(createTheme("tpc-colored", {
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: brandShades.green01[500],
        },
        neutral: brandShades.green04,
        primary: brandShades.green02,
        secondary: brandShades.orange01,
        text: {
          primary: brandShades.green04[500],
          secondary: brandShades.orange01[500],
          tertiary: brandShades.orange01[500],
          body: brandShades.green04[500],
        },
        button: {
          primary: brandShades.green02,
          secondary: brandShades.orange01,
        }
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
}));

export const dark = extendTheme(createTheme("tpc-dark", {
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: brandShades.green03[500],
        },
        neutral: brandShades.green04,
        primary: brandShades.green02,
        secondary: brandShades.orange01,
        text: {
          primary: brandShades.yellow02[500],
          secondary: brandShades.yellow02[500],
          tertiary: brandShades.yellow01[500],
          body: brandShades.yellow01[500],
        },
        button: {
          primary: brandShades.orange01,
          secondary: brandShades.green02,
        }
      },
    },
  },
}));

export const darkest = extendTheme(createTheme("tpc-darkest", {
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: brandShades.green04[500],
        },
        neutral: brandShades.green04,
        primary: brandShades.green02,
        secondary: brandShades.orange01,
        text: {
          primary: brandShades.yellow02[500],
          secondary: brandShades.green02[500],
          tertiary: brandShades.yellow01[500],
          body: brandShades.yellow01[500],
        },
        button: {
          primary: brandShades.green02,
          secondary: brandShades.orange01,
        }
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
}));