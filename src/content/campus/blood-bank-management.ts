import type { CampusProject } from "@/lib/campus";

export const bloodBankManagement: CampusProject = {
  slug: "blood-bank-management",
  title: "Blood Bank Management System — MERN with donor matching",
  category: "Web Development · MERN",
  tagline:
    "Matches donors to requests by blood group and location, and never shows stale stock.",
  summary:
    "Most blood-bank projects are a table of donor names with no logic behind them, and they stall the moment an examiner asks which group can donate to which. This one manages donors, inventory by blood group, and requests — matching a request to eligible donors using real group compatibility and location, decrementing stock every time a unit is issued, and keeping an audit trail of where each unit went. It is a clean, honest database project that actually enforces its own rules.",
  degrees: ["Diploma", "BCA", "B.Sc IT"],
  domain: "Web Development",
  stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  features: [
    "Donor registry with eligibility from the last-donation gap",
    "Inventory tracked by blood group, updated on every issue",
    "Request matching to compatible donors by group and location",
    "Issuing a unit decrements stock and writes an audit trail",
    "Role-based access for admin and staff",
    "Dashboard and printable reports on stock and requests",
  ],
  modules: [
    "Schema design for donors, inventory, and requests",
    "Blood-group compatibility — encoding the rules the panel will test",
    "The matching query: eligible donors by group and location",
    "Issuing a unit: stock decrement and the audit trail",
    "Authentication and admin / staff roles",
    "The React dashboard and report screens",
    "Deployment and a full mock viva on the compatibility logic",
  ],
  deepDive: {
    "howItWorks": [
      "Staff register donors with blood group, contact details and the date of their last donation. Eligibility is computed, not typed in: a donor becomes eligible again once the minimum interval since their last whole-blood donation has passed, 90 days for men and 120 for women under Indian national guidelines, along with an age range of 18 to 65.",
      "Each collected unit is recorded with its group, collection date and expiry date (35 days for whole blood stored with CPDA-1), and inventory is the count of unexpired, unissued units per group. A scheduled job flags units close to expiry so they can be used first.",
      "A request names the blood group and number of units. The system lists compatible units from stock using the red-cell compatibility table, for example an O negative unit can go to any group while an AB positive patient can receive any group, and suggests eligible donors in the same city when stock is short. Issuing a unit marks it used and writes an audit entry."
    ],
    "data": "Collections for donors, units (one document per bag, with group, collection and expiry dates, and status), requests (hospital or patient, group, quantity, status) and an audit log of every issue and discard. Storing units individually rather than as a single count per group is what makes expiry tracking and the audit trail possible.",
    "hardParts": [
      {
        "title": "Compatibility, not equality",
        "body": "A naive system only matches the same blood group. Encoding the compatibility table means a request for B positive can draw on B positive, B negative, O positive and O negative stock, preferring the exact group first."
      },
      {
        "title": "Expiry and first-expired-first-out",
        "body": "Units are issued in order of expiry date, so the oldest usable stock goes out first and less blood is wasted."
      },
      {
        "title": "Accountability",
        "body": "Every issue and discard writes who did it and when. Admin and staff roles are separated so only an admin can correct inventory."
      }
    ],
    "viva": [
      {
        "question": "How do you decide whether a donor is eligible?",
        "answer": "From the date of the last donation and the donor's age and sex: the minimum gap is 90 days for men and 120 days for women, and the donor must be between 18 and 65. Eligibility is calculated each time, so it never goes stale."
      },
      {
        "question": "Which blood groups can an A positive patient receive?",
        "answer": "A positive, A negative, O positive and O negative. The system encodes that table and offers the exact group first, then compatible groups."
      },
      {
        "question": "Why store each unit separately instead of a count?",
        "answer": "Each bag has its own expiry date and history. Separate records allow expiry alerts, first-expired-first-out issuing and an audit trail, none of which a single number per group supports."
      },
      {
        "question": "What is the universal donor and recipient?",
        "answer": "For red cells, O negative can be given to anyone and AB positive can receive from anyone. For plasma the relationship reverses, which is a good follow-up point in the viva."
      },
      {
        "question": "How is role-based access implemented?",
        "answer": "The JWT carries the user's role, and an Express middleware checks the role required by each route before the handler runs, so a staff account cannot reach admin-only endpoints even by calling the API directly."
      }
    ]
  },
  difficulty: "Beginner",
  sessionCount: 6,
  prices: { source: 4000, academic: 7500, mentored: 12000 },
  seatsPerCollege: 3,
  publishedAt: "2026-07-27",
};
