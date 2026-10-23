import type { CampusProject } from "@/lib/campus";

export const faceRecognitionAttendance: CampusProject = {
  slug: "face-recognition-attendance",
  title: "Face Recognition Attendance System",
  category: "Computer Vision · Python",
  tagline:
    "Marks attendance from a live camera feed — and can explain what an embedding is when asked.",
  summary:
    "A camera-based attendance system that enrolls students from a few photos, recognises faces in a live feed, and writes attendance to a database with a timestamp. It handles the two things a demo version never does: rejecting an unknown face instead of guessing the closest match, and refusing to mark the same student twice in one session. Examiners always ask how the recognition works — the sessions make sure you can draw it on the board.",
  degrees: ["BCA", "B.Tech", "MCA", "Diploma"],
  domain: "AI / Machine Learning",
  stack: ["Python", "OpenCV", "face-recognition (dlib)", "Flask", "SQLite", "NumPy"],
  features: [
    "Enroll a student from a handful of photos and build their face encoding",
    "Live webcam feed detecting and labelling multiple faces at once",
    "Unknown faces are rejected, not matched to the nearest student",
    "Duplicate-entry guard — one mark per student per session",
    "Attendance dashboard with date filters and per-subject percentage",
    "CSV export for submission to the department",
  ],
  modules: [
    "How face recognition actually works — detection, encoding, distance threshold",
    "The enrollment pipeline and where encodings are stored",
    "Live video capture, frame handling, and why you do not process every frame",
    "Matching logic, the unknown-face threshold, and the duplicate guard",
    "Flask app, database schema, and the attendance dashboard",
    "Accuracy limits, lighting failure cases, and mock viva",
  ],
  deepDive: {
    "howItWorks": [
      "Enrolment takes a handful of photos of a student. For each, the face-recognition library, built on dlib, locates the face and computes a 128-number encoding; the average of those encodings is stored as the student's reference.",
      "During a class, OpenCV reads frames from the webcam. To keep it real-time, only every few frames are processed, at reduced size. Each detected face is encoded and compared with all enrolled encodings by Euclidean distance.",
      "A face is identified only if its nearest distance is under a strict threshold (0.5, tighter than the library's 0.6 default); otherwise it is labelled unknown. A recognised student is marked present once per session, and the Flask dashboard shows attendance by date and subject with percentages and a CSV export."
    ],
    "data": "Enrolment photos captured by the app with the student's consent, encodings stored in SQLite as arrays alongside student records, and attendance rows of student, session, subject and time. Raw photos can be deleted after enrolment, since recognition needs only the encodings. The public Labeled Faces in the Wild dataset is useful for testing the threshold.",
    "hardParts": [
      {
        "title": "Unknown faces",
        "body": "Nearest-match logic always finds someone. A distance threshold turns a stranger into unknown instead of marking the closest-looking student present, and the project shows how the threshold trades false matches against missed ones."
      },
      {
        "title": "Speed",
        "body": "Encoding every frame at full resolution is too slow on a laptop. Downscaling frames and processing every third one keeps the feed smooth without missing anyone who stays in view."
      },
      {
        "title": "Proxy attendance with a photo",
        "body": "Holding up a phone photo can fool a simple system. The project discusses liveness checks such as blink detection as an extension and is honest that the base version does not include one."
      }
    ],
    "viva": [
      {
        "question": "What is a face encoding?",
        "answer": "A 128-dimensional vector produced by a deep network trained so that photos of the same person produce vectors close together and photos of different people produce vectors far apart."
      },
      {
        "question": "How do you decide two faces are the same person?",
        "answer": "By the Euclidean distance between their encodings. Below the threshold, 0.5 here, they count as a match; above it, the face is unknown."
      },
      {
        "question": "Why not use a CNN classifier with one class per student?",
        "answer": "A classifier must be retrained every time a student joins. With encodings, enrolling a student is just storing a new vector, and no training is needed."
      },
      {
        "question": "How do you stop the same student being marked twice?",
        "answer": "A unique constraint on student and session in the attendance table. Later detections in the same session are ignored."
      },
      {
        "question": "Can someone fool it with a photo?",
        "answer": "The base version can be fooled by a printed or on-screen photo. Liveness detection, for example asking for a blink measured with eye landmarks, is the standard fix and is discussed as an extension."
      }
    ]
  },
  difficulty: "Intermediate",
  sessionCount: 6,
  prices: { source: 4000, academic: 7500, mentored: 13000 },
  seatsPerCollege: 2,
  publishedAt: "2026-07-27",
};
