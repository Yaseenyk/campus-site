import type { CampusProject } from "@/lib/campus";

export const hospitalManagementMern: CampusProject = {
  slug: "hospital-management-mern",
  title: "Hospital Management System (MERN)",
  category: "Full-Stack · MERN",
  tagline:
    "Three roles, real appointment conflicts, and a schema that holds up when the examiner pokes it.",
  summary:
    "The most-attempted project in Indian colleges, built the way it should be. Separate portals for patients, doctors, and admin; JWT auth with role guards on every route; appointment booking that actually detects slot collisions instead of overwriting them; and prescriptions and billing tied to real MongoDB relations. The marks in this project are in the schema design and the auth flow, so that is where the sessions spend their time.",
  degrees: ["BCA", "MCA", "B.Tech", "B.Sc IT"],
  domain: "Web Development",
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Tailwind CSS",
  ],
  features: [
    "Three role-based portals — patient, doctor, admin — behind one login",
    "Appointment booking with real slot-conflict detection per doctor",
    "Doctors write prescriptions against a visit; patients see their history",
    "Auto-generated bills with printable invoices",
    "Admin dashboard: doctor onboarding, department management, daily load",
    "Search and filter across patients, doctors, and appointments",
  ],
  modules: [
    "Schema design — how the six collections relate, and why not one big document",
    "Auth: hashing, JWT issue and verify, and role-guarded middleware",
    "The appointment engine — slot generation and conflict detection logic",
    "Express route structure, controllers, and centralised error handling",
    "React app structure: routing, protected routes, and shared state",
    "Prescriptions and billing — the write path end to end",
    "Deployment on a free tier, plus mock viva on schema and auth",
  ],
  deepDive: {
    "howItWorks": [
      "One login serves three roles. The JWT carries the role, React routes render the patient, doctor or admin portal, and Express middleware enforces the same role checks on every API route, so the UI hiding a button is never the only protection.",
      "A doctor's availability is stored as weekly working hours split into fixed slots. Booking checks the slot against existing appointments for that doctor; a unique compound index on doctor and slot start time means the database itself rejects a second booking for the same slot, even if two patients press confirm together.",
      "After a visit, the doctor writes a prescription linked to that appointment. Completing the visit generates a bill from the consultation fee and any listed services, which the patient can view and print as an invoice. The admin dashboard aggregates appointments per department and per day."
    ],
    "data": "Users (with a role), doctors (department, fee, weekly schedule), patients (basic medical profile), appointments (doctor, patient, slot start, status), prescriptions (medicines with dose and duration, linked to an appointment) and bills. Mongoose schemas validate required fields and enums such as appointment status at the model layer.",
    "hardParts": [
      {
        "title": "Double booking",
        "body": "Checking for a clash and then inserting leaves a gap where two requests both pass the check. A unique index on doctor and slot makes the second insert fail, and the API turns that error into a slot-taken message."
      },
      {
        "title": "Who can see what",
        "body": "A patient must see only their own records and a doctor only their own patients. Every query is filtered by the logged-in user's id on the server, never by an id sent from the browser."
      },
      {
        "title": "Time zones",
        "body": "Slots are stored in UTC and displayed in IST, so a server running in another region does not shift every appointment by five and a half hours."
      }
    ],
    "viva": [
      {
        "question": "How do you prevent two patients booking the same slot?",
        "answer": "A unique compound index on doctor id and slot start time. The database rejects the second insert atomically, which a check-then-insert in application code cannot guarantee."
      },
      {
        "question": "Why enforce roles on the server if the UI already hides pages?",
        "answer": "Anyone can call the API directly with a tool like Postman. Middleware that checks the role from the verified JWT is the real protection; hiding pages is only convenience."
      },
      {
        "question": "How is a prescription linked to the patient?",
        "answer": "Through the appointment. The prescription references the appointment, which references both doctor and patient, so a patient's history is every prescription on their completed appointments."
      },
      {
        "question": "Why MongoDB for hospital data?",
        "answer": "The records are naturally document-shaped, such as a prescription with a list of medicines. For heavy cross-record reporting or strict transactions across many tables, a relational database would be a reasonable alternative, and that trade-off is worth stating."
      },
      {
        "question": "How are passwords stored?",
        "answer": "Hashed with bcrypt and a per-password salt. The plain password is never stored, and login compares the hash."
      }
    ]
  },
  difficulty: "Intermediate",
  sessionCount: 7,
  prices: { source: 4500, academic: 8500, mentored: 15000 },
  seatsPerCollege: 2,
  publishedAt: "2026-07-27",
};
