import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";

export const meta: GuideMeta = {
  slug: "hospital-management-system-project",
  title: "Hospital Management System Project in MERN",
  h1: "Hospital management system project: the double booking that decides your marks",
  description:
    "A hospital management system project in MERN, told through the one bug that decides the marks: two patients, one slot. Schema, roles, billing and viva answers.",
  tldr: "A hospital management system project earns its marks in three places: a schema where appointments link doctor and patient, role checks enforced on the server, and booking that survives two patients choosing the same slot. A unique index on doctor and slot start time handles the third. Build those three first, then add billing.",
  category: "Project story",
  publishedAt: "2026-11-04",
  readingMinutes: 8,
  degrees: ["BCA", "MCA", "B.Tech"],
  ogImage: "/og/campus/cat-web.jpg",
  faq: [
    {
      question: "Which stack is best for a hospital management system project?",
      answer:
        "MERN works well: React for the three portals, Express and Node for the API, MongoDB with Mongoose for the records. The records are document-shaped (a prescription holds a list of medicines). A relational database is a fair alternative, and you should be ready to say why you chose yours.",
    },
    {
      question: "How many modules should a hospital management system project have?",
      answer:
        "Enough to show the design, not enough to hide it. A patient, doctor and admin portal, appointment booking, prescriptions and billing is a complete set. Six collections cover it. Adding pharmacy or lab modules on top rarely earns more marks than defending these well.",
    },
    {
      question: "Where can I see what the report for this project looks like?",
      answer:
        "The free sample report for this exact project is a 21-page PDF with the abstract, requirements, design, implementation, testing and a viva appendix. It is on the sample project report page, and it describes the system as the project page describes it.",
    },
    {
      question: "What will the examiner ask about a hospital management system?",
      answer:
        "Mostly three things: how you stop two patients booking the same slot, why role checks live on the server and not only in the UI, and how a prescription connects to a patient. If you can answer those three from your own schema, the rest of the viva is easier.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Section 5.3 of our sample project report is called &ldquo;the
        appointment engine&rdquo;. It holds a short code listing and, under it,
        one paragraph that most hospital management system projects have no
        equivalent of. I wrote that report as a PDF generator script and
        committed it on 30 October 2026, and that paragraph is the reason I think
        this project is worth building properly, so this is the story of it.
      </p>

      <h2>The student&rsquo;s problem, in plain words</h2>
      <p>
        Search for a hospital management system project and you get GitHub repos,
        PDFs and a few company pages. Nearly all of them stop at the same place:
        a login page, a table of patients, a form to add a doctor. It runs. It
        looks like a hospital. And then in the viva the examiner asks one
        question the project cannot answer: &ldquo;What happens if two patients
        book the same doctor at the same time?&rdquo;
      </p>
      <p>
        Picture a BCA student who has built exactly that project. This is a
        made-up student, not a real one, but the situation is common. The demo
        works because she tests it alone, on one laptop, one click at a time.
        The panel does not test it alone.
      </p>

      <h2>Chapter one: start with the schema, not the screens</h2>
      <p>
        The hospital project page lists six collections: users (with a role),
        doctors, patients, appointments, prescriptions and bills. The choice
        that matters is that an appointment sits in the middle. It references a
        doctor, a patient and a slot start time. A prescription references the
        appointment, not the patient directly. A bill is created when the
        appointment is marked completed.
      </p>
      <p>
        That one decision answers a whole group of viva questions in advance:
        &ldquo;How is a prescription linked to the patient?&rdquo; Through the
        appointment, which references both doctor and patient. If you draw the
        ER diagram first, the screens almost design themselves. If you draw the
        screens first, the ER diagram becomes something you invent the night
        before the report is due, and it will not match your tables. The{" "}
        <Link href="/guides/final-year-project-report-format/">
          report format guide
        </Link>{" "}
        explains why that mismatch is the fastest way to lose a panel.
      </p>

      <h2>Chapter two: three roles, one login</h2>
      <p>
        The project has patient, doctor and admin portals behind a single
        login. The JWT carries the role. React decides which portal to render,
        but that is only convenience. The real protection is Express middleware
        that checks the role from the verified token on every API route, and a
        filter that uses the logged-in user&rsquo;s id on the server, never an
        id sent from the browser.
      </p>
      <p>
        You can test this yourself in two minutes. Log in as a patient, copy the
        token, and call an admin endpoint from Postman. If it answers, your role
        system is a costume. Our question bank lists the same test in its
        security category: &ldquo;What stops a normal user from calling an admin
        endpoint?&rdquo; It exists because the answer is so often &ldquo;the
        button is hidden&rdquo;.
      </p>

      <h2>The turning point: one index instead of one if statement</h2>
      <p>
        Now back to booking. The natural way to write it is to look for an
        existing appointment for that doctor and slot, and if none exists,
        insert one. It reads correctly and it passes every demo. It also leaves
        a gap between the check and the insert, and two requests that arrive
        together can both pass the check.
      </p>
      <p>
        The project page describes the fix. A unique compound index on doctor
        and slot start time, so the database itself rejects the second
        insert. The API catches the duplicate-key error and answers with a 409
        and the message &ldquo;That slot has just been taken&rdquo;. The listing
        in the sample report is about a dozen lines. The idea is that the check
        and the write become one operation, so there is no gap.
      </p>
      <p>
        Then comes the paragraph I mentioned. A cancelled appointment keeps its
        row with status &ldquo;cancelled&rdquo;, so the unique index would
        block anyone from re-booking that slot. The report says how the project
        handles it: the slot generator treats cancelled appointments as free,
        and cancelling deletes the row, with the cancellation recorded on the
        patient&rsquo;s record. Whether you choose that or a partial index, the
        point is the same. You noticed that your own fix has a side effect and
        you wrote down what you did about it. That is the sentence examiners
        remember, because it shows you ran the system in your head past the
        happy path.
      </p>

      <h2>Chapter three: prescriptions and billing</h2>
      <p>
        Marking a visit completed is one endpoint that does two things in order:
        it sets the status, then creates a bill with the consultation fee copied
        from the doctor&rsquo;s record at that moment. Copying the fee matters.
        If the bill only pointed at the doctor, raising a fee next month would
        quietly change last month&rsquo;s invoices. The model also refuses a
        prescription for an appointment that is still only booked.
      </p>
      <p>
        One more detail from the project page: slots are stored in UTC and
        displayed in IST. A server hosted in another region will otherwise shift
        every appointment by five and a half hours, and you will not notice
        until you deploy it.
      </p>

      <h2>What I would do again</h2>
      <ol>
        <li>Draw the six-collection ER diagram before any React component.</li>
        <li>Put the role inside the JWT and enforce it in middleware on every route.</li>
        <li>Make the database reject a double booking with a unique index.</li>
        <li>Write down what your fix breaks, such as cancelled slots, and how you handled it.</li>
        <li>Copy the fee into the bill instead of referencing the doctor.</li>
        <li>Store time in UTC, show it in IST.</li>
        <li>Use the finished system to write the report. Do not write the report from memory.</li>
      </ol>

      <h2>The viva answers to have ready</h2>
      <p>
        From the project page: for double booking, a unique compound index, which
        rejects the second insert atomically, unlike a check in application
        code. For roles on the server, anyone can call the API directly, so
        middleware on the verified token is the real protection. For passwords,
        bcrypt with a per-password salt. For why MongoDB, the records are
        document-shaped, and a relational database would be a reasonable choice
        for heavy cross-record reporting, a trade-off worth stating before you
        are asked. More like these are in the{" "}
        <Link href="/question-bank/">viva question bank</Link>, and the report
        side is laid out in the{" "}
        <Link href="/sample-project-report/">free sample report</Link>, which is
        this very project.
      </p>

      <hr />

      <p>
        If you want this project built for you and walked through until you can
        defend every table, the full listing, with stack, seven sessions and
        prices, is on the{" "}
        <Link href="/hospital-management-mern/">
          hospital management system (MERN) page
        </Link>
        . If you would rather build it yourself, the{" "}
        <Link href="/templates/">free report and synopsis templates</Link> are
        a good place to begin.
      </p>
    </>
  );
}
