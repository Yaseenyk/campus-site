import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "cyber-security-project-ideas-for-students",
  title: "Cyber Security Project Ideas for Students (Legal Ones)",
  h1: "Cyber security project ideas for students: defensive, legal and demonstrable",
  description:
    "Cyber security project ideas for students that you can build and demo legally: password and phishing checks, log analysis, file integrity, encryption, 2FA and a vulnerable-then-fixed web app. Lab setup, evaluation and viva questions included.",
  tldr: "The best student cyber security projects are defensive: they detect, prevent or explain an attack, and you can demo them on systems you own. Good choices are a phishing URL classifier, a log-based intrusion alert, a file integrity monitor, a password policy checker, two-factor login built from the TOTP standard, or a deliberately vulnerable web app with each hole fixed and tested. Build everything in your own virtual-machine lab, never scan or attack systems you do not have written permission for (unauthorised access is an offence under India's IT Act), and measure your project with false positives and false negatives, not just a demo. Check your college's rules and your guide's approval first.",
  category: "Project ideas",
  publishedAt: "2026-12-15",
  readingMinutes: 10,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "Is it legal to do an ethical hacking project as a student?",
      answer:
        "It is legal when every system you test is your own or you have written permission from its owner. Scanning or breaking into a college network, a website or a friend's account without permission is unauthorised access, which is an offence under India's Information Technology Act, whatever your intention. Build a lab of virtual machines and deliberately vulnerable apps instead.",
    },
    {
      question: "What is a good cyber security final year project for CSE?",
      answer:
        "One with a measurable result: an intrusion or phishing detector evaluated on a public dataset with precision and recall, or a vulnerable web application where each flaw is shown, fixed and covered by a test. Both give you something to demonstrate and numbers you produced yourself.",
    },
    {
      question: "Which tools should I learn for a security project?",
      answer:
        "Python for scripting and analysis, Wireshark for reading traffic in your own lab, VirtualBox or VMware for the lab itself, and the OWASP Top 10 as the reference for web risks. Kali Linux bundles many tools, but the project should be something you built, not a tour of other people's tools.",
    },
    {
      question: "Can a cyber security project use machine learning?",
      answer:
        "Yes. Phishing URL classification and network intrusion detection on public datasets are common and defensible. Be careful with evaluation: split by time or by source where possible, report false positives, and compare against a simple rule-based baseline so the panel can see what the model adds.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Cyber security is one of the more interesting areas for a student project,
        and one of the easiest to get wrong, both technically and legally. A
        project that &ldquo;hacks&rdquo; something real can get you in serious
        trouble; a project that only runs a famous tool shows nothing you built.
        This guide covers ideas that are defensive, legal and demonstrable, how to
        set up a lab to test them, and how to evaluate a security project so the
        panel sees evidence rather than a show. Your guide&apos;s approval and your
        college&apos;s rules come first.
      </p>

      <h2>The rule before any idea: only your own systems</h2>
      <p>
        Test only on machines and accounts you own, or that the owner has given you
        written permission to test. That excludes the college Wi-Fi, the college
        website, your friends&apos; accounts and any public site, however
        &ldquo;harmless&rdquo; the test. Unauthorised access to a computer system
        is an offence under India&apos;s Information Technology Act, and good
        intentions are not a defence. Put a short &ldquo;ethics and scope&rdquo;
        section in your synopsis saying exactly what you will test and where.
        Examiners read it as maturity.
      </p>

      <h2>Set up a lab you are allowed to break</h2>
      <ul>
        <li><strong>A hypervisor</strong>: VirtualBox (free) or VMware on your laptop.</li>
        <li><strong>Two or three virtual machines</strong> on a host-only network, so nothing leaks onto the real network: an attacker or tester machine, a target server, and optionally a monitoring box.</li>
        <li><strong>Deliberately vulnerable apps</strong> made for practice, such as OWASP Juice Shop or DVWA, as targets.</li>
        <li><strong>Snapshots</strong> before every experiment, so you can roll back in seconds.</li>
      </ul>
      <p>
        Screenshots of this lab and its network diagram belong in your report; they
        show the panel where your testing happened.
      </p>

      <h2>Cyber security project ideas</h2>
      <GuideTable
        head={["Idea", "What you build", "How you measure it", "Level"]}
        rows={[
          ["Phishing URL classifier", "Extract features from a URL (length, symbols, domain age if available, look-alike characters) and classify with a simple model, behind a small web form or browser extension", "Precision, recall and false positives on a held-out set from a public phishing dataset", "Final"],
          ["Log-based intrusion alert", "Parse SSH or web server logs from your lab, detect brute-force and scanning patterns by rule, raise alerts on a dashboard", "Run attacks in the lab; count detected, missed and false alarms", "Mini / final"],
          ["File integrity monitor", "Hash every file in a folder, store the baseline, alert on any change, addition or deletion", "Change files in known ways and confirm every change is caught", "Mini"],
          ["Password policy and breach checker", "Score password strength and check against breached passwords using a k-anonymity range lookup, so the password never leaves the machine", "Explain and test the privacy property; test edge cases", "Mini"],
          ["Two-factor login from the standard", "Implement TOTP (the algorithm behind authenticator apps, RFC 6238) in a login flow, with QR enrolment and backup codes", "Works with a real authenticator app; handles clock drift; rate-limited", "Mini / final"],
          ["Vulnerable-then-fixed web app", "Build a small app with SQL injection, XSS, broken access control and weak sessions; then fix each one", "For each flaw: an exploit test that passes before the fix and fails after", "Final"],
          ["Encrypted file sharing", "Upload files encrypted in the browser with a key the server never sees; share by link", "Show that the server's stored data is unreadable; explain key handling honestly", "Final"],
          ["Network intrusion detection on a public dataset", "Train and compare classifiers on a well-known dataset such as NSL-KDD or CIC-IDS2017", "Per-attack-class recall, a baseline, and an honest limits section", "Final"],
        ]}
      />
      <p>
        The vulnerable-then-fixed app is especially strong for the viva, because
        every claim comes with a demonstration in both directions. Map each flaw to
        its OWASP Top 10 category in the report.
      </p>

      <h2>How to evaluate a security project</h2>
      <p>
        &ldquo;It detected the attack in the demo&rdquo; is not evidence. A panel
        that knows the area will ask about the cases you did not show. Plan these
        from the start:
      </p>
      <ol>
        <li>
          <strong>A threat model.</strong> One page: what you protect, from whom,
          and what is out of scope. It turns vague claims into testable ones.
        </li>
        <li>
          <strong>False positives and false negatives.</strong> A detector that
          flags everything catches every attack. Report both kinds of error.
        </li>
        <li>
          <strong>A baseline.</strong> Compare your model or tool against a simple
          rule. If a five-line rule does as well, say so and explain what yours adds.
        </li>
        <li>
          <strong>Test cases you wrote.</strong> A table of inputs, expected result
          and actual result, including attacks you tried that failed.
        </li>
        <li>
          <strong>Limits stated plainly.</strong> What an attacker who knew your
          method could do to evade it.
        </li>
      </ol>

      <h2>What a project should not be</h2>
      <ul>
        <li>A walkthrough of running Nmap, Metasploit or Burp Suite. Those are tools; your project is what you build or measure with them.</li>
        <li>A keylogger, credential harvester or anything that collects data from people without consent, even &ldquo;for education&rdquo;.</li>
        <li>A homemade encryption algorithm presented as secure. Use standard, well-reviewed algorithms through a trusted library and explain how you use them.</li>
        <li>Any test against a real system without written permission.</li>
      </ul>

      <h2>Scoping to your time</h2>
      <GuideTable
        head={["Time", "Realistic scope"]}
        rows={[
          ["2 to 4 weeks", "File integrity monitor, password checker or TOTP login, with a test table"],
          ["6 to 8 weeks", "Log-based intrusion alert in a lab, or a vulnerable app with three flaws fixed and tested"],
          ["A semester", "Phishing or intrusion detection with proper evaluation, or a full vulnerable-then-fixed app with a dashboard and report"],
        ]}
      />
      <p>
        Lab setup always takes longer than expected; give it the first week. If
        you are using a dataset, read its documentation for known problems before
        you trust any accuracy number you get.
      </p>

      <h2>Viva questions to rehearse</h2>
      <ol>
        <li>What is your threat model, and what is out of scope?</li>
        <li>How many false positives does your system produce, and why does that matter?</li>
        <li>How would an attacker evade your detector?</li>
        <li>Why is hashing different from encryption? Where did you use each?</li>
        <li>How are secrets and keys stored in your project?</li>
        <li>Where did you test this, and what permission did you have?</li>
        <li>What is SQL injection, and show me the line that prevents it.</li>
      </ol>
      <p>
        For machine-learning versions of these ideas, the{" "}
        <Link href="/guides/ai-ml-final-year-projects/">AI projects guide</Link>{" "}
        covers evaluation in more depth. Web security basics in practice, with code,
        are in the{" "}
        <Link href="/guides/php-projects-with-source-code/">
          PHP security checks guide
        </Link>{" "}
        and the{" "}
        <Link href="/guides/java-projects-with-source-code/">
          Java JDBC mistakes section
        </Link>
        . For the report and viva, see the{" "}
        <Link href="/guides/final-year-project-report-format/">report format</Link>{" "}
        and{" "}
        <Link href="/guides/final-year-project-viva-questions/">viva questions</Link>{" "}
        guides, and the{" "}
        <Link href="/guides/btech-cse-final-year-project-topics/">
          B.Tech CSE topics
        </Link>{" "}
        if you are comparing areas.
      </p>

      <hr />

      <p>
        If you want help building a security project of your own, DefendIt runs
        project classes through the <Link href="/custom/">custom project page</Link>,
        quoted by scope. The listed projects come in three tiers: Starter gives you
        a design document, a starter repository and a module-by-module build plan;
        Guided adds a review of every module and report chapter you write; Mentored
        adds live Google Meet classes where we build the project together, one
        module per class, with you writing part of every module, plus viva prep and
        a mock viva. Everything is built and tested in your own lab. Check your
        college&apos;s rules on outside help before you decide.
      </p>
    </>
  );
}
