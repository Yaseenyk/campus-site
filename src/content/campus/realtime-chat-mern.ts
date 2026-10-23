import type { CampusProject } from "@/lib/campus";

export const realtimeChatMern: CampusProject = {
  slug: "realtime-chat-mern",
  title: "Real-Time Chat App — MERN + Socket.IO with presence",
  category: "Web Development · Real-Time",
  tagline:
    "Actual websockets — typing indicators, online presence, and messages that arrive in order.",
  summary:
    "Most chat projects poll an API on a timer and call it real-time; they lag, they duplicate messages, and they fall apart the moment two people type at once. This one uses Socket.IO for a genuine push connection — one-to-one and group chats, typing indicators, online and last-seen presence, delivery and read receipts, and history that persists and paginates. It survives the question every panel asks: how do you know a message actually arrived, and in the right order?",
  degrees: ["BCA", "MCA", "B.Tech", "B.Sc IT"],
  domain: "Web Development",
  stack: [
    "React",
    "Node.js",
    "Express",
    "Socket.IO",
    "MongoDB",
    "JWT",
    "Zustand",
  ],
  features: [
    "One-to-one and group chats over a real websocket connection",
    "Typing indicators and online / last-seen presence",
    "Delivery and read receipts per message",
    "Message history persisted in MongoDB and paginated on scroll",
    "Authentication carried into the socket layer, not just the REST API",
    "A chat list that reorders as new messages arrive",
  ],
  modules: [
    "Why websockets, not polling — and what Socket.IO gives you",
    "Rooms, events, and the connection lifecycle",
    "Presence and typing indicators without hammering the server",
    "Message ordering, delivery, and persisting history",
    "Authenticating a socket and mapping users to connections",
    "The React chat UI and keeping state in sync with events",
    "Scaling notes: the Redis adapter and horizontal sockets",
    "Deployment and a full mock viva on the real-time design",
  ],
  deepDive: {
    "howItWorks": [
      "After login over REST, the React client opens a Socket.IO connection and sends its JWT in the handshake. The server verifies the token in connection middleware and attaches the user id to the socket, so every later event is tied to a real identity and an unauthenticated client never gets a socket at all.",
      "Each conversation is a Socket.IO room. Sending a message emits an event to the server, which saves it to MongoDB first and only then broadcasts it to the room with its database id and server timestamp. The sender's client shows the message immediately as pending and replaces it with the saved version when the acknowledgement returns.",
      "Presence is a map of user id to the set of connected socket ids, because one person can have two tabs open. A user is online while that set is non-empty; on the last disconnect the server records last-seen and tells their contacts. Typing indicators are short-lived events that are never stored."
    ],
    "data": "Users, conversations (participants array, a type of direct or group, and a lastMessage summary for the chat list) and messages (conversation id, sender, body, createdAt, deliveredTo and readBy arrays). A compound index on conversation id and createdAt makes loading history in pages of 30 a cheap range query.",
    "hardParts": [
      {
        "title": "One user, many sockets",
        "body": "Treating a socket as a user breaks presence the moment someone opens a second tab. Tracking a set of sockets per user and marking them offline only when the set empties fixes it."
      },
      {
        "title": "Message order and duplicates",
        "body": "Clients reconnect and resend. Each outgoing message carries a client-generated id, and the server ignores a repeat of an id it already stored, so a flaky network does not produce double messages."
      },
      {
        "title": "Paginating while new messages arrive",
        "body": "Offset pagination shifts when new rows are added. History is loaded with a cursor, messages older than the oldest one on screen, so scrolling up never skips or repeats a message."
      }
    ],
    "viva": [
      {
        "question": "Why Socket.IO instead of polling the REST API?",
        "answer": "Polling asks the server every few seconds whether anything changed, which wastes requests and adds delay. A websocket keeps one connection open so the server pushes a message the moment it is saved."
      },
      {
        "question": "How is the socket connection authenticated?",
        "answer": "The client passes its JWT in the handshake auth payload, and server middleware verifies it before accepting the connection. A failed check rejects the socket outright."
      },
      {
        "question": "How do read receipts work?",
        "answer": "When a message is rendered in an open conversation, the client emits a read event with the message id. The server adds the user to readBy and notifies the sender, whose UI changes the tick."
      },
      {
        "question": "What happens to messages sent while a user is offline?",
        "answer": "They are stored in MongoDB regardless. When the user reconnects, the client fetches anything newer than its last message, so nothing depends on the user being online at send time."
      },
      {
        "question": "How would this scale to several servers?",
        "answer": "Rooms live in one server's memory, so with more than one instance you add the Socket.IO Redis adapter, which relays broadcasts between servers so users on different instances still reach each other."
      }
    ]
  },
  difficulty: "Intermediate",
  sessionCount: 8,
  prices: { source: 5500, academic: 10000, mentored: 16000 },
  seatsPerCollege: 2,
  publishedAt: "2026-07-27",
};
