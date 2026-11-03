import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";

export const meta: GuideMeta = {
  slug: "face-recognition-attendance-system-project",
  title: "Face Recognition Attendance System Project",
  h1: "Face recognition attendance system project: what it does with a face it has never seen",
  description:
    "A face recognition attendance system project in Python, told through one viva question: what happens with a stranger? Encodings, the 0.5 threshold, speed.",
  tldr: "A face recognition attendance system project works by turning each face into a 128-number encoding and marking a student present only when the nearest enrolled encoding is closer than a threshold. Without that threshold, a stranger is marked as the closest-looking classmate. Add a frame-skipping speed fix and a one-mark-per-session rule.",
  category: "Project story",
  publishedAt: "2026-11-04",
  readingMinutes: 8,
  degrees: ["BCA", "MCA", "B.Tech"],
  ogImage: "/og/campus/cat-ai-ml.jpg",
  faq: [
    {
      question: "Which language and library suit a face recognition attendance system project?",
      answer:
        "Python with OpenCV for the webcam and the face-recognition library (built on dlib) for detection and encodings. Flask works for the dashboard and SQLite is enough for storage. That stack runs on a student laptop with no GPU, which is why it is a common choice.",
    },
    {
      question: "Why use encodings instead of training a classifier?",
      answer:
        "A classifier with one class per student must be retrained every time someone joins. With encodings, enrolling a new student means storing one more vector. No training is needed, and that is an answer the panel usually likes.",
    },
    {
      question: "Can a face recognition attendance system be fooled with a photo?",
      answer:
        "The base version can be, by a printed or on-screen photo. The standard fix is a liveness check, such as asking for a blink measured with eye landmarks. Say plainly that the base version has no liveness check and name it as your extension.",
    },
    {
      question: "Is it fine to store student faces for this project?",
      answer:
        "Capture photos only with the student's consent, and store the encodings rather than the images. Recognition needs only the encodings, so the raw photos can be deleted after enrolment. Mention that in your report.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Our viva question bank has a short list of questions that are really
        aimed at one kind of project. One of them is aimed at face recognition:
        &ldquo;What does it do with a face it has never seen?&rdquo; Beside it
        the bank notes what the examiner is testing: rejection versus
        nearest-match guessing. It is the whole project in one question, which is
        why I start with it.
      </p>

      <h2>The student&rsquo;s problem, in plain words</h2>
      <p>
        You want to build a face recognition attendance system project that runs
        on your own laptop, marks students present from a webcam, and survives a
        viva. The first part is easy to find. Search results give you tutorials
        that detect a face and draw a box, and some that print a name above it.
        What they rarely cover is what the name means when the face is not in
        your dataset.
      </p>
      <p>
        Picture a student whose demo works perfectly with five classmates
        enrolled. This is a made-up student, but the setup is the usual one. The
        examiner walks in front of the camera, someone who was never enrolled,
        and the screen says &ldquo;Rahul, present&rdquo;. Nothing crashed. The
        system just did what the naive version always does.
      </p>

      <h2>Chapter one: how the matching really works</h2>
      <p>
        The project page describes the pipeline. At enrolment, a few photos of
        a student go through the face-recognition library, which is built on
        dlib. It finds the face and computes a 128-number encoding, and the
        average of those encodings becomes the student&rsquo;s stored reference.
        During a class, OpenCV reads frames, each detected face is encoded, and
        the encoding is compared with every enrolled encoding by Euclidean
        distance.
      </p>
      <p>
        An encoding is a vector produced by a network trained so that photos of
        the same person land close together and photos of different people land
        far apart. That sentence is the answer to &ldquo;what is a face
        encoding?&rdquo;, and it is worth being able to say it without notes.
      </p>

      <h2>Chapter two: nearest match always finds someone</h2>
      <p>
        Here is the problem hidden inside the simple version. If your code says
        &ldquo;find the enrolled student with the smallest distance&rdquo;, then
        there is always a smallest distance. A stranger gets matched to whoever
        looks least different from them. The code does not malfunction. It
        answers a question nobody should have asked.
      </p>
      <p>
        The fix on the project page is a threshold. A face counts as identified
        only if its nearest distance is under 0.5, which is stricter than the
        library&rsquo;s 0.6 default. Otherwise it is labelled unknown. Notice
        what this really is: a trade. A lower threshold means fewer false
        matches and more missed students. A higher one means the opposite. The
        project is meant to show you that trade-off with numbers rather than
        hide it, and the project page suggests the public Labeled Faces in the
        Wild dataset for testing the threshold.
      </p>
      <p>
        That is the turning point of this project. It stops being &ldquo;recognise
        faces&rdquo; and becomes &ldquo;decide when not to answer&rdquo;. Every
        good machine learning viva eventually lands there. Our question bank
        says the same thing for ML projects generally: show me a case where your
        model is wrong.
      </p>

      <h2>Chapter three: speed on an ordinary laptop</h2>
      <p>
        The second thing that breaks on a student laptop is the frame rate.
        Encoding every frame at full resolution is too slow. The project
        downsizes frames and processes only every third one, which keeps the
        feed smooth without missing anyone who stays in view for more than a
        moment. It is a small decision with a good viva answer: you can say what
        you gave up (the faces that flash by in under three frames) and why that
        is acceptable in a classroom.
      </p>

      <h2>Chapter four: once per session, and the honest limit</h2>
      <p>
        Attendance needs one row per student per session. The project uses a
        unique constraint on student and session in the attendance table, so
        later detections in the same session are ignored. This is the same
        pattern as preventing a double booking in a hospital system. Let the
        database refuse the duplicate instead of hoping your code checks first.
        If you want to see that idea in a different project, read the{" "}
        <Link href="/guides/hospital-management-system-project/">
          hospital management system project story
        </Link>
        .
      </p>
      <p>
        Then the limit you should state before the panel does. A printed or
        on-screen photo can fool the base version. The project page is honest
        about this: liveness checks such as blink detection are discussed as an
        extension, and the base version does not include one. Saying that
        yourself, calmly, does more for your viva than pretending the system is
        spoof-proof.
      </p>

      <h2>What I would do again</h2>
      <ol>
        <li>Store encodings, not photos, and delete the photos after enrolment.</li>
        <li>Set a distance threshold and write down why you chose it, ideally tested on a public dataset.</li>
        <li>Show the unknown-face case in your demo before anyone asks for it.</li>
        <li>Downscale frames and skip frames, and say what you gave up.</li>
        <li>Enforce one attendance row per student per session with a unique constraint.</li>
        <li>Put the photo-spoofing limit in your report and name liveness detection as future work.</li>
        <li>Export attendance to CSV, because that is what a department actually asks for.</li>
      </ol>

      <h2>Viva answers to rehearse</h2>
      <p>
        Why encodings and not a CNN classifier per student: enrolling is just
        storing a vector. How do you decide two faces match: Euclidean distance
        below 0.5. Can someone fool it with a photo: yes in the base version,
        and liveness detection is the standard fix. Show me it failing in poor
        lighting: have a screenshot or a short recording ready, because the
        bank&rsquo;s own note says the point is whether real-world limits were
        tested. The{" "}
        <Link href="/question-bank/">question bank</Link> has the rest, and the
        guide on{" "}
        <Link href="/guides/ai-ml-final-year-projects/">
          AI projects for final year students
        </Link>{" "}
        compares this project with others in the same family.
      </p>

      <hr />

      <p>
        The full face recognition attendance project, with its six sessions and
        deliverables, is listed on the{" "}
        <Link href="/face-recognition-attendance/">
          face recognition attendance page
        </Link>
        . If you are not sure whether a vision project suits your degree, the{" "}
        <Link href="/find-my-project/">find my project quiz</Link> takes a
        couple of minutes.
      </p>
    </>
  );
}
