import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    lightModeColors: {
      font: {
        black: string;
        white: string;
        darkGray: string;
        gray: string;
      }
      background: {
        lightGray: string;
        gray: string;
        darkGray: string;
        white: string;
        lightBlack: string;
      }
    }

    darkModeColors: {
      font: {
        white: string;
        lightGray: string;
      }
      background: {
        body: string;
        search: string;
        black: string;
        lightGray: string;
        gray: string;
      }
    }

    sizes: {
      web: {
        smallest: string;
        small: string;
        medium: string;
        large: string;
        largest: string;
      }
      mobile: {
        smallest: string;
        small: string;
        medium: string;
        large: string;
        largest: string;
      }
    }
  }
}