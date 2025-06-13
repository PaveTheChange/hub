import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  channelsSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Million Dreams",
    },
    {
      type: "doc",
      id: "channels/updates",
      label: "📣 Updates",
    },
    {
      type: "doc",
      id: "channels/join-circles",
      label: "🌐 Join Circles",
    },
    {
      type: "doc",
      id: "channels/give-kudos",
      label: "🎁 Give Kudos",
    },
    {
      type: "doc",
      id: "channels/events",
      label: "🗓️ Events",
    },
    {
      type: "html",
      value: '<hr class="sidebar-hr" />',
      defaultStyle: true,
    },
    {
      type: "category",
      label: "🗂️ Connect",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "channels/my-focus-this-week",
          label: "🎯 My Focus This Week",
        },
        {
          type: "doc",
          id: "channels/i-am-stuck",
          label: "🤯 I Am Stuck",
        },
        {
          type: "doc",
          id: "channels/share",
          label: "🍕 Share",
        },
        {
          type: "doc",
          id: "channels/tea-break",
          label: "☕️ Tea Break",
        },
        {
          type: "doc",
          id: "channels/hangout",
          label: "🛋️ Hangout",
        },
      ],
    },
    {
      type: "category",
      label: "🗂️ Circles",
      items: [
        {
          type: "doc",
          id: "circles/trust-protocol",
          label: "🛡️ Trust Protocol",
        },
        {
          type: "doc",
          id: "circles/fortyfour-stories",
          label: "📗 44 Stories",
        },
      ],
    },
  ],
};

export default sidebars;
