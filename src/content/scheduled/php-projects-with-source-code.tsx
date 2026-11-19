import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "php-projects-with-source-code",
  title: "PHP Projects With Source Code: Ideas + Security Fixes",
  h1: "PHP projects with source code: ideas, and the five security checks to run on any of them",
  description:
    "PHP project ideas for BCA, B.Sc IT and diploma students, each with the security rule it teaches, plus five checks to run on any downloaded PHP project: SQL injection, passwords, escaping, CSRF and file uploads.",
  tldr: "PHP is still a sensible choice for a college web project: it runs on free local stacks like XAMPP and on cheap hosting, and the code is easy to read. The weakness of most PHP source code you find online is security, not features. Before you use any of it, check five things: prepared statements for every query, password_hash for passwords, htmlspecialchars on output, CSRF tokens on forms, and validated file uploads. Fixing those in a reused project is a real contribution you can show in the viva. Pick an idea from the list below and check your college's rules on reused code.",
  category: "Project ideas",
  publishedAt: "2026-12-08",
  readingMinutes: 9,
  ogImage: "/og/campus/hub.jpg",
  degrees: ["BCA", "B.Sc IT", "Diploma"],
  faq: [
    {
      question: "Is PHP still okay for a final year project?",
      answer:
        "Yes, for most BCA, B.Sc IT and diploma projects, and for MCA if the system is substantial. PHP still runs a large share of the web, including WordPress. What matters to the panel is the design, the rules and the security, not whether the language is fashionable.",
    },
    {
      question: "Plain PHP or Laravel for a college project?",
      answer:
        "Plain PHP with PDO is easier to explain line by line and fine for a mini project or a modest final year system. Laravel gives you routing, an ORM, migrations, authentication and CSRF protection built in, which is closer to professional work, but you must be able to explain what the framework is doing for you.",
    },
    {
      question: "How do I run a PHP project on my laptop?",
      answer:
        "Install a local stack such as XAMPP, which bundles Apache, PHP and MySQL (MariaDB), put the project folder in its htdocs directory, import the database from the .sql file in phpMyAdmin, and update the database settings in the project's config file. For Laravel, use Composer and php artisan serve.",
    },
    {
      question: "What security questions are asked in a PHP project viva?",
      answer:
        "Common ones: how do you prevent SQL injection, how are passwords stored, what is XSS and how do you prevent it, how do sessions work and how do you log a user out properly, and what stops someone uploading a PHP file through your upload form.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        PHP projects with source code are some of the most downloaded student
        projects there are: hostel management, online voting, college admission,
        e-commerce. Many of them work, and many of them carry the same security
        holes, copied from old tutorials. That is actually an opportunity. A
        reused PHP project in which you have found and fixed those holes is easier
        to defend than one you only renamed. This guide gives you ideas, each
        paired with the security rule it lets you show, and the five checks to run
        on any PHP code before you present it. Your college decides what reuse is
        allowed, so check first.
      </p>

      <h2>Five checks for any PHP project</h2>
      <h3>1. Every query uses prepared statements</h3>
      <p>
        Search the code for <code>mysqli_query</code> or <code>query(</code> with a
        variable inside the SQL string. Each one is a possible SQL injection.
        Replace it with a prepared statement:
      </p>
      <pre>
        <code>{`// Injectable
$r = mysqli_query($con, "SELECT * FROM users WHERE email='$email'");

// Safe (PDO)
$stmt = $pdo->prepare("SELECT id, password_hash FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();`}</code>
      </pre>

      <h3>2. Passwords use password_hash, not md5</h3>
      <p>
        If the users table has a password column filled by <code>md5()</code> or{" "}
        <code>sha1()</code>, or plain text, replace it. PHP has had the right tools
        built in for years:
      </p>
      <pre>
        <code>{`$hash = password_hash($password, PASSWORD_DEFAULT);   // at sign-up
if (password_verify($password, $user['password_hash'])) { /* logged in */ }`}</code>
      </pre>

      <h3>3. Output is escaped</h3>
      <p>
        Anything a user typed and the page later shows (a name, a comment, a
        complaint) must pass through <code>htmlspecialchars()</code> when printed.
        Otherwise a user can store a script that runs in the admin&apos;s browser:
        cross-site scripting, a favourite viva question.
      </p>

      <h3>4. Forms that change data carry a CSRF token</h3>
      <p>
        Generate a random token per session, put it in a hidden field, and reject
        any POST whose token does not match. Without it, another site can make a
        logged-in admin&apos;s browser submit your delete form.
      </p>

      <h3>5. File uploads are checked</h3>
      <p>
        An upload form that accepts any file can be used to upload a PHP script and
        run it. Check the file type by its contents, not its name, limit the size,
        give it a new random name, and store it outside the web root or in a folder
        where PHP cannot execute.
      </p>
      <p>
        Also check that sessions are regenerated at login with{" "}
        <code>session_regenerate_id(true)</code>, and that admin pages verify the
        role on the server, not just by hiding a menu link. Write each fix up in
        your report under &ldquo;base work and my contribution&rdquo;; it is
        concrete, testable and yours.
      </p>

      <h2>PHP project ideas, with the rule each one teaches</h2>
      <GuideTable
        head={["Idea", "What it does", "Security or design rule it shows", "Level"]}
        rows={[
          ["Hostel room allotment", "Students apply, warden allots by rules such as year and distance from home", "Server-side role checks; allotment in a transaction so a room is never double-allotted", "BCA / diploma final"],
          ["Online voting for a college club", "One student, one vote, results after closing time", "One vote per user enforced by a database constraint, not by the page", "Mini / final"],
          ["Complaint and grievance portal", "Raise, assign, resolve, with status history", "Escaping user text (XSS) and an audit trail of every status change", "Mini / final"],
          ["Event registration with payment proof upload", "Register, upload a screenshot, admin verifies", "Safe file uploads and admin-only download links", "Final"],
          ["Second-hand book exchange", "List, search, request, mark as given", "Prepared statements for search; ownership checks on edit and delete", "Mini"],
          ["Tuition centre fee tracker", "Students, batches, instalments, receipts as PDF", "Money stored as integers (paise) or decimals, never floats", "Final"],
          ["Placement drive registration", "Eligibility by marks, apply, shortlist export", "Eligibility rules in one place, tested; CSV export without injection", "Final"],
          ["Canteen pre-order system", "Order ahead, pickup token, daily sales report", "Concurrency when the last item is ordered twice", "Final"],
        ]}
      />
      <p>
        Notice that the ideas are ordinary on purpose. A familiar domain with rules
        you can explain beats an exotic title you cannot. Make it yours with your
        own college&apos;s actual rules: real allotment criteria, real fee
        structures, real complaint categories.
      </p>

      <h2>Plain PHP or Laravel</h2>
      <GuideTable
        head={["", "Plain PHP + PDO", "Laravel"]}
        rows={[
          ["Learning time", "Short if you know the basics", "Longer: routing, Eloquent, Blade, migrations"],
          ["Explaining it", "Every line is yours to explain", "You must explain what the framework does for you"],
          ["Security built in", "You add each protection yourself, which is good to show", "CSRF, escaping in Blade and hashing are built in"],
          ["Best for", "Mini projects and modest final year systems", "Larger systems, MCA, students aiming at web jobs"],
        ]}
      />
      <p>
        If you go plain, still organise the code: a <code>config.php</code> that
        reads settings, one file for the database connection, functions or classes
        for the rules, and pages that only display. Mixing SQL, HTML and business
        rules in one file is the habit examiners mark down.
      </p>

      <h2>Run it locally, then put it online</h2>
      <ol>
        <li>Install XAMPP (or use Docker if you know it), start Apache and MySQL.</li>
        <li>Create the database in phpMyAdmin and import the project&apos;s <code>.sql</code> file.</li>
        <li>Move database credentials into a config file that is not committed; commit an example file instead.</li>
        <li>Turn on error display while developing and off for the demo.</li>
        <li>For a live link, use a host that supports PHP and MySQL; the <Link href="/guides/how-to-deploy-your-final-year-project-free/">free deployment guide</Link> lists options and their limits.</li>
      </ol>

      <h2>How to scope it</h2>
      <p>
        For a two to four week mini project, build one role and one flow (for
        example, the book exchange without messaging) with all five security
        checks in place. For a final year project, add a second and third role, a
        report or export, a transaction-protected core action, and tests or at least
        a written test-case table. Freeze features halfway and spend the rest on
        testing with hostile input, the report and viva practice.
      </p>

      <h2>Viva questions to rehearse</h2>
      <ol>
        <li>Show me how this query is protected against SQL injection.</li>
        <li>How are passwords stored? Why not md5?</li>
        <li>What is XSS? Show me where you escape output.</li>
        <li>How does a session work in PHP, and what happens at logout?</li>
        <li>What stops a student from opening the admin page by typing its URL?</li>
        <li>What happens if two users book the last slot at the same moment?</li>
      </ol>
      <p>
        The broader list is in the{" "}
        <Link href="/guides/final-year-project-viva-questions/">viva questions guide</Link>.
        For other stacks, compare{" "}
        <Link href="/guides/web-development-final-year-projects/">
          web development final year projects
        </Link>{" "}
        and{" "}
        <Link href="/guides/mern-stack-project-ideas-with-source-code/">
          MERN stack project ideas
        </Link>
        , and for the honest use of any downloaded code, read the{" "}
        <Link href="/guides/mca-projects-with-source-code/">source code guide</Link>.
        Choosing for a specific course? See{" "}
        <Link href="/guides/bca-final-year-project/">choosing a BCA final year project</Link>{" "}
        or the{" "}
        <Link href="/guides/diploma-final-year-project-topics/">diploma topics</Link>.
      </p>

      <hr />

      <p>
        If you want help building a PHP project, DefendIt runs project classes. The
        listed projects come in three tiers: Starter gives you a design document, a
        starter repository and a module-by-module build plan; Guided adds a review
        of every module and report chapter you write; Mentored adds live Google Meet
        classes where we build the project together, one module per class, with you
        writing part of every module, plus viva prep and a mock viva. A PHP problem
        statement of your own goes through the{" "}
        <Link href="/custom/">custom project page</Link>. Check your college&apos;s
        rules on outside help before you decide.
      </p>
    </>
  );
}
