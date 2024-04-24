import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        merchants: {
            onBgColor: string;
            onColor: string;
            offBgColor: string;
            offColor: string;
        };
        ku: {
            bgColor: string; // #000000
            color: string; // #9C8871
            theme: {
                themeIndex: string; // #BFA88E
                bgColor: string; // #000000
                color: string; // #000000
            };
        };
    }
}
