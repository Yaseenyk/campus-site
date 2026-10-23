import type { CampusProject } from "@/lib/campus";

export const ecommerceMern: CampusProject = {
  slug: "ecommerce-mern",
  title: "E-Commerce Platform — MERN stack with a real cart & checkout",
  category: "Web Development · MERN",
  tagline:
    "A full store with a cart that survives a refresh, real stock, and a working checkout.",
  summary:
    "Most e-commerce projects are a product grid with a Buy button that does nothing, and they collapse the moment an examiner asks what happens when two people buy the last item. This one keeps the cart on the server so it survives refresh and login, decrements stock so it can never oversell, and runs a real Razorpay test-mode checkout that produces an order you can open in an admin panel. It behaves like a shop, not a screenshot.",
  degrees: ["BCA", "MCA", "B.Tech", "B.Sc IT"],
  domain: "Web Development",
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux Toolkit",
    "JWT",
    "Razorpay (test mode)",
  ],
  features: [
    "Product catalogue with search, category filters, and pagination",
    "Server-side cart that persists across refresh, logout, and device",
    "Stock decremented safely so two buyers can never oversell the last unit",
    "Razorpay test-mode checkout with an order confirmation and receipt",
    "Per-user order history with status tracking",
    "Admin panel to manage products, stock, and incoming orders",
  ],
  modules: [
    "Architecture — why MERN, the auth flow, and how the layers talk",
    "MongoDB schema: products, users, cart, and orders",
    "JWT authentication and protected routes, front and back",
    "Cart logic and the oversell problem — why stock lives on the server",
    "Razorpay test integration and verifying the payment callback",
    "The admin panel: product CRUD and order management",
    "React + Redux Toolkit UI, and keeping cart state honest",
    "Deployment, environment secrets, and full mock viva",
  ],
  deepDive: {
    "howItWorks": [
      "A shopper browses a catalogue served by an Express API that paginates on the database side, so the page loads 20 products at a time instead of the whole collection. Search and category filters become MongoDB query parameters backed by indexes on name and category, which is what keeps the catalogue fast once it holds a few thousand items.",
      "Adding to the cart writes a document keyed to the user, not to the browser. A guest cart lives in localStorage and is merged into the server cart at login, so nothing is lost when someone signs in halfway through shopping. Redux Toolkit mirrors the server state and is refreshed from it rather than trusted on its own.",
      "Checkout creates a pending order and a Razorpay order on the server. The Razorpay widget collects the test payment, and the callback is verified with an HMAC signature using the secret key before the order is marked paid. Only then is stock decremented, inside a conditional update that fails if fewer units remain than were ordered."
    ],
    "data": "Four collections: users (with a role field for admin), products (price, stock, category, images), carts (one per user, an array of product id and quantity) and orders (a snapshot of the line items and prices at purchase time, payment ids, and a status history). Prices are copied into the order so that changing a product later does not rewrite past invoices. Seed data is generated with a script, so the demo never depends on a scraped catalogue.",
    "hardParts": [
      {
        "title": "Overselling the last unit",
        "body": "Two buyers can read stock = 1 at the same moment. The fix is a single atomic findOneAndUpdate that matches stock >= quantity and decrements in the same operation, so the second request matches nothing and gets a clear out-of-stock error."
      },
      {
        "title": "Trusting the payment callback",
        "body": "A client can claim a payment succeeded. The server recomputes the HMAC-SHA256 of order id and payment id with the Razorpay secret and compares it to the signature it received; an order is paid only when they match."
      },
      {
        "title": "Price tampering",
        "body": "The cart sent from the browser carries product ids and quantities only. Totals are recalculated on the server from the database prices, so editing a price in DevTools changes nothing."
      }
    ],
    "viva": [
      {
        "question": "Why does the cart live on the server and not only in Redux?",
        "answer": "Redux state disappears on refresh and does not follow the user to another device. Persisting the cart per user in MongoDB makes it survive both, and Redux becomes a cache of that state rather than the source of truth."
      },
      {
        "question": "How do you stop two customers buying the last item?",
        "answer": "Stock is decremented with an atomic conditional update that only matches when enough units remain. Because the check and the write are one database operation, there is no window for a race between them."
      },
      {
        "question": "How is a Razorpay payment verified?",
        "answer": "The server builds the string order_id|payment_id, computes its HMAC-SHA256 with the key secret, and compares it with razorpay_signature. If they differ the order stays pending."
      },
      {
        "question": "Where is the JWT stored, and why?",
        "answer": "In an httpOnly cookie, so JavaScript on the page cannot read it, which limits the damage of a cross-site scripting bug. The trade-off is that CSRF has to be considered, handled here with SameSite cookies."
      },
      {
        "question": "Why copy the price into the order document?",
        "answer": "An order is a historical record. If the product price changes next week, the invoice for last week must still show what the customer actually paid."
      }
    ]
  },
  difficulty: "Intermediate",
  sessionCount: 8,
  prices: { source: 5500, academic: 10000, mentored: 16000 },
  seatsPerCollege: 2,
  publishedAt: "2026-07-27",
};
