// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      foreground: string;
      background: string;
      red: string;
      yellow: string;
      blue: string;
    };
  }
}
