import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "android-project-ideas-for-students",
  title: "Android Project Ideas for Students (With Scope)",
  h1: "Android project ideas for students: twelve that use the phone, not just the screen",
  description:
    "Android project ideas for students, grouped by what the phone can do: camera, location, sensors, offline storage and notifications. Stack, hard part, viva question and scope for each.",
  tldr: "A good Android project uses something only a phone has: the camera, location, sensors, notifications or working offline. A list of forms that would work just as well as a website is the weakest kind. Choose one stack you can explain (Kotlin with Jetpack Compose, Flutter or React Native), pick an idea from the twelve below, scope it to one main flow plus offline storage, ask for permissions only when you need them, and test on a real phone before the demo. Your college decides what counts as a mini or final year project, so check the brief first.",
  category: "Project ideas",
  publishedAt: "2026-11-24",
  readingMinutes: 9,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "Which language should I use for an Android project, Kotlin or Java?",
      answer:
        "Google recommends Kotlin for new Android apps, and its current UI toolkit, Jetpack Compose, is Kotlin-only. Java still works and is fine if your syllabus taught it. Flutter (Dart) and React Native (JavaScript or TypeScript) are reasonable if you want one codebase, but be ready to explain why you chose a cross-platform tool.",
    },
    {
      question: "Do I need to publish my Android app on the Play Store?",
      answer:
        "Usually not. Most colleges want a working demo, the APK and a report. Publishing needs a developer account and a privacy policy and takes review time, so treat it as optional. A signed APK, a screen recording and a GitHub repository are normally enough; check what your department asks for.",
    },
    {
      question: "Can I build an Android project without a powerful laptop?",
      answer:
        "Yes. Android Studio's emulator is heavy, but you can skip it by running the app on your own phone over USB or wireless debugging. Flutter and React Native with Expo also run on a real device easily. A real phone is a better test anyway, because the camera, GPS and sensors behave like they will on demo day.",
    },
    {
      question: "What makes an Android project good enough for a final year?",
      answer:
        "A real problem, at least two kinds of users or a backend, data that syncs or survives being offline, permissions handled properly, and evidence you tested it on a real device. The phone feature should be essential to the idea, not decoration.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Most Android project lists are a set of titles: a library app, a notes app,
        a college app. They tell you nothing about what is hard, what an examiner
        will ask, or whether you can finish it. This guide groups ideas by the
        thing a phone does that a website cannot, because that is what makes an
        Android project worth building as an app. For each one you get a stack, the
        hard part, the viva question it attracts and an honest difficulty. Your
        college&apos;s brief decides what is accepted, so read it before you
        commit.
      </p>

      <h2>First decide the stack, then the idea</h2>
      <p>
        The stack decides how fast you move and what you will be questioned on.
        Pick the one you can explain, not the one that sounds newest.
      </p>
      <GuideTable
        head={["Stack", "Good for", "What you must be able to explain"]}
        rows={[
          ["Kotlin + Jetpack Compose", "A native Android app; Google's recommended path", "Activities and lifecycle, state in Compose, ViewModel, Room for storage"],
          ["Java + XML layouts", "Students whose syllabus taught Java", "Activity lifecycle, RecyclerView, SQLite or Room, threads for network calls"],
          ["Flutter (Dart)", "One codebase, fast UI work", "Widgets and state, how a plugin reaches the camera or GPS, why Flutter"],
          ["React Native (Expo)", "Students who already know React", "Components and hooks, Expo modules, how JavaScript talks to native code"],
        ]}
      />
      <p>
        Whatever you choose, stay with it. Switching frameworks halfway is the most
        common way a mobile project runs out of time.
      </p>

      <h2>The test: does it need a phone?</h2>
      <p>
        Before you choose, ask one question: if this were a website, what would be
        lost? If the answer is &ldquo;nothing&rdquo;, the idea is a web project
        wrapped in an app, and a panel will notice. The ideas below each lean on at
        least one of five things phones are good at.
      </p>

      <h2>Ideas that use the camera</h2>
      <h3>1. Receipt scanner and expense splitter</h3>
      <p>
        Photograph a bill, read the total with on-device text recognition (ML Kit
        does this offline), and split it between friends. <strong>Hard part:</strong>{" "}
        receipts are crumpled and the total is not always the largest number, so you
        need a rule and a manual correction screen. <strong>Viva question:</strong>{" "}
        &ldquo;What happens when the text recognition reads the wrong amount?&rdquo;{" "}
        <strong>Difficulty:</strong> intermediate.
      </p>
      <h3>2. Lab equipment check-out with QR codes</h3>
      <p>
        Each item carries a QR label; students scan to borrow and return, and the
        lab assistant sees what is out and overdue. <strong>Hard part:</strong> two
        roles and a backend, plus what happens when someone scans while offline.{" "}
        <strong>Viva question:</strong> &ldquo;How do you stop the same item being
        borrowed twice?&rdquo; <strong>Difficulty:</strong> intermediate.
      </p>
      <h3>3. Plant or crop photo log</h3>
      <p>
        Farmers or a college garden club photograph a plant every few days and add
        notes; the app shows a timeline per plant. Add a disease model later only if
        you have time. <strong>Hard part:</strong> storing images efficiently and
        not filling the phone. <strong>Viva question:</strong> &ldquo;Where are the
        images stored and how big can this grow?&rdquo; <strong>Difficulty:</strong>{" "}
        beginner to intermediate.
      </p>

      <h2>Ideas that use location</h2>
      <h3>4. Campus navigator with indoor landmarks</h3>
      <p>
        GPS is weak indoors, so combine a map for outdoor routes with a list of
        landmarks (&ldquo;library, second floor, left of the stairs&rdquo;) for the
        last part. <strong>Hard part:</strong> modelling the campus as a graph and
        finding the shortest path. <strong>Viva question:</strong> &ldquo;Which
        algorithm finds the route, and why that one?&rdquo;{" "}
        <strong>Difficulty:</strong> intermediate.
      </p>
      <h3>5. Field attendance with geofencing</h3>
      <p>
        For NSS camps, internships or field visits: a student can mark attendance
        only inside a set radius of the site. <strong>Hard part:</strong> GPS can be
        spoofed and is inaccurate near buildings, so you need a tolerance and an
        honest note on its limits. <strong>Viva question:</strong> &ldquo;How would
        a student cheat this, and what did you do about it?&rdquo;{" "}
        <strong>Difficulty:</strong> intermediate.
      </p>

      <h2>Ideas that use sensors</h2>
      <h3>6. Step and posture reminder</h3>
      <p>
        Use the step counter and accelerometer to detect long periods of sitting
        and remind the user to move. <strong>Hard part:</strong> sensor data is
        noisy and reading it constantly drains the battery, so you must sample
        sensibly. <strong>Viva question:</strong> &ldquo;How did you decide the
        user was sitting, and how did you test it?&rdquo;{" "}
        <strong>Difficulty:</strong> intermediate.
      </p>
      <h3>7. Fall alert for elderly users</h3>
      <p>
        Detect a sudden drop followed by stillness and send an SMS or call to a
        family contact unless the user cancels within a short countdown.{" "}
        <strong>Hard part:</strong> false alarms when the phone is dropped on a
        table. <strong>Viva question:</strong> &ldquo;What is your false-alarm rate
        and how did you measure it?&rdquo; <strong>Difficulty:</strong> advanced.
        Be clear in the report that this is a prototype, not a medical device.
      </p>

      <h2>Ideas that work offline</h2>
      <h3>8. Offline-first expense tracker with sync</h3>
      <p>
        Add expenses with no network, then sync to a server when online.{" "}
        <strong>Hard part:</strong> conflicts, when the same record changed on two
        devices. <strong>Viva question:</strong> &ldquo;If I edit the same entry on
        two phones, which one wins?&rdquo; <strong>Difficulty:</strong> intermediate
        to advanced. The{" "}
        <Link href="/expense-tracker-mobile/">expense tracker project</Link> on
        this site is built on exactly this problem, if you want to see how it can be
        laid out.
      </p>
      <h3>9. Survey collector for field workers</h3>
      <p>
        An NGO or a college survey team fills forms in villages without a signal;
        responses queue on the phone and upload later, with photos and location.{" "}
        <strong>Hard part:</strong> a form definition that can change without a new
        app version. <strong>Viva question:</strong> &ldquo;What happens to queued
        responses if the app is uninstalled?&rdquo; <strong>Difficulty:</strong>{" "}
        intermediate.
      </p>

      <h2>Ideas that use notifications and background work</h2>
      <h3>10. Medicine schedule with refill warnings</h3>
      <p>
        Doses at set times, a &ldquo;taken&rdquo; button, and a warning when the
        remaining count runs low. <strong>Hard part:</strong> Android limits
        background work to save battery, so reminders need the right scheduling API
        (exact alarms or WorkManager) and must survive a reboot.{" "}
        <strong>Viva question:</strong> &ldquo;Does the reminder still fire after
        the phone restarts?&rdquo; <strong>Difficulty:</strong> intermediate.
      </p>
      <h3>11. Hostel complaint tracker</h3>
      <p>
        Students raise a complaint with a photo; the warden assigns it; the student
        gets a push notification at each status change. <strong>Hard part:</strong>{" "}
        push notifications through Firebase Cloud Messaging and a backend that knows
        which device belongs to whom. <strong>Viva question:</strong> &ldquo;How
        does the server know which phone to notify?&rdquo;{" "}
        <strong>Difficulty:</strong> intermediate.
      </p>
      <h3>12. Study group finder for one college</h3>
      <p>
        Post a topic and a time, others join, and everyone gets a reminder before
        it starts. <strong>Hard part:</strong> keeping it to verified students of
        one college, and moderation. <strong>Viva question:</strong> &ldquo;How do
        you stop outsiders or spam?&rdquo; <strong>Difficulty:</strong> intermediate.
      </p>

      <h2>Permissions: the part that loses marks quietly</h2>
      <p>
        Camera, location, notifications and contacts all need permission from the
        user at run time. Examiners and reviewers look for three things:
      </p>
      <ul>
        <li>
          <strong>Ask at the moment of need.</strong> Request the camera when the
          user taps &ldquo;scan&rdquo;, not on the first screen.
        </li>
        <li>
          <strong>Handle &ldquo;no&rdquo;.</strong> If the user refuses, the app
          should explain what will not work and keep running, not crash.
        </li>
        <li>
          <strong>Ask for less.</strong> Do not request background location or
          contacts unless the core feature needs them. Saying in the viva that you
          removed a permission you did not need is a strong answer.
        </li>
      </ul>

      <h2>How to scope an Android project to the weeks you have</h2>
      <GuideTable
        head={["Time you have", "What to build", "What to leave out"]}
        rows={[
          ["2 to 4 weeks (mini project)", "One flow on one device with local storage (Room or SQLite) and one phone feature", "Login, backend, sync, push notifications"],
          ["6 to 8 weeks", "Two roles, a small backend or Firebase, one phone feature done well, tests of the main logic", "A second phone feature, admin dashboards on the web"],
          ["A full semester", "Offline-first with sync, notifications, a release build tested on two or three phones, a proper report", "Anything you cannot demo in five minutes"],
        ]}
      />
      <p>
        Freeze features at the halfway point and spend the rest on testing on a real
        phone, a signed release APK and a screen recording you can play if the venue
        Wi-Fi fails. The{" "}
        <Link href="/guides/final-year-project-in-one-month/">one-month project plan</Link>{" "}
        shows the same cut-the-scope approach week by week.
      </p>

      <h2>Before the demo</h2>
      <ul>
        <li>Install the release build on your own phone and a friend&apos;s, and run the whole flow on both.</li>
        <li>Turn on airplane mode and check what still works.</li>
        <li>Deny every permission once and make sure nothing crashes.</li>
        <li>Keep the API keys out of the repository; Android apps can be unpacked, so a key in the app is not secret.</li>
        <li>Practise explaining the lifecycle: what happens to your screen when the phone rotates or a call comes in.</li>
      </ul>
      <p>
        For the presentation itself, see{" "}
        <Link href="/guides/how-to-explain-your-project-in-the-viva/">
          how to explain your project in the viva
        </Link>{" "}
        and the{" "}
        <Link href="/guides/final-year-project-viva-questions/">viva questions guide</Link>.
        If you are still choosing between app, web and AI ideas, the{" "}
        <Link href="/guides/mini-project-ideas/">mini project ideas</Link> list and{" "}
        <Link href="/guides/how-to-choose-a-final-year-project/">
          how to choose a final year project
        </Link>{" "}
        will help you decide.
      </p>

      <hr />

      <p>
        If you want help building one, DefendIt runs project classes. Starter gives
        you a design document, a starter repository and a module-by-module build
        plan; Guided adds a review of every module and report chapter you write;
        Mentored adds live Google Meet classes where we build the project together,
        one module per class, with you writing part of every module, plus viva prep
        and a mock viva. The <Link href="/expense-tracker-mobile/">mobile expense tracker</Link>{" "}
        is the listed Android-friendly project; for your own idea, use the{" "}
        <Link href="/custom/">custom project page</Link>. Check your college&apos;s
        rules on outside help before you decide.
      </p>
    </>
  );
}
