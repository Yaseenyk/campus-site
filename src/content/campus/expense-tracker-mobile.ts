import type { CampusProject } from "@/lib/campus";

export const expenseTrackerMobile: CampusProject = {
  slug: "expense-tracker-mobile",
  title: "Smart Expense Tracker — offline-first mobile app",
  category: "Mobile · React Native",
  tagline:
    "A real Android app that works with the internet off, and auto-categorises what you spend.",
  summary:
    "Most mobile projects are a form over an API and die when the campus wifi drops during the demo. This one stores everything in on-device SQLite, works fully offline, and syncs when a connection returns. Expenses are auto-categorised from the merchant text, budgets raise alerts before they are breached, and the charts are computed from real queries rather than hardcoded arrays. It installs on the examiner's phone.",
  degrees: ["BCA", "MCA", "B.Tech", "B.Sc IT"],
  domain: "Mobile Application",
  stack: [
    "React Native (Expo)",
    "TypeScript",
    "SQLite",
    "Zustand",
    "Victory Native",
    "Node.js",
    "Express",
  ],
  features: [
    "Add, edit, and delete expenses entirely offline — no network required",
    "Auto-categorisation of expenses from merchant and note text",
    "Monthly budgets per category with alerts before the limit is crossed",
    "Charts for spend by category and trend over time, from live queries",
    "Background sync to a Node backend once a connection returns",
    "Export a monthly statement as CSV",
  ],
  modules: [
    "Why offline-first, and what that forces in the architecture",
    "Expo project structure, navigation, and screen composition",
    "The SQLite layer — schema, migrations, and typed queries",
    "State with Zustand, and keeping the UI in sync with the database",
    "Categorisation logic and the budget alert engine",
    "The sync protocol: queueing writes and resolving conflicts",
    "Charts, building the APK, and mock viva on the offline design",
  ],
  deepDive: {
    "howItWorks": [
      "Every expense is written to an SQLite database on the phone first, so adding, editing and deleting work with no network at all. Each row carries a client-generated id, an updatedAt timestamp and a dirty flag that marks it as not yet synced.",
      "Categories are suggested from the merchant and note text using keyword rules, and the app remembers corrections: if the user moves a merchant to a different category once, the next expense from that merchant is categorised the same way. Budgets per category are compared with the month's total after every insert, and a local notification fires at 80 per cent.",
      "When the phone is back online, the sync step sends dirty rows to the Node API and pulls rows changed on the server since the last sync. Charts are drawn with Victory Native from SQL aggregate queries, so they always reflect the data on the device."
    ],
    "data": "SQLite tables for expenses, categories, budgets and a sync metadata row holding the last sync time. The server keeps the same records per user, keyed by the client-generated id so that the same expense is never created twice. A monthly statement is exported as CSV through the share sheet.",
    "hardParts": [
      {
        "title": "Offline first, not offline as a fallback",
        "body": "The UI reads and writes only the local database; the network is a background concern. That is why the app feels instant and never shows a spinner for adding an expense."
      },
      {
        "title": "Sync conflicts",
        "body": "The same expense can be edited on two devices. The project uses last-write-wins on updatedAt and keeps deletes as tombstones, so a deleted row on one device is not resurrected by the other."
      },
      {
        "title": "IDs without a server",
        "body": "Auto-increment ids clash across devices. UUIDs generated on the phone give every expense a unique identity before the server ever sees it."
      }
    ],
    "viva": [
      {
        "question": "What does offline-first mean?",
        "answer": "The app treats the local database as the primary store and syncs with the server when it can, instead of needing the server for every action. The user never waits for the network."
      },
      {
        "question": "How are sync conflicts resolved?",
        "answer": "Last write wins, comparing updatedAt timestamps. Deletes are stored as tombstones with a deleted flag, so the deletion itself syncs instead of the row simply vanishing."
      },
      {
        "question": "Why SQLite and not AsyncStorage?",
        "answer": "AsyncStorage is a key-value store, so monthly totals per category would need the app to load and sum everything in JavaScript. SQLite runs those aggregates as queries with indexes."
      },
      {
        "question": "Why Zustand for state?",
        "answer": "It is small, needs no provider boilerplate, and the store here only holds UI state and a cache of query results. The real data lives in SQLite."
      },
      {
        "question": "How does auto-categorisation work?",
        "answer": "Keyword rules map merchant and note text to categories, and the user's corrections are saved as merchant-to-category overrides that take priority next time. It is deliberately rule-based, so its decisions can be explained."
      }
    ]
  },
  difficulty: "Intermediate",
  sessionCount: 7,
  prices: { source: 5000, academic: 9000, mentored: 15000 },
  seatsPerCollege: 2,
  publishedAt: "2026-07-27",
};
