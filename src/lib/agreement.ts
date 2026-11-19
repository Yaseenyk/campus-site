// Onboarding agreement for a student who has committed to a project.
//
// Not a marketing page — this is the record created at the point of
// enrolment. Wording is deliberately consistent with /terms:
// a document that contradicts a page you already publish is weaker than either
// one alone.

/** Bump when clause text changes, so a stored consent is traceable to what was
 *  actually on screen when it was given. Never edit a clause without bumping. */
export const AGREEMENT_VERSION = "2.0";

/**
 * What Yaseen is bound to. These are stated, not ticked — the student consents,
 * the provider commits — but they carry equal weight and appear beside the
 * student's obligations in the PDF. An agreement that lists only one side's
 * duties is not an agreement, and reads exactly like the thing a student is
 * right to be wary of.
 */
export const OWNER_COMMITMENTS = [
  "Provide the design document, the starter repository and the build plan, build the project together with the student in the classes their tier includes, review every module and report chapter they write, and help whenever they are stuck.",
  "Deliver exactly what the project page listed for the chosen tier at the time of enrolment, and say so plainly if anything cannot be delivered.",
  "Run every session included in the tier — live, daily, after 8:00 PM IST, roughly 60 minutes each — through to the submission date.",
  "Reschedule at no cost, and without it counting against the total, whenever I am the one who cannot attend.",
  "Help the student make the changes a project guide asks for during review, at no extra cost. That is part of the guidance, not a new quotation.",
  "Cancel all remaining installments, return the last installment paid, and leave everything already delivered with the student, if I fail to deliver what was promised.",
  "Use the student's name, phone number and email only to run this engagement. They are never sold, shared, or added to a marketing list.",
] as const;

export interface Clause {
  n: string;
  title: string;
  body: string[];
}

export const CLAUSES: Clause[] = [
  {
    n: "01",
    title: "What is being delivered",
    body: [
      "This is a project class for the project named below. On the Mentored tier it is built together in live classes, with you writing part of every module; on the Starter and Guided tiers you build it from the design document, starter repository and build plan, with every module reviewed. You write the report chapters and I review them. Nothing finished is handed over for you to submit.",
      "The tier you selected determines exactly what is included. What is written on the project page at the time of enrolment is the agreement; anything not written there is not included.",
    ],
  },
  {
    n: "02",
    title: "Both sides commit to finishing",
    body: [
      "This is not a one-off sale. I commit to guiding the build, reviewing your work, running every session listed for your tier, and preparing you for your viva through to your submission date.",
      "You commit to writing the project, attending the sessions, paying each installment on the agreed date, and seeing the engagement through. A project you abandon halfway helps neither of us — and the sessions only work if you turn up to them and do the work.",
    ],
  },
  {
    n: "03",
    title: "If you stop partway",
    body: [
      "You may stop between installments. Installments already paid cover work already done and sessions already held, so they are not refunded, and any remaining sessions are forfeited.",
      "You keep everything delivered up to that point and owe nothing further. Nothing is held back to force you to continue.",
    ],
  },
  {
    n: "04",
    title: "If I fail to deliver",
    body: [
      "If I fail to deliver what the project page promised, your remaining installments are cancelled, you keep everything already delivered, and the last installment you paid is returned.",
      "If I need to reschedule a session, it does not count against your total and is rearranged at no cost to you.",
    ],
  },
  {
    n: "05",
    title: "Who owns what",
    body: [
      "The project built in your classes, and everything you write, is yours to submit as your academic project, change, and show in your portfolio or to an employer afterwards. You may use and build on the starter repository and design document inside your project.",
      "You may not resell or pass the starter repository, the design document or my reviews to other students. Breach of this clause ends the arrangement immediately, with no refund of anything paid.",
    ],
  },
  {
    n: "06",
    title: "Sessions and attendance",
    body: [
      "Sessions run live on Google Meet, daily, after 8:00 PM IST, for about 60 minutes each. The number included is set by your tier.",
      "If you cannot attend, tell me in advance and the session is rescheduled at no cost. Sessions missed without notice are counted as used.",
    ],
  },
  {
    n: "07",
    title: "Your own work, and your college's rules",
    body: [
      "You take part in building every module and write part of each one yourself, and you write the report. I will not build modules for you outside the classes or write a report chapter for you, and I will stop an engagement where that is what is being asked for.",
      "It is your responsibility to follow your institution's rules on outside help, and to tell your project guide you have a mentor wherever your institution asks for that. I do not sit your viva, write your exam, or contact your college on your behalf.",
    ],
  },
  {
    n: "08",
    title: "Your details",
    body: [
      "Your name, phone number and email are used only to run this engagement and to keep a record of this agreement. They are not sold, shared, or added to any marketing list.",
      "A copy of this agreement, with your details and the date, is sent to me when you consent. You can save your own copy from the confirmation screen.",
    ],
  },
];

/** Each is consented to separately — several specific ticks are stronger
 *  evidence of informed agreement than one blanket "I accept everything". */
export const CONSENTS = [
  {
    id: "deliver",
    label:
      "I understand what is being delivered, and that the project page for my tier defines what is included.",
  },
  {
    id: "commit",
    label:
      "I commit to attending the sessions and paying each installment on the agreed date, through to my submission.",
  },
  {
    id: "stop",
    label:
      "I understand that if I stop partway, installments already paid are not refunded and remaining sessions are forfeited.",
  },
  {
    id: "resell",
    label:
      "I will take part in building my project and write my own report, and I will not pass the starter repository, design document or reviews to any other student.",
  },
  {
    id: "college",
    label:
      "I understand that following my college's rules on outside help, including telling my guide where required, is my responsibility.",
  },
  {
    id: "accurate",
    label:
      "The name and phone number I have entered are my own and are accurate.",
  },
] as const;
