declare const themeConfig: {
    light: {
        palette: {
            type: string;
            primary: {
                main: string;
                light: string;
                dark: string;
            };
            secondary: {
                main: "#e91e63";
            };
            background: {
                default: string;
                paper: string;
            };
            text: {
                primary: "#212121";
                secondary: "#616161";
                disabled: "#9e9e9e";
            };
            divider: string;
            action: {
                active: string;
                hover: string;
                selected: string;
                disabled: string;
                disabledBackground: string;
            };
            contrastThreshold: number;
            info: {
                main: string;
                contrastText: string;
            };
        };
    };
    dark: {
        border: {
            default: string;
            hover: string;
            active: string;
            main: string;
        };
        palette: {
            type: string;
            divider: string;
            primary: {
                main: string;
            };
            secondary: {
                main: "#f5f5f5";
            };
            tertiary: {
                main: string;
            };
            background: {
                default: "#424242";
                paper: string;
            };
            text: {
                primary: "#f5f5f5";
                secondary: "#9e9e9e";
                disabled: "#e0e0e0";
            };
            button: {
                primary: "#f5f5f5";
                secondary: "#9e9e9e";
                disabled: "#e0e0e0";
            };
            info: {
                main: "#2196f3";
                contrastText: "#f5f5f5";
            };
        };
    };
    common: {
        typography: {
            fontSize: number;
            fontFamily: string;
        };
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
        };
        overrides: {
            MuiCssBaseline: {
                "@global": {
                    "#root": {
                        minHeight: string;
                        display: string;
                        flexDirection: string;
                        "& > *": {
                            flexShrink: number;
                        };
                    };
                };
            };
        };
    };
};
export { themeConfig };
