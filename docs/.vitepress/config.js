module.exports = {
  title: "SecureVision AI User Manual",
  description: "A complete guide for using the Smart Monitoring Platform.",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting_started.md" },
      { text: "FAQ", link: "/faq.md" },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction.md", // Ensures there is an introductory page
      },
      {
        text: "Detailed Guides",
        items: [
          { text: "Register Page", link: "/user_interface/register_page.md" },
          { text: "Login Page", link: "/user_interface/login_page.md" },
          { text: "Dashboard", link: "/user_interface/dashboard.md" },
          { text: "Add User Page", link: "/user_interface/add_user_page.md" },
          { text: "Intrusion Page", link: "/user_interface/intrusion_page.md" },
        ],
      },
      {
        text: "FAQ",
        items: [{ text: "Frequently Asked Questions", link: "/faq.md" }],
      },
    ],
  },

  head: [
    ["link", { rel: "stylesheet", href: "/styles.css" }], // Make sure to include your CSS styles
  ],
};
