import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "iot-project-ideas-for-final-year",
  title: "IoT Project Ideas for Final Year (A Practical Guide)",
  h1: "IoT projects for final year: ideas, the three layers, and what fails on demo day",
  description:
    "IoT final year project ideas with the sensors, board, protocol and hard part for each, plus how to prototype in a simulator first, what breaks on demo day, and how to scope hardware to your weeks.",
  tldr: "An IoT final year project has three layers: a device that senses or acts (an ESP32 or Raspberry Pi with sensors), a way to send data (Wi-Fi with MQTT or HTTP), and software that stores, shows and acts on it (a backend and a dashboard). Panels give credit for the whole chain working and for a rule that does something useful with the readings. Prototype the circuit in a simulator such as Wokwi, order parts in the first week, keep a recorded demo as backup, and never work with mains voltage without lab supervision. Check your college's brief on what hardware it expects.",
  category: "Project ideas",
  publishedAt: "2026-12-04",
  readingMinutes: 10,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "Which board is best for an IoT final year project: Arduino, ESP32 or Raspberry Pi?",
      answer:
        "For most sensor projects, an ESP32: it has Wi-Fi and Bluetooth built in and you program it from the Arduino IDE or with MicroPython. A classic Arduino Uno has no Wi-Fi, so it needs an extra module. A Raspberry Pi is a full Linux computer, worth it when you need a camera, heavier processing or a local server.",
    },
    {
      question: "Can I do an IoT project without buying hardware?",
      answer:
        "You can design and test a lot in a simulator. Wokwi simulates ESP32 and Arduino boards with common sensors in the browser, and Tinkercad Circuits covers Arduino. Many colleges still expect working hardware at the final demo, so ask your guide whether a simulated prototype is acceptable.",
    },
    {
      question: "What is MQTT and do I need it?",
      answer:
        "MQTT is a lightweight publish-subscribe messaging protocol: devices publish readings to topics on a broker, and your backend subscribes to them. It suits many small devices sending frequent readings. For a single device sending a reading every few minutes, a plain HTTPS request to your backend is simpler and perfectly acceptable.",
    },
    {
      question: "How do I make an IoT project more than a sensor on a dashboard?",
      answer:
        "Add a decision. Readings should lead to an action or an alert by a rule you can explain: water the plant when soil moisture stays low for a set time, alert when a freezer door has been open too long. Then handle failure: what happens when the device goes offline or a sensor gives impossible values.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        IoT projects are popular in final year for a good reason: a panel can see
        and touch the result. They are also the projects most likely to fail on the
        day, because hardware adds a whole category of problems software projects
        never have. This guide gives you ideas with the parts and the hard part for
        each, then the practical side: how to prototype before you buy, what breaks
        at the demo, and how to plan around delivery times. Your college&apos;s
        brief decides how much hardware is expected, so read it first.
      </p>

      <h2>The three layers of every IoT project</h2>
      <GuideTable
        head={["Layer", "What it is", "Typical choices"]}
        rows={[
          ["Device", "The board, its sensors and anything it switches", "ESP32 or Arduino with sensors; Raspberry Pi for a camera or heavier work"],
          ["Connectivity", "How readings leave the device", "Wi-Fi with MQTT (Mosquitto or a hosted broker) or HTTPS; Bluetooth for short range; LoRa for long range"],
          ["Software", "Where data is stored, shown and acted on", "A small backend (Node.js, Python) and database, or a platform such as ThingSpeak or Node-RED; a web or mobile dashboard"],
        ]}
      />
      <p>
        Many projects put all their effort into the first layer and treat the third
        as an afterthought. Examiners notice. The marks are usually in the chain
        working end to end and in a rule that turns readings into something useful.
      </p>

      <h2>IoT final year project ideas</h2>
      <GuideTable
        head={["Idea", "Parts", "The hard part", "Viva question it attracts"]}
        rows={[
          ["Smart irrigation for a college garden", "ESP32, capacitive soil-moisture sensor, relay and a small 12 V pump", "Not watering on one noisy reading; a dry-for-N-minutes rule", "Why a capacitive sensor and not a resistive one?"],
          ["Cold storage or medicine fridge monitor", "ESP32, waterproof DS18B20 temperature probe, door reed switch", "Alerting on 'too warm for too long', and when the Wi-Fi drops", "What happens to readings while the device is offline?"],
          ["Classroom air quality and occupancy display", "ESP32, CO2 sensor (such as an NDIR module), small OLED", "Sensor warm-up and calibration; showing a trend, not a jumpy number", "How did you check the sensor reads correctly?"],
          ["Water tank level with pump control", "ESP32, ultrasonic or float sensor, relay", "Ripples and echoes giving false levels; dry-run protection for the pump", "How does the pump stop if the sensor fails?"],
          ["Smart energy meter for one socket", "ESP32, a current sensor module rated for the load", "Calibration against a known load; safety around mains", "How accurate is it, and against what did you compare?"],
          ["RFID library or lab access log", "ESP32 or Arduino, RC522 RFID reader, backend", "Cloned or shared cards; logging every scan with time", "Can someone use a friend's card? What did you do about it?"],
          ["Parking slot availability for one lot", "IR or ultrasonic sensor per slot, ESP32, web map", "Cars parked across two slots; sensor placement", "How does the system handle a sensor that stops responding?"],
          ["Fall or panic alert wearable", "ESP32, accelerometer (MPU6050), buzzer, phone notification", "False alarms from sitting down quickly", "What is your false-alarm rate in testing?"],
        ]}
      />
      <p>
        Each of these has a software half worth as much as the circuit: storing
        readings with timestamps, a dashboard that shows history, alerts with a
        rule, and handling a device that goes silent.
      </p>

      <h2>Prototype in a simulator before you buy</h2>
      <p>
        Free browser simulators let you write the firmware and wire virtual sensors
        before any parts arrive:
      </p>
      <ul>
        <li>
          <strong>Wokwi</strong> simulates ESP32, Arduino and Raspberry Pi Pico
          boards with many common sensors and displays, and can even connect a
          simulated ESP32 to Wi-Fi to talk to your backend.
        </li>
        <li>
          <strong>Tinkercad Circuits</strong> covers Arduino and basic electronics,
          good for checking a circuit and resistor values.
        </li>
      </ul>
      <p>
        Use the simulator to build the backend and dashboard while you wait for
        delivery. When the real parts arrive, only the wiring and calibration are
        new, and you have screenshots of the simulated version for the report.
      </p>

      <h2>What fails on demo day, and how to prepare</h2>
      <GuideTable
        head={["Problem", "Why it happens", "What to do"]}
        rows={[
          ["The venue Wi-Fi blocks the device", "College networks often need a login page that an ESP32 cannot complete", "Bring a phone hotspot and configure the device for it in advance"],
          ["Random resets", "A weak USB cable or a pump or relay drawing too much current from the board", "Power motors and pumps separately, with a common ground"],
          ["Loose connections", "Jumper wires on a breadboard shake loose in a bag", "Move the final circuit to a soldered perfboard or use screw terminals"],
          ["Sensor reads nonsense", "No warm-up, no calibration, or a 5 V sensor on a 3.3 V board", "Calibrate against a known value and check each sensor's logic voltage"],
          ["Cloud dashboard is down or rate-limited", "Free tiers have limits", "Show local readings on a display too, and keep a recorded run"],
        ]}
      />
      <p>
        Record a full working run, start to finish, a few days before the
        demonstration. If anything fails on the day, you can show the recording
        while you fix it, which is far better than an empty table.
      </p>

      <h2>Safety: mains voltage is not a student shortcut</h2>
      <p>
        Projects that switch lights, fans or pumps on household supply involve
        voltages that can kill. Use low-voltage loads (a 12 V pump, an LED strip)
        for the prototype wherever possible. If the project genuinely needs mains,
        use a properly rated, enclosed relay module, and do that wiring only under
        your lab staff&apos;s supervision. Say in the report what safety measures you
        took; examiners respect it.
      </p>

      <h2>Scoping: order hardware in week one</h2>
      <GuideTable
        head={["Week", "Device work", "Software work"]}
        rows={[
          ["1", "Final idea, parts list, order everything (plus spares of cheap sensors)", "Design the data model and the dashboard screens"],
          ["2 to 3", "Simulator prototype; real parts as they arrive, one sensor at a time", "Backend that accepts readings; store with timestamps"],
          ["4 to 5", "Full circuit on a breadboard; calibration", "Dashboard with history; the rule and the alert"],
          ["6", "Move to perfboard; enclosure; power supply", "Offline handling; tests of the rule with fake readings"],
          ["7 onwards", "Freeze hardware", "Report, recorded demo, viva practice"],
        ]}
      />
      <p>
        Adjust the weeks to your calendar, but keep the order. If your deadline is
        close, the{" "}
        <Link href="/guides/final-year-project-in-one-month/">one-month plan</Link>{" "}
        shows how to cut scope without cutting quality.
      </p>

      <h2>What the report needs that software reports do not</h2>
      <ul>
        <li>A block diagram of the three layers and a circuit diagram (Fritzing, KiCad or a clean hand drawing).</li>
        <li>A bill of materials: each component, its role and why you chose it.</li>
        <li>Calibration and test results: what you compared each sensor against and what you got.</li>
        <li>Power: how the device is powered and roughly how long it would run on a battery, if it uses one.</li>
        <li>Limitations stated plainly, such as accuracy, range and what happens offline.</li>
      </ul>
      <p>
        The rest follows the usual structure in the{" "}
        <Link href="/guides/final-year-project-report-format/">report format guide</Link>,
        and your synopsis can follow the{" "}
        <Link href="/guides/final-year-project-synopsis-format/">synopsis format</Link>.
        For the questions you will face, see{" "}
        <Link href="/guides/how-to-explain-your-project-in-the-viva/">
          how to explain your project in the viva
        </Link>
        .
      </p>

      <h2>If you would rather stay software-only</h2>
      <p>
        IoT is not the only way to build something tangible. If delivery times,
        cost or lab access make hardware risky, an app that uses the phone&apos;s own
        sensors and camera gives you some of the same appeal with no wiring; see the{" "}
        <Link href="/guides/android-project-ideas-for-students/">
          Android project ideas
        </Link>
        . Or look at the{" "}
        <Link href="/guides/list-of-projects-for-computer-science-students/">
          computer science project list
        </Link>
        .
      </p>

      <hr />

      <p>
        An honest note on what I offer: DefendIt&apos;s project classes are for
        software projects, and I do not supply, wire or debug hardware. The listed
        projects come in three tiers (Starter: a design document, a starter
        repository and a build plan; Guided: plus a review of every module and
        report chapter you write; Mentored: plus live Google Meet classes where we
        build the project together, one module per class, with you writing part of
        every module, and a mock viva). If your IoT project has a substantial
        software side, such as the backend, dashboard and alerts, you can ask on the{" "}
        <Link href="/custom/">custom project page</Link> whether that part can be
        taught; the circuit stays with you and your lab. Check your college&apos;s
        rules on outside help first.
      </p>
    </>
  );
}
