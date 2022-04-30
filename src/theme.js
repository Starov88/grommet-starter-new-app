const theme = {
    global: {
        colors: {
            brand: '#47290F',
            "brand-1": '#CC9955',
            border: "brand",
            text: "brand",
            // control: { dark: "brand", light: "brand" }
        },
        font: {
            family: 'Caveat',
            size: '22px',
            height: '24px',
        },
        hover: {
            background: {
                color: { dark: "light-4", light: "light-4" },
                opacity: .3
            },
            color: { dark: "brand-1", light: "brand-1" }
        },
        active: {
            background: {
                color: { dark: "light-4", light: "light-4" },
                opacity: .3
            },
            color: { dark: "brand-1", light: "brand-1" }
        }
    },
    text: {
        medium: {
            size: '22px',
            height: '24px'
        }
    },
    button: {
        hover: {
            background: {
                color: { dark: "brand", light: "brand" },
                opacity: .9
            },
            border: {
                color: { dark: "brand", light: "brand" }
            },
            color: { dark: "brand-1", light: "brand-1" }
        },
        active: {
            background: {
                color: "none",
                opacity: 1
            },
            border: {
                color: { dark: "brand", light: "brand" },
                radius: "18px",
                width: "2px"
            },
            color: { dark: "brand", light: "brand" },
            font: {
                weight: "bold"
            },
            padding: {
                vertical: "4px",
                horizontal: "50px"
            },
        },
        default: {},
        primary: {
            background: {
                color: "brand",
                opacity: 1
            },
            border: {
                color: { dark: "brand", light: "brand" },
                radius: "18px",
                width: "2px"
            },
            color: { dark: "brand-1", light: "brand-1" },
            font: {
                weight: "bold"
            },
            padding: {
                vertical: "4px",
                horizontal: "30px"
            },
        },
        secondary: {
            background: {
                color: "none",
                opacity: 1
            },
            border: {
                color: { dark: "brand", light: "brand" },
                radius: "18px",
                width: "2px"
            },
            color: { dark: "brand", light: "brand" },
            font: {
                weight: "bold"
            },
            padding: {
                vertical: "4px",
                horizontal: "30px"
            }
        }
    },
    checkBox: {
        border: {
            color: "brand",
            width: "2px"
        },
        check: {
            extend: "",
            radius: "4px",
            thickness: "2px",

        },
        color: "brand",
        extend: "",
        gap: "small",
        hover: {
            border: {
                color: "brand",
                background: {
                    color: { dark: "brand", light: "brand" }
                }
            }
        },
        size: "18px",
        toggle: {
            background: "brand",
            color: "light-1",
            extend: "",
            radius: "24px",
            size: "48px"
        }
    },
    menu: {
        icons: {
            color: "light-1"
        },
        background: "brand-1",
        extend: ""
    }
};

export default theme;