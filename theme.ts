export const theme = {
    colors: {
        text: "#525252",
    },
    space: {
        xs: "5px",
        sm: "10px",
        default: "12px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
        x3: "40px",
        x4: "48px",
        x5: "64px",
        x6: "80px",
    },

    sizes: {
        authBox: "280px",
        navbarWidth: "50px",
        labelTitle: "120px",
        sidebarWidth: "320px",
        extendedSidebarWidth: "640px",
        modalMd: "800px",
        modalSm: "500px",
        icon: "40px",
        userpic: "30px",
        floatBtn: "48px",
        toggleBtn: "50px",
        searchInput: "260px",
    },

    fonts: {
        body:
            '"Arial", Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "inherit",
        monospace: "Menlo, monospace",
        sidebar: "inherit",
    },

    fontSizes: {
        xs: "10px",
        sm: "12px",
        default: "14px",
        lg: "16px",
        xl: "18px",
        h4: "24px",
        h3: "28px",
        h2: "32px",
        h1: "40px",
    },

    fontWeights: {
        lighter: 300,
        body: 400,
        normal: 400,
        medium: 500,
        heading: 600,
        bold: 700,
    },

    lineHeights: {
        sm: "12px",
        default: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "40px",

        body: 1.5,
        heading: 1.125,
    },

    styles: {
        root: {
            fontFamily: "body",
            fontWeight: "body",
        },
    },
    Heading: {
        h1: {
            margin: "0",
            fontsize: "h1",
            lineHeight: "xxl",
        },
        h2: {
            margin: "0",
            fontsize: "h2",
            lineHeight: "xl",
        },
        h3: {
            margin: "0",
            fontsize: "h3",
            lineHeight: "lg",
        },
        h4: {
            margin: "0",
            fontsize: "h4",
            lineHeight: "lg",
        },
        h5: {
            margin: "0",
            fontsize: "h1xl",
            lineHeight: "lg",
        },
        h6: {
            margin: "0",
            fontsize: "lg",
            lineHeight: "lg",
        },
        title: {
            marginBottom: "lg",
            fontWeight: "medium",
        },
    },
    text: {
        default: {
            fontSize: "default",
            marginLeft: "sm"
        }
    },

    cards: {
        primary: {
            padding: 4,
            borderRadius: 4,
            boxShadow: "0px 12px 16px rgb(0 0 0 / 50%)",
            backgroundColor: "white",
            marginBottom: 8,
        },
    },
};

export type ThemeType = typeof theme;
