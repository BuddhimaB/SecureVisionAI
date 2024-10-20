// Import the default theme to extend it
import DefaultTheme from "vitepress/theme";
import "./index.css"; // Ensure you have this CSS file in the same directory for your custom styles

export default {
  ...DefaultTheme,

  // Extend the default theme with additional setup
  enhanceApp({ app, router, siteData }) {
    // You can register global components or use Vue plugins here
  },
};
