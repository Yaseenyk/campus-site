import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "java-projects-with-source-code",
  title: "Java Projects With Source Code: Ideas by Concept",
  h1: "Java projects with source code: ideas sorted by the Java concept each one proves",
  description:
    "Java project ideas for mini and final year projects, each tied to the concept an examiner will test: OOP, collections, JDBC, threads, sockets or Spring Boot. Plus the JDBC mistakes to fix in any source code you reuse.",
  tldr: "In a Java project viva, examiners test concepts more than features: why this class is abstract, why a HashMap here, how the database call avoids SQL injection, what the thread is doing. So choose a Java idea by the concept you want to show, from the table below, then decide between a desktop app (Swing or JavaFX) and a web app (Spring Boot). If you reuse source code, fix the usual JDBC problems first (string-built SQL, unclosed connections, plain-text passwords), credit it, and make one module truly yours. Check your college's rules on reused code.",
  category: "Project ideas",
  publishedAt: "2026-12-01",
  readingMinutes: 9,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "Is a Swing project acceptable for a final year project?",
      answer:
        "It depends on your college. Many accept a desktop Java project for BCA or diploma if the logic is substantial and the database design is sound. For B.Tech or MCA, panels more often expect a web application or a multi-user system. A Swing front end on a well-designed JDBC back end is a respectable mini project at any level.",
    },
    {
      question: "Should I use Spring Boot for a student project?",
      answer:
        "If you have the time to learn it, yes: it is what Java web development looks like in industry, and it gives you dependency injection, a REST layer and JPA. The risk is magic you cannot explain. If you use it, be ready to say what an annotation like @Autowired or @Transactional actually does.",
    },
    {
      question: "Which database should I use with a Java project?",
      answer:
        "MySQL or PostgreSQL are the common choices and both work with JDBC or JPA. For a single-user desktop app, an embedded database such as SQLite or H2 avoids installing a server. Choose one, design the tables on paper first, and use PreparedStatement or JPA rather than building SQL strings.",
    },
    {
      question: "How do I make a downloaded Java project my own?",
      answer:
        "Rewrite the data access layer properly, add a module with its own tables and tests, or replace a weak algorithm and measure the difference. Keep your changes in your own commits and describe in the report what you reused and what you built.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Java is still the language many Indian colleges teach first, and Java
        projects with source code are easy to find. What those lists rarely say is
        that a Java viva is mostly a concept exam. The panel will point at a class
        and ask why it is abstract, or at a loop and ask about the collection inside
        it. So this guide sorts ideas by the concept each one lets you demonstrate,
        and then covers the database mistakes you will find in most reused Java
        code. Your college decides what reuse is allowed; check before you start.
      </p>

      <h2>Pick the concept, then the idea</h2>
      <GuideTable
        head={["Idea", "Concept it proves", "The hard part", "Level"]}
        rows={[
          ["Vehicle service centre manager", "Inheritance and polymorphism: car, bike and truck jobs priced by their own rules", "A class hierarchy that does not collapse into if-else chains", "Mini"],
          ["Exam seating arrangement generator", "Collections and sorting: no two students from one branch side by side", "A placement rule that always terminates", "Mini / final"],
          ["Bank account simulator with interest and statements", "Encapsulation and exceptions: balances only change through methods that check rules", "Custom exceptions for overdraft and frozen accounts", "Mini"],
          ["Library system with reservations and fines", "JDBC and transactions: issue, return and fine in one atomic step", "Rolling back when one step fails", "Mini / final"],
          ["Multi-room chat server", "Sockets and threads: one thread per client, shared room state", "Thread safety when two users join the same room", "Final"],
          ["Parallel file search and indexer", "Executors and concurrency: search folders in parallel", "Measuring the speed-up honestly against a single thread", "Final"],
          ["Placement portal with roles", "Spring Boot, REST, JPA, Spring Security", "Server-side role checks, not hidden buttons", "Final"],
          ["Clinic appointment booking", "Spring Boot plus scheduling: no double-booked slots", "Concurrency when two patients book the same slot", "Final"],
        ]}
      />
      <p>
        Say the concept out loud in your synopsis. &ldquo;This project demonstrates
        thread-safe shared state in a socket server&rdquo; tells your guide and
        examiner what to test, and steers the viva onto ground you prepared.
      </p>

      <h2>Desktop or web: Swing, JavaFX or Spring Boot</h2>
      <GuideTable
        head={["Option", "When it fits", "Watch out for"]}
        rows={[
          ["Swing", "Mini projects and syllabi that teach it; quick forms and tables", "Long-running work on the UI thread freezes the window; use SwingWorker"],
          ["JavaFX", "A nicer desktop interface with FXML layouts and charts", "It is a separate download from the JDK now, so setup takes longer"],
          ["Servlets and JSP", "Colleges whose web syllabus still teaches them", "Mixing SQL into JSP pages; keep a DAO layer"],
          ["Spring Boot", "Multi-user web systems and anything with a REST API", "Annotations you cannot explain; read what each one does"],
        ]}
      />
      <p>
        Whatever the front end, keep three layers: the interface, a service layer
        that holds the rules, and a data access layer (DAO or repository) that
        talks to the database. That separation is what you draw in the report and
        what makes the rules testable with JUnit.
      </p>

      <h2>The JDBC mistakes examiners spot</h2>
      <p>
        Most reused Java projects talk to a database, and old tutorials teach habits
        that a sharp examiner, or a single quote in a name, will expose. Fix these
        before you present anything.
      </p>
      <h3>1. SQL built from strings</h3>
      <pre>
        <code>{`// Injectable: a name like  ' OR '1'='1  logs anyone in
String sql = "SELECT * FROM users WHERE name='" + name + "' AND pass='" + pass + "'";

// Safe: the driver sends values separately from the query
PreparedStatement ps = con.prepareStatement(
    "SELECT id, password_hash FROM users WHERE name = ?");
ps.setString(1, name);`}</code>
      </pre>
      <h3>2. Connections that are never closed</h3>
      <p>
        A project that works for ten clicks and then hangs is usually leaking
        connections. Use try-with-resources so they close even when an exception is
        thrown:
      </p>
      <pre>
        <code>{`try (Connection con = DataSource.get();
     PreparedStatement ps = con.prepareStatement(SQL)) {
    ps.setInt(1, bookId);
    ps.executeUpdate();
}`}</code>
      </pre>
      <h3>3. Passwords stored as text</h3>
      <p>
        Store a salted, slow hash (BCrypt is the usual choice, and Spring Security
        includes it) and compare hashes at login. If the downloaded project has a
        plain <code>password</code> column, this is a real, demonstrable improvement
        to put in your &ldquo;my contribution&rdquo; section.
      </p>
      <h3>4. Credentials in the code</h3>
      <p>
        A database URL with the root password inside a class is common in sample
        projects. Move it to a properties file or environment variables that stay
        out of the repository.
      </p>
      <h3>5. No transaction around multi-step changes</h3>
      <p>
        Issuing a book means updating the copy count and inserting a loan record. If
        the second step fails, the first must be undone. Turn off auto-commit, commit
        at the end, and roll back in the catch block, or use{" "}
        <code>@Transactional</code> in Spring.
      </p>

      <h2>How to scope a Java project</h2>
      <GuideTable
        head={["Time", "Scope", "Evidence to show"]}
        rows={[
          ["2 to 3 weeks (mini)", "Console or Swing app, three to five classes in a clear hierarchy, file or embedded database", "A class diagram and a few JUnit tests of the rules"],
          ["4 to 6 weeks", "Swing or JavaFX with MySQL through a DAO layer, two roles, transactions", "ER diagram, tests, a clean-install README"],
          ["A semester (final)", "Spring Boot web app with roles, validation, REST endpoints, deployment", "Architecture diagram, API list, test report, live link"],
        ]}
      />
      <p>
        Use Maven or Gradle from day one, even for a small project. A build file
        that lists every dependency is the difference between &ldquo;it runs on my
        laptop&rdquo; and a project an examiner can run.
      </p>

      <h2>Java questions to rehearse</h2>
      <ol>
        <li>Where did you use an interface, and why not an abstract class there?</li>
        <li>Why an ArrayList here and a HashMap there? What is the lookup cost of each?</li>
        <li>How does your code prevent SQL injection? Show me.</li>
        <li>What happens if the database is down when the user clicks save?</li>
        <li>Is your shared data thread-safe? What would happen without synchronisation?</li>
        <li>What is the difference between <code>==</code> and <code>equals()</code>, and where does it matter in your code?</li>
        <li>What does this annotation do? (For Spring projects, expect this for every annotation on screen.)</li>
      </ol>
      <p>
        For how to answer under pressure, read{" "}
        <Link href="/guides/how-to-explain-your-project-in-the-viva/">
          how to explain your project in the viva
        </Link>
        ; for the general question list, the{" "}
        <Link href="/guides/final-year-project-viva-questions/">
          viva questions guide
        </Link>
        . If you have not picked a language yet, the{" "}
        <Link href="/guides/python-project-ideas-with-source-code/">
          Python project ideas guide
        </Link>{" "}
        has the same treatment for Python, and the{" "}
        <Link href="/guides/mca-projects-with-source-code/">
          guide to using source code honestly
        </Link>{" "}
        covers licences and crediting.
      </p>

      <h2>Writing it up</h2>
      <p>
        Java reports are judged heavily on diagrams: a class diagram that matches
        the code, an ER diagram that matches the tables, and a sequence diagram for
        the main flow. Draw them from your code at the end, not from the original
        project&apos;s report at the start. The{" "}
        <Link href="/guides/final-year-project-report-format/">report format guide</Link>{" "}
        lays out each chapter.
      </p>

      <hr />

      <p>
        If you want help building a Java project, DefendIt runs project classes.
        The listed projects come in three tiers: Starter gives you a design
        document, a starter repository and a module-by-module build plan; Guided
        adds a review of every module and report chapter you write; Mentored adds
        live Google Meet classes where we build the project together, one module per
        class, with you writing part of every module, plus viva prep and a mock viva.
        A Java problem statement of your own goes through the{" "}
        <Link href="/custom/">custom project page</Link>, quoted by scope, with the
        same design, starter and live classes. Check your college&apos;s rules on
        outside help before you decide.
      </p>
    </>
  );
}
