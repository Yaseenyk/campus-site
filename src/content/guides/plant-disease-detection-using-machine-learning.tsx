import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";

export const meta: GuideMeta = {
  slug: "plant-disease-detection-using-machine-learning",
  title: "Plant Disease Detection Using Machine Learning",
  h1: "Plant disease detection using machine learning: the accuracy number that lies",
  description:
    "Plant disease detection using machine learning, told through the gap between lab photos and field photos: transfer learning, PlantVillage, PlantDoc, thresholds.",
  tldr: "Plant disease detection using machine learning means fine-tuning a pretrained CNN such as MobileNetV2 on PlantVillage leaf images. The trap is that a high score on those clean lab photos collapses on real field photos. Report both scores, test on PlantDoc, and add a not-sure answer for low confidence.",
  category: "Project story",
  publishedAt: "2026-11-04",
  readingMinutes: 8,
  degrees: ["BCA", "MCA", "B.Tech"],
  ogImage: "/og/campus/cat-ai-ml.jpg",
  faq: [
    {
      question: "Which dataset should I use for a plant disease detection project?",
      answer:
        "PlantVillage is the standard starting point, with about 54,000 leaf images across 38 classes of 14 crops. Its photos are single leaves on plain backgrounds, so also test on PlantDoc, a smaller set of about 2,600 photos taken in real fields, and report both scores.",
    },
    {
      question: "Why use transfer learning instead of training a CNN from scratch?",
      answer:
        "A network pretrained on ImageNet already detects edges, textures and shapes. You retrain only the last layers for your disease classes, which needs far fewer images and far less training time than starting from nothing.",
    },
    {
      question: "How should the app handle a photo that is not a leaf?",
      answer:
        "A softmax always picks a class, even for a photo of a cat. Set a confidence threshold: if the best probability is below it, return a not-sure message and ask for a clearer leaf photo instead of naming a disease.",
    },
    {
      question: "Is high accuracy enough to pass the viva?",
      answer:
        "No. A panel will ask why the score is that high, how you split the data, and what happens on photos unlike your training set. Accuracy alone also hides rare diseases, so report per-class recall too.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        There is a sentence on our plant disease project page that I would
        defend before any other. It says a model can reach 99 per cent on the
        PlantVillage dataset and still fall sharply on real photos with soil,
        hands and other leaves in the frame. It is on the page because it is
        the one thing a student of this project must understand before the
        viva, and the rest of the project is arranged around it.
      </p>

      <h2>The student&rsquo;s problem, in plain words</h2>
      <p>
        You want a plant disease detection project using machine learning that
        looks serious and that you can explain. Search results for it are mostly
        journal papers, review articles and a couple of project-sale pages. They
        show you that it can be done. They do not tell you how to explain a
        number to a panel that has seen a hundred of these.
      </p>
      <p>
        Picture a final year student who trains a model, gets a very high
        accuracy on the first run and walks into the viva proud. This is a
        made-up student. The first question is not about the architecture. It is
        the one our question bank calls the single most common ML viva trap:
        &ldquo;Your accuracy is high. Why is accuracy the wrong metric
        here?&rdquo; Then come &ldquo;where did your dataset come from?&rdquo;
        and &ldquo;how did you split train and test?&rdquo; All three are
        really asking whether the high number means anything.
      </p>

      <h2>Chapter one: start from a pretrained network</h2>
      <p>
        The project page builds on a pretrained convolutional network, MobileNetV2
        or EfficientNetB0 trained on ImageNet, used as a feature extractor. You
        replace its classification head with a small dense layer for your
        disease classes. You train the new head first with the base frozen, and
        then unfreeze the top layers and fine-tune at a low learning rate.
      </p>
      <p>
        Why freeze first? The new head starts with random weights, and its large
        early gradients would wreck the pretrained features. This is a good
        viva answer because it is an explanation of ordering, not a definition.
        Images are resized to 224 by 224 and normalised the way the base
        network expects. Getting that preprocessing identical at training and at
        prediction time is one of those details that quietly breaks the demo.
      </p>

      <h2>Chapter two: the dataset and the gap</h2>
      <p>
        According to the project page, the two datasets that matter are
        PlantVillage, about 54,000 leaf images across 38 classes of 14 crops,
        and PlantDoc, about 2,600 photos taken in real fields. PlantVillage
        photos are single leaves on a plain background. A model trained only on
        them learns that world very well, and it has never seen soil or a
        thumb.
      </p>
      <p>
        This is the turning point. The project does not hide the gap. It
        measures it: train on PlantVillage, then test on PlantDoc, and put both
        scores in the report. The drop is a finding, not a failure. When the
        panel asks &ldquo;why is your accuracy lower on PlantDoc?&rdquo;, the
        answer is already in your own results table. You then narrow the gap
        with augmentation: random flips, rotations, zoom and brightness changes,
        so the model learns the disease rather than the pose or lighting of the
        photo.
      </p>
      <p>
        Also check for leakage. If near-identical photos of the same leaf end up
        in both training and test sets, your score is inflated before you start.
        Split carefully, and say how.
      </p>

      <h2>Chapter three: saying &ldquo;I am not sure&rdquo;</h2>
      <p>
        A softmax output always picks a class, even for a photo of a cat. If you
        send a non-leaf image to a model you built, it will name a disease with
        a straight face. The project handles this with a confidence threshold.
        If the best probability is below it, the API returns a not-sure
        response and asks for a clearer leaf photo. It also returns the top
        three predictions with probabilities, so a close call looks like a close
        call.
      </p>
      <p>
        There is one more issue the page names: class imbalance. Some diseases
        have many times more images than others. Class weights during training
        and per-class recall in the report stop the rare diseases from being
        ignored, and they let you answer the follow-up to a high accuracy
        number, which is why accuracy alone is the wrong metric here.
      </p>

      <h2>Chapter four: serving it</h2>
      <p>
        The trained model is saved and served by FastAPI, with a React page for
        capture or upload. A photo goes through the same preprocessing, and the
        model returns the top three classes. Keep an eye on model size and load
        time when you deploy. The{" "}
        <Link href="/guides/how-to-deploy-your-final-year-project-free/">
          free deployment guide
        </Link>{" "}
        covers where a small model service can live without cost.
      </p>

      <h2>What I would do again</h2>
      <ol>
        <li>Use transfer learning with MobileNetV2 or EfficientNetB0, not a CNN from scratch.</li>
        <li>Freeze the base, train the head, then fine-tune the top layers at a low learning rate.</li>
        <li>Test on a second dataset of real field photos and report both scores.</li>
        <li>Augment with flips, rotations, zoom and brightness.</li>
        <li>Report per-class recall, not only overall accuracy.</li>
        <li>Return top three predictions, and a not-sure message under a confidence threshold.</li>
        <li>Write the lab-versus-field gap into your limitations chapter before the panel finds it.</li>
      </ol>

      <h2>Viva answers to rehearse</h2>
      <p>
        What is transfer learning: reuse a network trained on a large dataset
        and retrain only the last layers. Why freeze the base first: to protect
        pretrained features from large early gradients. What does augmentation
        do: it reduces overfitting by showing the model altered copies. How does
        the app handle a non-leaf photo: a confidence threshold and a not-sure
        answer. Practise the rest with the machine learning section of the{" "}
        <Link href="/question-bank/">viva question bank</Link>, which has
        eleven questions on data provenance, splits, metrics and bias.
      </p>

      <hr />

      <p>
        The full project, with the training notebook, the FastAPI service and
        the React interface, is on the{" "}
        <Link href="/plant-disease-detection/">
          plant disease detection page
        </Link>
        . For other ML titles with the same level of detail, see the{" "}
        <Link href="/guides/ai-ml-final-year-projects/">
          AI projects guide
        </Link>
        .
      </p>
    </>
  );
}
