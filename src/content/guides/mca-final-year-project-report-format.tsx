import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "mca-final-year-project-report-format",
  title: "MCA Project Report Format With Sample Contents",
  h1: "MCA final year project report format: chapters, sample contents page and viva checklist",
  description:
    "MCA project report format: every chapter, typical page counts, a sample contents page, a test-case table, IEEE references and a viva checklist.",
  tldr: "An MCA project report is usually front matter (title page, certificate, declaration, acknowledgement, abstract, contents), then chapters for introduction, literature survey and feasibility, requirements (SRS), design (ER, DFD, UML), implementation, testing, results, and conclusion with future scope, followed by references and appendices. Typical length is 60 to 120 pages, 12 pt Times New Roman with 1.5 line spacing, but page counts, fonts and margins are set by your university, so your own university's template always overrides this guide.",
  category: "Documentation",
  publishedAt: "2026-11-15",
  updatedAt: "2026-11-15",
  readingMinutes: 11,
  ogImage: "/og/campus/templates.jpg",
  degrees: ["MCA"],
  faq: [
    {
      question: "How many pages should an MCA project report be?",
      answer:
        "Most MCA reports land between 60 and 120 pages including front matter and appendices, but this is a common range, not a rule. Some universities set a minimum or maximum, and some count only the main chapters. Check your own project guidelines and ask your internal guide.",
    },
    {
      question: "What font and spacing does an MCA project report use?",
      answer:
        "A common choice is Times New Roman 12 pt for body text, 1.5 line spacing, justified, with chapter headings at 14 to 16 pt bold. Margins of about 1.5 inches on the binding side and 1 inch elsewhere are also common. These vary by university, so follow your template if it states something different.",
    },
    {
      question: "Which referencing style should I use in an MCA report?",
      answer:
        "IEEE numbered style is the usual choice in computer applications reports: citations as [1], [2] in the text, and a numbered list at the end in order of first appearance. Some universities ask for APA or Harvard instead, so check which one your department specifies.",
    },
    {
      question: "Does the MCA report need to match the code I submit?",
      answer:
        "Yes. Examiners often open one screen or one table from the report and ask you to find it in the running system. Every diagram, table name and screenshot in the report should match the final build, not an earlier draft.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        This is the MCA version of the report format question. If you want the
        general chapter-by-chapter guide for BCA, MCA and B.Tech together, that is
        the{" "}
        <Link href="/guides/final-year-project-report-format/">
          final year project report format guide
        </Link>
        . This page goes deeper on what an MCA examiner expects: a requirements
        specification, three families of design diagrams, a real test-case table,
        IEEE references and the checks to run before you bind it.
      </p>
      <p>
        One caution before anything else. Every number below, such as page ranges,
        font sizes and margins, is what is commonly asked for, not what your
        university necessarily requires. Universities and even departments differ.
        Your university&apos;s project guidelines or template, and your internal
        guide, override this page every time.
      </p>

      <h2>The structure at a glance</h2>
      <p>
        The page ranges are typical for a full MCA project of one semester, not
        targets. A report padded to hit a number reads worse than a tight one.
      </p>
      <GuideTable
        head={["Part", "What it holds", "Typical length"]}
        rows={[
          ["Front matter", "Title page, certificate, declaration, acknowledgement, abstract, contents, lists of figures and tables", "8 to 12 pages"],
          ["1. Introduction", "Problem, motivation, objectives, scope, report organisation", "4 to 8 pages"],
          ["2. Literature survey and feasibility", "Existing systems, gaps, technical, economic and operational feasibility", "5 to 10 pages"],
          ["3. System requirements (SRS)", "Functional and non-functional requirements, use cases, hardware and software needs", "8 to 15 pages"],
          ["4. System design", "Architecture, ER diagram, DFD levels, UML diagrams, schema, interface design", "15 to 25 pages"],
          ["5. Implementation", "Technology choices, module descriptions, key algorithms, selected code", "10 to 20 pages"],
          ["6. Testing", "Strategy, test-case tables, defects found and fixed", "6 to 12 pages"],
          ["7. Results and discussion", "Screenshots against objectives, metrics, limitations", "5 to 10 pages"],
          ["8. Conclusion and future scope", "What was achieved, what was not, what comes next", "1 to 3 pages"],
          ["References and appendices", "IEEE references, sample code, user manual, extra screenshots", "5 to 20 pages"],
        ]}
      />

      <h2>Front matter, in the order it usually appears</h2>
      <ul>
        <li>
          <strong>Title page.</strong> Project title, your name and enrolment
          number, degree and semester, guide, department, university and year.
          Layout is almost always dictated by the university, so copy theirs.
        </li>
        <li>
          <strong>Certificate.</strong> A signed statement from your internal guide
          and head of department that the work is genuine. Leave space for the
          signatures and the college seal. If an external company guided the
          project, a company certificate often sits next to it.
        </li>
        <li>
          <strong>Declaration.</strong> A short first-person statement that the
          work is your own and has not been submitted elsewhere. Write it only
          when it is true.
        </li>
        <li>
          <strong>Acknowledgement.</strong> Two or three paragraphs thanking your
          guide, department and anyone who actually helped. Keep it plain.
        </li>
        <li>
          <strong>Abstract.</strong> Usually one page, around 200 to 300 words:
          the problem, what you built, the stack in one clause, and what the
          results showed. Write it last, when you know what the project really
          does.
        </li>
        <li>
          <strong>Contents, list of figures, list of tables.</strong> Generate these
          from heading styles in Word rather than typing them, so page numbers
          stay correct after edits. Front matter commonly uses roman numerals
          (i, ii, iii) and the main chapters restart at 1.
        </li>
      </ul>

      <h2>A sample table of contents you can adapt</h2>
      <p>
        This is a realistic skeleton for a web or AI project. Rename sections to
        fit your system; do not keep ones that do not apply.
      </p>
      <pre>
        <code>{`Certificate ........................................ i
Declaration ........................................ ii
Acknowledgement .................................... iii
Abstract ........................................... iv
List of Figures / List of Tables ................... v

1  INTRODUCTION
   1.1 Background and motivation
   1.2 Problem statement
   1.3 Objectives
   1.4 Scope and limitations
   1.5 Organisation of the report
2  LITERATURE SURVEY AND FEASIBILITY
   2.1 Existing systems and their gaps
   2.2 Comparison table
   2.3 Technical, economic and operational feasibility
3  SYSTEM REQUIREMENTS SPECIFICATION
   3.1 Functional requirements
   3.2 Non-functional requirements
   3.3 Use cases
   3.4 Hardware and software requirements
4  SYSTEM DESIGN
   4.1 Architecture
   4.2 ER diagram and database schema
   4.3 Data flow diagrams (level 0, 1, 2)
   4.4 UML: use case, class, sequence, activity
   4.5 Interface design
5  IMPLEMENTATION
   5.1 Technology stack and why
   5.2 Module-wise implementation
   5.3 Key algorithms and code excerpts
6  TESTING
   6.1 Test strategy
   6.2 Test cases and results
   6.3 Defects found and fixed
7  RESULTS AND DISCUSSION
8  CONCLUSION AND FUTURE SCOPE
REFERENCES
APPENDICES  A. Source code excerpts  B. User manual`}</code>
      </pre>

      <h2>Chapters 1 and 2: introduction, literature survey and feasibility</h2>
      <p>
        State the problem in terms of a person who has it: who, what goes wrong
        today, what it costs them. Then number your objectives so the conclusion
        can answer each one. Under scope, list what the system does not do; a
        declared boundary is stronger than a vague promise.
      </p>
      <p>
        For the literature survey, MCA examiners want real systems or papers, not
        a textbook definition of your topic. Name three to six existing tools or
        published approaches, say what each does badly for your problem, and put
        it in a comparison table. Feasibility gets a short, honest paragraph each
        for technical (do you know the stack), economic (free tiers, open source)
        and operational (will the intended users actually use it).
      </p>

      <h2>Chapter 3: the SRS</h2>
      <p>
        Many MCA departments follow the IEEE 830 style of software requirements
        specification, or a trimmed version of it. Whatever your university
        calls it, the working core is:
      </p>
      <ul>
        <li>Numbered functional requirements (FR1, FR2, ...) written as testable statements, such as &ldquo;The system shall reject a second booking for the same doctor and slot.&rdquo;</li>
        <li>Non-functional requirements with a measurable edge where you can: response time, concurrent users, password handling, browser support.</li>
        <li>Use cases for each actor with a short description of main and alternate flows.</li>
        <li>Hardware and software requirements for both development and deployment.</li>
      </ul>
      <p>
        Number requirements on purpose. Your test-case table in Chapter 6 should
        point back to them, which is the thread that makes a report look
        engineered rather than assembled.
      </p>

      <h2>Chapter 4: design, where most marks sit</h2>
      <p>
        Include only diagrams that describe your system, and draw them from the
        built version. A typical MCA set is:
      </p>
      <ul>
        <li><strong>Architecture diagram.</strong> Client, server, database and any external service, with the direction of each call.</li>
        <li><strong>ER diagram and schema.</strong> Entities, keys and relationships, then each table with column, type and constraint. Mention normal form if your department expects it.</li>
        <li><strong>DFDs.</strong> Level 0 (context), level 1 (major processes) and, where the system is large, level 2 for one process. Keep data stores and external entities consistent between levels.</li>
        <li><strong>UML.</strong> A use case diagram, a class diagram, and a sequence diagram for the one flow that matters most, for example login or booking. An activity or state diagram suits workflow-heavy projects.</li>
        <li><strong>Interface design.</strong> Wireframes or screenshots of the main screens.</li>
      </ul>
      <p>
        Under each diagram, write two sentences: what it shows and why you drew
        it that way. A diagram with no explanation is an image, not design.
      </p>

      <h2>Chapter 5: implementation</h2>
      <p>
        Do not paste the whole codebase. Describe each module: its purpose, its
        inputs and outputs, and the one or two decisions inside it. Use
        pseudocode or a short excerpt for the core algorithm, such as the slot
        conflict check or the ranking function, and put longer listings in an
        appendix. If you used a library for something hard, say so. Examiners
        respect clear credit far more than silence.
      </p>

      <h2>Chapter 6: testing, with a sample test-case table</h2>
      <p>
        Describe your strategy in a paragraph (unit, integration, system, and
        user acceptance where applicable), then show the cases. A useful table
        ties each case to a requirement, states the input, the expected result
        and the actual result. The rows below are an illustrative style for an
        appointment-booking system; yours must come from tests you really ran.
      </p>
      <GuideTable
        head={["ID", "Requirement", "Input", "Expected", "Actual", "Status"]}
        rows={[
          ["TC-01", "FR1 Login", "Valid email and password", "Dashboard for the user's role opens", "As expected", "Pass"],
          ["TC-02", "FR1 Login", "Valid email, wrong password", "Error shown, no token issued", "As expected", "Pass"],
          ["TC-03", "FR4 Booking", "Book a free slot", "Appointment saved, slot marked taken", "As expected", "Pass"],
          ["TC-04", "FR4 Booking", "Book a slot already taken", "Rejected with a slot-taken message", "As expected", "Pass"],
          ["TC-05", "NFR2 Access", "Patient calls an admin API route", "403 Forbidden", "As expected", "Pass"],
          ["TC-06", "FR6 Billing", "Complete a visit with two services", "Bill total equals fee plus services", "Total off by one service, fixed in build 14", "Fixed, retested"],
        ]}
      />
      <p>
        Including a failed-then-fixed row is not a weakness. It shows testing
        actually changed the software. After the table, list known bugs and
        limitations honestly.
      </p>

      <h2>Chapters 7 and 8: results, conclusion and future scope</h2>
      <p>
        Results map back to the numbered objectives: objective, what you built,
        evidence (screenshot, metric or test result). For an ML project, report
        your dataset size, split, metric and at least one failure case. The
        conclusion is short: what was achieved, what was not, and two or three
        concrete future-scope items that follow from your real limitations,
        rather than a list of fashionable technologies.
      </p>

      <h2>Formatting norms, and why to verify each one</h2>
      <GuideTable
        head={["Element", "Commonly asked", "Check against your template"]}
        rows={[
          ["Body font", "Times New Roman, 12 pt", "Some ask for Arial or Calibri"],
          ["Line spacing", "1.5, text justified", "Some specify double spacing"],
          ["Margins", "About 1.5 in left, 1 in on other sides", "Binding margin differs by university"],
          ["Headings", "Numbered; chapter title 14 to 16 pt bold, sections 12 to 14 pt", "Numbering depth varies"],
          ["Page numbers", "Roman in front matter, Arabic from Chapter 1", "Position varies"],
          ["Figures and tables", "Numbered by chapter (Figure 4.2), caption below figures and above tables", "Some use continuous numbering"],
          ["Binding and copies", "Hard or spiral bound, often 2 to 3 copies", "Colour, cover and copy count are set by the department"],
        ]}
      />

      <h2>References in IEEE style</h2>
      <p>
        IEEE is a numbered style: cite as [1] in the text, and list sources in
        order of first appearance. Include only what you read and used. A short,
        real list beats thirty padded entries you cannot discuss. Patterns:
      </p>
      <pre>
        <code>{`[1] A. Author and B. Author, "Title of paper," Journal Name, vol. 12, no. 3, pp. 45-58, 2023.
[2] C. Author, Title of Book, 2nd ed. City: Publisher, 2021.
[3] "Page or tool name," Organisation. Available: https://example.com/page (accessed 15 Nov. 2026).`}</code>
      </pre>
      <p>
        Those are format patterns with placeholder details, not real citations.
        Always include an access date for web sources, and cite documentation
        for the frameworks and datasets you used.
      </p>

      <h2>Plagiarism and originality checklist</h2>
      <p>
        Many universities run reports through similarity software, and each sets
        its own acceptable threshold. Ask your department what theirs is and
        whether references are excluded from the score. Before submitting:
      </p>
      <ul>
        <li>Every paragraph is in your own words; definitions copied from Wikipedia or a seniors&apos; report are rewritten from your understanding.</li>
        <li>Anything quoted is in quotation marks and cited.</li>
        <li>Diagrams are your own, or the source is credited.</li>
        <li>Code from a tutorial, repository or library is acknowledged in the report and in the code comments.</li>
        <li>Your project differs meaningfully from others in your batch; copied titles and structures are noticed.</li>
        <li>The report describes the system you built, not a more impressive one.</li>
      </ul>

      <h2>Viva checklist for the report</h2>
      <p>
        The report is also your viva script. Before the date, check that you can
        do each of these without notes:
      </p>
      <ol>
        <li>State the problem and your objectives in under a minute.</li>
        <li>Draw the ER diagram on a whiteboard and explain each relationship.</li>
        <li>Walk the level-1 DFD and name what flows on each arrow.</li>
        <li>Open any screenshot from the report and show the same screen running.</li>
        <li>Explain one test case that failed first, and what you changed.</li>
        <li>Say what the system cannot do, and why it is out of scope.</li>
        <li>Explain every library and every reference you listed.</li>
      </ol>
      <p>
        For the questions panels ask in return, read{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          the viva questions guide
        </Link>{" "}
        and{" "}
        <Link href="/guides/how-to-explain-your-project-in-the-viva/">
          how to explain your project in the viva
        </Link>
        .
      </p>

      <hr />

      <p>
        Want to see a finished report before you write yours? The{" "}
        <Link href="/sample-project-report/">sample project report</Link> shows a
        complete one with SRS, diagrams, implementation and test cases, and the{" "}
        <Link href="/templates/">templates page</Link> has the layout to start
        from. Next in this series: the{" "}
        <Link href="/guides/mca-project-synopsis-format-and-sample/">
          MCA project synopsis with a worked sample
        </Link>{" "}
        you submit before building, and{" "}
        <Link href="/guides/mca-projects-with-source-code/">
          how to use MCA projects with source code properly
        </Link>
        . Still choosing a topic? See{" "}
        <Link href="/guides/mca-final-year-project-topics/">
          MCA final year project topics
        </Link>
        .
      </p>
      <p>
        The BCA-level documents and a 12-week plan are in <Link href="/guides/bca-final-year-project/">choosing a BCA final year project</Link>. For smaller projects earlier in the course, see <Link href="/guides/mini-project-ideas/">mini project ideas</Link>.
      </p>
    </>
  );
}
