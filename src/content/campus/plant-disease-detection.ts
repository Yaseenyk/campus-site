import type { CampusProject } from "@/lib/campus";

export const plantDiseaseDetection: CampusProject = {
  slug: "plant-disease-detection",
  title: "Plant Disease Detection — a CNN that works on real leaf photos",
  category: "AI / Machine Learning · Computer Vision",
  tagline:
    "Point a phone at a leaf, get the disease, the confidence, and what to do about it.",
  summary:
    "Most computer-vision projects demo on an image straight from the training set and fall apart on a photo taken in the exam hall. This one trains a CNN with transfer learning on a leaf-disease dataset, runs on a picture snapped in class, returns the diagnosis with a confidence score and the top three possibilities, and maps that to a plain treatment note. It handles the awkward case honestly — a blurry photo or a leaf it has never seen returns low confidence, not a confident wrong answer.",
  degrees: ["B.Tech", "M.Tech", "MCA"],
  domain: "AI / Machine Learning",
  stack: [
    "Python",
    "TensorFlow / Keras",
    "CNN (transfer learning)",
    "FastAPI",
    "React",
  ],
  features: [
    "Upload or capture a leaf image and get the disease with a confidence score",
    "Top-three predictions, so a close call is shown as a close call",
    "A treatment / advice note mapped to each diagnosis",
    "Low-confidence and 'not a leaf' inputs handled gracefully",
    "The training notebook with honest validation metrics",
    "A FastAPI model service behind a React capture-and-upload UI",
  ],
  modules: [
    "Why CNNs for images, and why transfer learning beats training from scratch",
    "The dataset, augmentation, and avoiding data leakage",
    "Training, and validating on data the model never saw",
    "Confidence, thresholds, and designing the unknown case",
    "Serving the trained model with FastAPI",
    "The React capture / upload interface",
    "Deployment, model size, and load time",
    "Full mock viva on the generalisation question",
  ],
  deepDive: {
    "howItWorks": [
      "A pretrained convolutional network, MobileNetV2 or EfficientNetB0 trained on ImageNet, is used as a feature extractor. Its classification head is replaced with a small dense layer for the disease classes, trained first with the base frozen and then fine-tuned with the top layers unfrozen at a low learning rate.",
      "Training images are augmented with random flips, rotations, zoom and brightness changes, so the model sees leaves at angles and in light it would otherwise never meet. Images are resized to 224 by 224 and normalised exactly as the base network expects.",
      "The trained model is saved and served by FastAPI. A photo uploaded from the React UI goes through the same preprocessing, and the API returns the top three classes with probabilities. If the best probability is below a threshold, it answers that it is not sure instead of naming a disease."
    ],
    "data": "PlantVillage, the public dataset of about 54,000 leaf images across 38 classes of 14 crops, and PlantDoc, a smaller set of about 2,600 photos taken in real fields. PlantVillage photos are single leaves on a plain background, so a model trained only on them does poorly on real photos; testing on PlantDoc shows that gap, and the project reports both scores.",
    "hardParts": [
      {
        "title": "Lab photos versus field photos",
        "body": "A model can reach 99 per cent on PlantVillage and fall sharply on real photos with soil, hands and other leaves in frame. Reporting the field-photo score, and augmenting to narrow the gap, is what makes the project credible."
      },
      {
        "title": "Inputs that are not leaves",
        "body": "A softmax always picks a class, even for a photo of a cat. A confidence threshold and a not-sure response keep the app from confidently diagnosing nonsense."
      },
      {
        "title": "Class imbalance",
        "body": "Some diseases have many times more images than others. Class weights during training and per-class recall in the report stop the rare diseases from being ignored."
      }
    ],
    "viva": [
      {
        "question": "What is transfer learning and why use it?",
        "answer": "Reusing a network already trained on a large dataset (ImageNet) and retraining only the last layers for your task. Its early layers already detect edges, textures and shapes, so it needs far fewer images and much less training time than a CNN from scratch."
      },
      {
        "question": "Why freeze the base model first?",
        "answer": "The new head starts with random weights, and its large early gradients would wreck the pretrained features. Training the head first, then unfreezing the top layers with a small learning rate, fine-tunes without destroying what was learned."
      },
      {
        "question": "What does data augmentation do?",
        "answer": "It creates altered copies of training images, rotated, flipped, zoomed or brightened, so the model learns the disease rather than the exact pose or lighting of the photos. It reduces overfitting."
      },
      {
        "question": "Why is your accuracy lower on PlantDoc?",
        "answer": "PlantVillage images have plain backgrounds; PlantDoc photos are from real fields. The drop shows how far lab results are from real use, which is a finding, not a failure."
      },
      {
        "question": "How does the app handle a photo that is not a leaf?",
        "answer": "If the top predicted probability is below a set threshold, the API returns a not-sure response asking for a clearer leaf photo, instead of the most likely disease."
      }
    ]
  },
  difficulty: "Advanced",
  sessionCount: 8,
  prices: { source: 6000, academic: 11000, mentored: 18000 },
  seatsPerCollege: 1,
  publishedAt: "2026-07-27",
};
