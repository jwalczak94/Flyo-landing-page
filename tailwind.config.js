module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        input: ["2px 3px 6px rgba(0, 0, 0, 0.16)"],
        testimonial: ["0px 0px 8px 4px rgba(56, 56, 56, 0.046)"],
      },
      colors: {
        primaryColor: "#07043B",
        secondaryColor: "#615F7E",
        btnColor: "#2F65F8",
        linkColor: "#3DA08F",
        linkColorHover: "#71DFCC",
        accenctColor: "#6C9BFF",
        warningColor: "#EF4877",
        lightGrey: "#C2C2C2",
        bgColor100: "#F8F8FE",
        bgColor400: "#575988",
        bgColor900: "#07043B",
      },
      fontFamily: {
        headingFont: ["Raleway", "sans-serif"],
        bodyFont: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        textIcons: ["0.875rem"],
        textBase: ["1rem"],
        textInput: ["0.75rem"],
        xs: ["0.625rem"],
        sm: [
          "clamp(0.75rem, 0.662rem + 0.3756vw, 1rem);",
          {
            LineHeight: "1.17",
          },
        ],
        base: [
          "clamp(0.875rem, 0.831rem + 0.1878vw, 1rem)",
          {
            LineHeight: "1.5",
          },
        ],
        baseHeader: [
          "clamp(0.875rem, 0.809rem + 0.2817vw, 1.0625rem);",
          {
            LineHeight: "1.5",
          },
        ],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
