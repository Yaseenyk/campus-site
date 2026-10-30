/**
 * Generates the sample final year project report PDF for the Hospital
 * Management System (MERN) listing, committed as a static asset at
 * public/downloads/ and linked from /sample-project-report/.
 *
 *   node scripts/generate-sample-report.mjs
 *
 * Why a script and not a hand-written PDF: the content is checked in as
 * text, so every claim in it can be diffed against the project listing
 * (src/content/campus/hospital-management-mern.ts). It describes only what
 * that listing describes. No college, guide, marks or metrics are invented —
 * the front matter a college requires is deliberately left out.
 *
 * Two render passes: the first records which page every heading lands on,
 * the second prints those numbers into the table of contents. The TOC has
 * the same number of lines in both passes, so the numbers do not drift.
 */
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(
  ROOT,
  "public",
  "downloads",
  "sample-final-year-project-report-hospital-management-mern.pdf",
);

const PROJECT = "Hospital Management System (MERN)";
const RUNNING_HEAD = `${PROJECT} — sample final year project report · DefendIt`;

// ---------------------------------------------------------------------------
// Layout constants (A4, points)
// ---------------------------------------------------------------------------
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const M = { top: 72, bottom: 64, left: 64, right: 64 };
const TEXT_W = PAGE_W - M.left - M.right;

const SIZE = { body: 10.5, small: 8.5, h1: 18, h2: 13, h3: 11, code: 8.5, title: 26 };
const LEAD = { body: 15, small: 12, code: 11 };

const INK = rgb(0.08, 0.09, 0.11);
const MUTED = rgb(0.45, 0.46, 0.5);
const RULE = rgb(0.8, 0.81, 0.84);
const FILL = rgb(0.955, 0.96, 0.97);
const ACCENT = rgb(0.0, 0.52, 0.6);

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------
/** Standard fonts are WinAnsi only; keep the few characters outside it out. */
function clean(text) {
  return String(text)
    .replace(/→/g, "->")
    .replace(/₹/g, "Rs ")
    .replace(/≥/g, ">=")
    .replace(/≤/g, "<=")
    .replace(/[^\x00-\x7F -ÿ–—‘’“”•…]/g, "");
}

function wrap(text, font, size, maxWidth) {
  const lines = [];
  for (const para of clean(text).split("\n")) {
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    lines.push(line);
  }
  return lines;
}

// ---------------------------------------------------------------------------
// Renderer
// ---------------------------------------------------------------------------
class Report {
  constructor(doc, fonts, tocMap) {
    this.doc = doc;
    this.f = fonts;
    this.tocMap = tocMap;
    this.headings = [];
    this.page = null;
    this.y = 0;
    this.pageNo = 0; // title page is unnumbered
    this.figNo = 0;
    this.tableNo = 0;
  }

  // --- pages ---------------------------------------------------------------
  newPage({ numbered = true } = {}) {
    this.page = this.doc.addPage([PAGE_W, PAGE_H]);
    this.y = PAGE_H - M.top;
    if (numbered) {
      this.pageNo += 1;
      this.page.drawText(clean(RUNNING_HEAD), {
        x: M.left,
        y: PAGE_H - 40,
        size: 7.5,
        font: this.f.regular,
        color: MUTED,
      });
      this.page.drawLine({
        start: { x: M.left, y: PAGE_H - 48 },
        end: { x: PAGE_W - M.right, y: PAGE_H - 48 },
        thickness: 0.5,
        color: RULE,
      });
      const label = `Page ${this.pageNo}`;
      const w = this.f.regular.widthOfTextAtSize(label, 8);
      this.page.drawText(label, {
        x: (PAGE_W - w) / 2,
        y: 36,
        size: 8,
        font: this.f.regular,
        color: MUTED,
      });
    }
  }

  ensure(height) {
    if (this.y - height < M.bottom) this.newPage();
  }

  gap(n = 1) {
    this.y -= LEAD.body * n;
  }

  // --- text ----------------------------------------------------------------
  lines(text, { font = this.f.regular, size = SIZE.body, lead = LEAD.body, color = INK, x = M.left, width = TEXT_W } = {}) {
    for (const line of wrap(text, font, size, width)) {
      this.ensure(lead);
      this.page.drawText(line, { x, y: this.y - size, size, font, color });
      this.y -= lead;
    }
  }

  p(text) {
    this.lines(text);
    this.gap(0.6);
  }

  h1(text) {
    this.newPage();
    this.headings.push({ level: 1, text, page: this.pageNo });
    this.page.drawText(clean(text), {
      x: M.left,
      y: this.y - SIZE.h1,
      size: SIZE.h1,
      font: this.f.bold,
      color: INK,
    });
    this.y -= SIZE.h1 + 10;
    this.page.drawLine({
      start: { x: M.left, y: this.y },
      end: { x: M.left + 48, y: this.y },
      thickness: 2,
      color: ACCENT,
    });
    this.y -= 22;
  }

  h2(text) {
    this.ensure(SIZE.h2 + LEAD.body * 3);
    this.y -= 10;
    this.headings.push({ level: 2, text, page: this.pageNo });
    this.page.drawText(clean(text), {
      x: M.left,
      y: this.y - SIZE.h2,
      size: SIZE.h2,
      font: this.f.bold,
      color: INK,
    });
    this.y -= SIZE.h2 + 10;
  }

  h3(text) {
    this.ensure(SIZE.h3 + LEAD.body * 2);
    this.y -= 4;
    this.page.drawText(clean(text), {
      x: M.left,
      y: this.y - SIZE.h3,
      size: SIZE.h3,
      font: this.f.bold,
      color: INK,
    });
    this.y -= SIZE.h3 + 7;
  }

  list(items, { ordered = false } = {}) {
    items.forEach((item, i) => {
      const marker = ordered ? `${i + 1}.` : "•";
      const indent = 18;
      const first = wrap(item, this.f.regular, SIZE.body, TEXT_W - indent);
      this.ensure(LEAD.body);
      this.page.drawText(marker, { x: M.left + 2, y: this.y - SIZE.body, size: SIZE.body, font: this.f.regular, color: INK });
      for (const line of first) {
        this.ensure(LEAD.body);
        this.page.drawText(line, { x: M.left + indent, y: this.y - SIZE.body, size: SIZE.body, font: this.f.regular, color: INK });
        this.y -= LEAD.body;
      }
      this.y -= 2;
    });
    this.gap(0.5);
  }

  code(src, caption) {
    const lines = clean(src).split("\n");
    const pad = 8;
    const height = lines.length * LEAD.code + pad * 2;
    // Keep a listing on one page when it fits; otherwise split plainly.
    if (height < PAGE_H - M.top - M.bottom) this.ensure(height + (caption ? LEAD.small : 0));
    let startY = this.y;
    let drawn = 0;
    const drawBg = (rows) => {
      this.page.drawRectangle({
        x: M.left,
        y: this.y - (rows * LEAD.code + pad * 2),
        width: TEXT_W,
        height: rows * LEAD.code + pad * 2,
        color: FILL,
        borderColor: RULE,
        borderWidth: 0.5,
      });
    };
    while (drawn < lines.length) {
      const room = Math.floor((this.y - M.bottom - pad * 2) / LEAD.code);
      const take = Math.max(1, Math.min(room, lines.length - drawn));
      drawBg(take);
      let yy = this.y - pad - SIZE.code;
      for (const line of lines.slice(drawn, drawn + take)) {
        this.page.drawText(line, { x: M.left + pad, y: yy, size: SIZE.code, font: this.f.mono, color: INK });
        yy -= LEAD.code;
      }
      this.y -= take * LEAD.code + pad * 2;
      drawn += take;
      if (drawn < lines.length) this.newPage();
    }
    if (caption) {
      this.y -= 4;
      this.lines(`Listing: ${caption}`, { size: SIZE.small, lead: LEAD.small, color: MUTED });
    }
    this.gap(0.6);
    void startY;
  }

  // --- tables ----------------------------------------------------------------
  table(cols, rows, caption) {
    this.tableNo += 1;
    const size = 8.8;
    const lead = 11.5;
    const padX = 5;
    const padY = 4;
    const widths = cols.map((c) => c.w * TEXT_W);

    const rowLines = (cells, font) =>
      cells.map((cell, i) => wrap(cell, font, size, widths[i] - padX * 2));

    const drawRow = (cells, { header = false } = {}) => {
      const font = header ? this.f.bold : this.f.regular;
      const cellLines = rowLines(cells, font);
      const h = Math.max(...cellLines.map((l) => l.length)) * lead + padY * 2;
      if (this.y - h < M.bottom) {
        this.newPage();
        if (!header) drawRow(cols.map((c) => c.label), { header: true });
      }
      if (header) {
        this.page.drawRectangle({ x: M.left, y: this.y - h, width: TEXT_W, height: h, color: FILL });
      }
      let x = M.left;
      cellLines.forEach((lines, i) => {
        let yy = this.y - padY - size;
        for (const line of lines) {
          this.page.drawText(line, { x: x + padX, y: yy, size, font, color: INK });
          yy -= lead;
        }
        x += widths[i];
      });
      this.y -= h;
      this.page.drawLine({
        start: { x: M.left, y: this.y },
        end: { x: PAGE_W - M.right, y: this.y },
        thickness: header ? 0.8 : 0.4,
        color: RULE,
      });
    };

    if (caption) {
      this.ensure(LEAD.small * 2 + 40);
      this.lines(`Table ${this.tableNo}: ${caption}`, { font: this.f.bold, size: SIZE.small, lead: LEAD.small, color: MUTED });
      this.y -= 2;
    }
    drawRow(cols.map((c) => c.label), { header: true });
    for (const r of rows) drawRow(r);
    this.gap(0.8);
  }

  // --- figures -----------------------------------------------------------------
  figure(height, draw, caption) {
    this.figNo += 1;
    this.ensure(height + LEAD.small * 2 + 10);
    const top = this.y;
    draw(this.page, M.left, top, TEXT_W, height, this.f);
    this.y -= height + 6;
    this.lines(`Figure ${this.figNo}: ${caption}`, { font: this.f.bold, size: SIZE.small, lead: LEAD.small, color: MUTED });
    this.gap(0.8);
  }

  // --- toc ----------------------------------------------------------------------
  toc(entries) {
    this.newPage();
    this.page.drawText("Table of contents", { x: M.left, y: this.y - SIZE.h1, size: SIZE.h1, font: this.f.bold, color: INK });
    this.y -= SIZE.h1 + 24;
    for (const e of entries) {
      const indent = e.level === 1 ? 0 : 16;
      const font = e.level === 1 ? this.f.bold : this.f.regular;
      const num = String(this.tocMap.get(e.key) ?? "");
      const numW = this.f.regular.widthOfTextAtSize(num, SIZE.body);
      const label = wrap(e.text, font, SIZE.body, TEXT_W - indent - numW - 30)[0];
      this.ensure(LEAD.body);
      this.page.drawText(label, { x: M.left + indent, y: this.y - SIZE.body, size: SIZE.body, font, color: INK });
      // dotted leader
      const labelW = font.widthOfTextAtSize(label, SIZE.body);
      let dx = M.left + indent + labelW + 6;
      const endX = PAGE_W - M.right - numW - 6;
      while (dx < endX) {
        this.page.drawText(".", { x: dx, y: this.y - SIZE.body, size: SIZE.body, font: this.f.regular, color: MUTED });
        dx += 4.5;
      }
      this.page.drawText(num, { x: PAGE_W - M.right - numW, y: this.y - SIZE.body, size: SIZE.body, font: this.f.regular, color: INK });
      this.y -= e.level === 1 ? LEAD.body + 4 : LEAD.body;
    }
  }
}

// ---------------------------------------------------------------------------
// Diagram helpers
// ---------------------------------------------------------------------------
function box(page, f, x, y, w, h, title, lines = [], { fill = FILL } = {}) {
  page.drawRectangle({ x, y: y - h, width: w, height: h, color: fill, borderColor: INK, borderWidth: 0.8 });
  page.drawText(clean(title), { x: x + 7, y: y - 14, size: 9, font: f.bold, color: INK });
  let yy = y - 27;
  for (const line of lines) {
    for (const l of wrap(line, f.regular, 7.8, w - 14)) {
      page.drawText(l, { x: x + 7, y: yy, size: 7.8, font: f.regular, color: INK });
      yy -= 10;
    }
  }
}

function arrow(page, f, x1, y1, x2, y2, label) {
  page.drawLine({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 }, thickness: 0.8, color: INK });
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const size = 6;
  for (const s of [1, -1]) {
    page.drawLine({
      start: { x: x2, y: y2 },
      end: { x: x2 - size * Math.cos(ang - (s * Math.PI) / 7), y: y2 - size * Math.sin(ang - (s * Math.PI) / 7) },
      thickness: 0.8,
      color: INK,
    });
  }
  if (label) {
    const w = f.regular.widthOfTextAtSize(label, 7.5);
    page.drawText(clean(label), { x: (x1 + x2) / 2 - w / 2, y: (y1 + y2) / 2 + 4, size: 7.5, font: f.regular, color: MUTED });
  }
}

function line(page, x1, y1, x2, y2, label, f) {
  page.drawLine({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 }, thickness: 0.8, color: INK });
  if (label) {
    const w = f.regular.widthOfTextAtSize(label, 7.5);
    page.drawText(clean(label), { x: (x1 + x2) / 2 - w / 2, y: (y1 + y2) / 2 + 3, size: 7.5, font: f.regular, color: MUTED });
  }
}

function drawArchitecture(page, x, top, w, h, f) {
  const gap = 64; // wide enough for the arrow label to sit clear of both boxes
  const bw = (w - 2 * gap) / 3;
  const bh = 108;
  const y = top - 12;
  box(page, f, x, y, bw, bh, "Client — React", [
    "Patient, doctor and admin portals",
    "React Router with protected routes",
    "JWT kept in memory; sent as Bearer header",
    "Tailwind CSS",
  ]);
  box(page, f, x + bw + gap, y, bw, bh, "API — Node + Express", [
    "requireAuth: verifies the JWT",
    "requireRole: checks role per route",
    "Controllers for auth, doctors, appointments, prescriptions, bills",
    "Central error handler",
  ]);
  box(page, f, x + 2 * (bw + gap), y, bw, bh, "Data — MongoDB", [
    "Mongoose models with required fields and enums",
    "Unique index: { doctor, slotStart }",
    "MongoDB Atlas (free tier) in deployment",
  ]);
  arrow(page, f, x + bw, y - bh / 2, x + bw + gap, y - bh / 2, "HTTPS / JSON");
  arrow(page, f, x + 2 * bw + gap, y - bh / 2, x + 2 * (bw + gap), y - bh / 2, "Mongoose");
  void h;
}

function drawDataModel(page, x, top, w, h, f) {
  const cols = 3;
  const gapX = 24;
  const gapY = 26;
  const bw = (w - gapX * (cols - 1)) / cols;
  const bh = 78;
  const y1 = top - 8;
  const y2 = y1 - bh - gapY;
  const col = (i) => x + i * (bw + gapX);

  box(page, f, col(0), y1, bw, bh, "users", ["_id, name, email", "passwordHash (bcrypt)", "role: patient | doctor | admin"]);
  box(page, f, col(1), y1, bw, bh, "doctors", ["_id, user -> users", "department, fee", "schedule: weekly working hours", "slotMinutes"]);
  box(page, f, col(2), y1, bw, bh, "patients", ["_id, user -> users", "dateOfBirth, phone", "bloodGroup, allergies"]);
  box(page, f, col(0), y2, bw, bh, "appointments", ["_id, doctor -> doctors", "patient -> patients", "slotStart (UTC), status", "unique (doctor, slotStart)"]);
  box(page, f, col(1), y2, bw, bh, "prescriptions", ["_id, appointment -> appointments", "medicines[]: name, dose, duration", "notes, issuedAt"]);
  box(page, f, col(2), y2, bw, bh, "bills", ["_id, appointment -> appointments", "consultationFee, services[]", "total, status, issuedAt"]);

  // users -> doctors / patients (1:1)
  line(page, col(0) + bw, y1 - bh / 2, col(1), y1 - bh / 2, "1 : 1", f);
  line(page, col(1) + bw, y1 - bh / 2, col(2), y1 - bh / 2, "", f);
  // doctors -> appointments, patients -> appointments (1:n)
  line(page, col(1) + bw / 2, y1 - bh, col(0) + bw / 2, y2, "1 : n", f);
  line(page, col(2) + bw / 2, y1 - bh, col(0) + bw * 0.85, y2, "1 : n", f);
  // appointments -> prescriptions, bills (1:1)
  line(page, col(0) + bw, y2 - bh / 2, col(1), y2 - bh / 2, "1 : 1", f);
  line(page, col(1) + bw, y2 - bh / 2, col(2), y2 - bh / 2, "1 : 1", f);
  void h;
}

function drawDfd0(page, x, top, w, h, f) {
  const y = top - 10;
  const ew = 96;
  const eh = 34;
  const pw = 150;
  const ph = 70;
  const px = x + (w - pw) / 2;
  const py = y - 20;
  // external entities, left column; the flow label sits inside the box so
  // it never collides with the arrow.
  const entities = [
    ["Patient", "book, view history"],
    ["Doctor", "prescribe, complete"],
    ["Admin", "onboard, manage"],
  ];
  entities.forEach(([name, flow], i) => {
    const ey = y - i * (eh + 14);
    box(page, f, x, ey, ew, eh, name, [flow]);
    arrow(page, f, x + ew, ey - eh / 2, px, py - ph / 2 - (i - 1) * 16, "");
  });
  // process
  page.drawRectangle({ x: px, y: py - ph, width: pw, height: ph, color: rgb(1, 1, 1), borderColor: ACCENT, borderWidth: 1.2 });
  page.drawText("0", { x: px + 8, y: py - 14, size: 9, font: f.bold, color: ACCENT });
  for (const [i, l] of ["Hospital Management", "System"].entries()) {
    page.drawText(l, { x: px + 8, y: py - 32 - i * 11, size: 9, font: f.bold, color: INK });
  }
  // data store
  const dx = x + w - ew - 10;
  const dy = py - ph / 2 + 16;
  page.drawLine({ start: { x: dx, y: dy }, end: { x: dx + ew + 10, y: dy }, thickness: 0.8, color: INK });
  page.drawLine({ start: { x: dx, y: dy - 30 }, end: { x: dx + ew + 10, y: dy - 30 }, thickness: 0.8, color: INK });
  page.drawText("D1  MongoDB", { x: dx + 6, y: dy - 19, size: 9, font: f.bold, color: INK });
  arrow(page, f, px + pw, py - ph / 2, dx, py - ph / 2, "read / write");
  void h;
}

function drawBookingSequence(page, x, top, w, h, f) {
  const actors = ["Patient portal", "Express API", "MongoDB"];
  const colW = w / 3;
  const y = top - 6;
  actors.forEach((a, i) => {
    const cx = x + colW * i + colW / 2;
    box(page, f, cx - 54, y, 108, 24, a, []);
    page.drawLine({ start: { x: cx, y: y - 24 }, end: { x: cx, y: top - h + 6 }, thickness: 0.6, color: RULE });
  });
  const cx = (i) => x + colW * i + colW / 2;
  let yy = y - 44;
  const msg = (from, to, label) => {
    arrow(page, f, cx(from), yy, cx(to), yy, label);
    yy -= 26;
  };
  msg(0, 1, "POST /api/appointments { doctorId, slotStart }");
  // Self-step on the API lifeline: a small bracket rather than a zero-length arrow.
  page.drawRectangle({ x: cx(1) - 3, y: yy - 6, width: 6, height: 18, color: FILL, borderColor: INK, borderWidth: 0.8 });
  page.drawText("requireAuth -> requireRole('patient')", { x: cx(1) + 8, y: yy, size: 7.5, font: f.regular, color: MUTED });
  yy -= 26;
  msg(1, 2, "insertOne { doctor, patient, slotStart }");
  msg(2, 1, "ok  |  E11000 duplicate key");
  msg(1, 0, "201 Created  |  409 'slot has just been taken'");
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
function titlePage(r) {
  r.newPage({ numbered: false });
  const { page, f } = r;
  page.drawRectangle({ x: 0, y: PAGE_H - 10, width: PAGE_W, height: 10, color: ACCENT });
  let y = PAGE_H - 190;
  page.drawText("Final year project report", { x: M.left, y, size: 11, font: f.regular, color: MUTED });
  y -= 44;
  for (const l of wrap("Hospital Management System", f.bold, SIZE.title, TEXT_W)) {
    page.drawText(l, { x: M.left, y, size: SIZE.title, font: f.bold, color: INK });
    y -= 32;
  }
  page.drawText("A MERN application with role-based portals and conflict-safe appointment booking", {
    x: M.left, y, size: 11.5, font: f.regular, color: INK,
  });
  y -= 50;
  page.drawLine({ start: { x: M.left, y }, end: { x: M.left + 48, y }, thickness: 2, color: ACCENT });
  y -= 30;
  const meta = [
    ["Document", "Sample project report, published as a free download"],
    ["Prepared by", "Yaseen Nurmahammad Khatib, Senior Full-Stack AI Engineer"],
    ["Published at", "DefendIt — campus.streamerosai.com/sample-project-report/"],
    ["Project page", "campus.streamerosai.com/hospital-management-mern/"],
    ["Stack", "React, Node.js, Express, MongoDB, Mongoose, JWT, Tailwind CSS"],
    ["Date", "October 2026"],
  ];
  for (const [k, v] of meta) {
    page.drawText(k, { x: M.left, y, size: 9, font: f.bold, color: MUTED });
    page.drawText(clean(v), { x: M.left + 96, y, size: 9.5, font: f.regular, color: INK });
    y -= 17;
  }
  y -= 30;
  const note =
    "About this sample. This report shows the structure and depth of the project report delivered with the Academic and Mentored tiers for this project. It describes the system exactly as the project page describes it. The college title page, certificate, declaration and acknowledgement are left out because they belong to your institution; the delivered report carries them in your department's format. It is published to be read, not submitted: a report earns marks only when it matches the code you submit and you can defend both.";
  for (const l of wrap(note, f.regular, 9, TEXT_W)) {
    page.drawText(l, { x: M.left, y, size: 9, font: f.regular, color: MUTED });
    y -= 12.5;
  }
}

function tocEntries() {
  // Keys mirror the headings rendered below (level 1 and 2 only).
  return [
    ["Abstract", 1],
    ["1. Introduction", 1],
    ["1.1 Background", 2],
    ["1.2 Problem statement", 2],
    ["1.3 Objectives", 2],
    ["1.4 Scope", 2],
    ["2. Literature survey and existing system", 1],
    ["2.1 Typical student implementations", 2],
    ["2.2 Proposed system", 2],
    ["3. Software requirements specification", 1],
    ["3.1 Functional requirements", 2],
    ["3.2 Non-functional requirements", 2],
    ["3.3 Hardware and software requirements", 2],
    ["3.4 Use cases", 2],
    ["4. System design", 1],
    ["4.1 Architecture", 2],
    ["4.2 Data model", 2],
    ["4.3 Data flow", 2],
    ["4.4 The appointment engine", 2],
    ["4.5 API design", 2],
    ["4.6 Design decisions and their justification", 2],
    ["5. Implementation", 1],
    ["5.1 Project structure", 2],
    ["5.2 Authentication and role guards", 2],
    ["5.3 Appointment booking and conflict detection", 2],
    ["5.4 Prescriptions and billing", 2],
    ["5.5 Front end", 2],
    ["5.6 Deployment", 2],
    ["6. Testing", 1],
    ["6.1 Strategy", 2],
    ["6.2 Test cases", 2],
    ["6.3 Known limitations", 2],
    ["7. Results", 1],
    ["8. Conclusion and future scope", 1],
    ["References", 1],
    ["Appendix A: Viva questions on this project", 1],
  ].map(([text, level]) => ({ key: text, text, level }));
}

function body(r) {
  // --- Abstract --------------------------------------------------------------
  r.h1("Abstract");
  r.p(
    "Hospital management is the most-attempted final year project in Indian colleges, and most submissions stop at a set of forms over a database. This project builds the system the way it should be built: separate portals for patients, doctors and administrators behind a single login; JSON Web Token authentication with role guards enforced on every API route rather than only in the user interface; appointment booking that detects slot collisions at the database level instead of overwriting them; and prescriptions and billing tied to real MongoDB relations through the appointment they belong to.",
  );
  r.p(
    "The system is implemented on the MERN stack — MongoDB, Express, React and Node.js — with Mongoose for schema validation, bcrypt for password hashing and Tailwind CSS for the interface. A doctor's availability is stored as weekly working hours divided into fixed slots. A unique compound index on doctor and slot start time means a second booking for the same slot is rejected by the database itself, even when two patients confirm at the same moment; the API turns that rejection into a clear slot-taken message. Slots are stored in UTC and displayed in Indian Standard Time so a server in another region does not shift appointments.",
  );
  r.p(
    "The report covers the requirements specification, the architecture and data model with diagrams, the implementation of the authentication layer and the appointment engine with code listings, a test case table built from the numbered functional requirements, and the limitations and future scope. The marks in this project are in the schema design and the authentication flow, and the report spends its depth there.",
  );
  r.p("Keywords: hospital management system, MERN stack, MongoDB, Express, React, Node.js, JWT, role-based access control, appointment scheduling, unique index.");

  // --- 1 Introduction ------------------------------------------------------------
  r.h1("1. Introduction");
  r.h2("1.1 Background");
  r.p(
    "A hospital's daily work is appointments. Patients want a slot with a particular doctor; doctors have fixed working hours; the front desk must not promise the same slot twice; after the visit a prescription has to be recorded and a bill raised. Paper registers and spreadsheets handle this badly: double bookings are common, a patient's history is scattered, and nobody can say how busy a department was last week without counting by hand.",
  );
  r.p(
    "A web application solves the visibility problem easily. The harder problem, and the one this project is built around, is correctness under concurrency: two patients pressing confirm on the same slot at the same time, and a user calling the API directly to read records that are not theirs.",
  );
  r.h2("1.2 Problem statement");
  r.p(
    "Design and implement a hospital management system in which patients book appointments against a doctor's real availability, the system refuses a double booking under concurrent requests, each role sees only the data it is entitled to, doctors record prescriptions against a visit, bills are generated from the visit, and administrators manage doctors, departments and daily load — with the access rules enforced by the server, not by the interface.",
  );
  r.h2("1.3 Objectives");
  r.list(
    [
      "Provide three role-based portals — patient, doctor, admin — behind one login.",
      "Authenticate with JWT and enforce the role required by every API route in server middleware.",
      "Generate bookable slots from a doctor's weekly schedule and detect slot conflicts per doctor.",
      "Guarantee that a slot cannot be double-booked, including under simultaneous requests.",
      "Let doctors write prescriptions against a completed visit, and let patients see their history.",
      "Generate a bill from the consultation fee and listed services, with a printable invoice.",
      "Give administrators doctor onboarding, department management and a per-department, per-day load view.",
      "Provide search and filtering across patients, doctors and appointments.",
    ],
    { ordered: true },
  );
  r.h2("1.4 Scope");
  r.p("In scope: the three portals, authentication and authorisation, appointment scheduling with conflict detection, prescriptions, billing with printable invoices, the admin dashboard, and search.");
  r.p(
    "Out of scope: online payment collection (bills are recorded and printed, not paid through the system), pharmacy inventory, laboratory results, insurance claims, SMS or email reminders, and multi-branch hospitals. These are listed under future scope in chapter 8.",
  );

  // --- 2 Literature survey ---------------------------------------------------------
  r.h1("2. Literature survey and existing system");
  r.h2("2.1 Typical student implementations");
  r.p(
    "The common hospital management project is a set of CRUD screens — add patient, add doctor, add appointment — over a single flat table. Three weaknesses recur. First, appointment booking is a plain insert: the application may check for a clash before inserting, but two requests can both pass the check and both insert, so a double booking is possible exactly when the system is busiest. Second, authorisation lives in the interface: a page is hidden from a role, but the API behind it answers anyone who calls it. Third, records are not related: a prescription stores a patient name as text rather than a reference, so history cannot be queried reliably.",
  );
  r.p(
    "Commercial hospital information systems solve these problems at a scale and cost outside a final year project, and their internals are not available to study. The relevant published material is instead the documentation of the building blocks: MongoDB's treatment of unique indexes as a correctness guarantee, Express's middleware model for cross-cutting checks, the JSON Web Token specification, and the bcrypt password scheme (see References).",
  );
  r.h2("2.2 Proposed system");
  r.table(
    [
      { label: "Concern", w: 0.26 },
      { label: "Typical submission", w: 0.37 },
      { label: "This system", w: 0.37 },
    ],
    [
      ["Double booking", "Check-then-insert in application code; a race window remains.", "Unique compound index on (doctor, slotStart); the database rejects the second insert atomically."],
      ["Authorisation", "Pages hidden per role; API routes unprotected.", "requireAuth and requireRole middleware on every route; queries filtered by the signed-in user's id."],
      ["Records", "Names stored as text in each table.", "Six related collections with Mongoose references; history is a query, not a search."],
      ["Passwords", "Stored in plain text or reversible encoding.", "bcrypt hash with per-password salt; the plain password is never stored."],
      ["Time", "Local server time stored as-is.", "Slots stored in UTC, displayed in IST."],
    ],
    "Existing approach versus the proposed system",
  );

  // --- 3 SRS ---------------------------------------------------------------------
  r.h1("3. Software requirements specification");
  r.p("Requirements are numbered so each one can be traced to a test case in chapter 6. The layout follows the practice recommended in IEEE Std 830-1998.");
  r.h2("3.1 Functional requirements");
  r.table(
    [
      { label: "ID", w: 0.1 },
      { label: "Requirement", w: 0.9 },
    ],
    [
      ["FR-01", "A user can register as a patient and sign in with email and password."],
      ["FR-02", "An administrator can onboard a doctor with a department, consultation fee and weekly schedule."],
      ["FR-03", "On sign-in the system issues a JWT carrying the user id and role."],
      ["FR-04", "Every API route verifies the JWT and checks the role it requires before the handler runs."],
      ["FR-05", "The system generates bookable slots from a doctor's weekly working hours and slot length."],
      ["FR-06", "A patient can view a doctor's free slots for a date and book one."],
      ["FR-07", "A slot already booked for that doctor cannot be booked again, including when two requests arrive together."],
      ["FR-08", "A patient can cancel a booked appointment before its start time."],
      ["FR-09", "A doctor can see their own appointments for a day and mark a visit completed."],
      ["FR-10", "A doctor can write a prescription — medicines with dose and duration, and notes — against a completed visit."],
      ["FR-11", "A patient can view their appointment history and the prescriptions linked to it."],
      ["FR-12", "Completing a visit generates a bill from the consultation fee plus listed services, viewable and printable as an invoice."],
      ["FR-13", "An administrator can manage departments and view appointments per department and per day."],
      ["FR-14", "Patients, doctors and appointments can be searched and filtered by name, department, date and status."],
    ],
    "Functional requirements",
  );
  r.h2("3.2 Non-functional requirements");
  r.table(
    [
      { label: "ID", w: 0.1 },
      { label: "Requirement", w: 0.9 },
    ],
    [
      ["NFR-01", "Security: passwords are stored as bcrypt hashes; tokens are signed with a server-side secret; role checks are enforced on the server."],
      ["NFR-02", "Data isolation: a patient can read only their own records and a doctor only their own patients, enforced by filtering every query on the signed-in user's id."],
      ["NFR-03", "Integrity: required fields and enumerated values (for example appointment status) are validated at the model layer."],
      ["NFR-04", "Consistency: appointment times are stored in UTC and rendered in IST."],
      ["NFR-05", "Usability: each portal shows only the actions available to its role; forms validate input before submission and the API validates it again."],
      ["NFR-06", "Deployability: the front end builds to static files and the API runs on a free Node.js host with a MongoDB Atlas free-tier cluster."],
    ],
    "Non-functional requirements",
  );
  r.h2("3.3 Hardware and software requirements");
  r.table(
    [
      { label: "Item", w: 0.3 },
      { label: "Requirement", w: 0.7 },
    ],
    [
      ["Development machine", "Any laptop able to run Node.js and a browser; 8 GB RAM is comfortable."],
      ["Runtime", "Node.js 18 or later, npm."],
      ["Database", "MongoDB 6 or later, locally or on MongoDB Atlas."],
      ["Front end", "React 18, React Router, Tailwind CSS."],
      ["Back end", "Express, Mongoose, jsonwebtoken, bcrypt."],
      ["Browser", "Any current Chromium, Firefox or Safari release."],
    ],
    "Hardware and software requirements",
  );
  r.h2("3.4 Use cases");
  r.table(
    [
      { label: "Use case", w: 0.26 },
      { label: "Actor", w: 0.14 },
      { label: "Main flow", w: 0.6 },
    ],
    [
      ["Book appointment", "Patient", "Choose department and doctor; pick a date; the free slots are listed; confirm a slot; the appointment is created with status booked, or the slot is reported as taken."],
      ["Complete visit and prescribe", "Doctor", "Open today's list; mark a visit completed; enter medicines with dose and duration and notes; the prescription is linked to the appointment and a bill is generated."],
      ["View history", "Patient", "Open history; appointments are listed newest first with the linked prescription and bill for each completed visit."],
      ["Onboard doctor", "Admin", "Create the doctor's user account, department, fee and weekly schedule; the doctor appears in booking immediately."],
      ["Review daily load", "Admin", "Pick a date; appointments are aggregated per department and per doctor."],
    ],
    "Principal use cases",
  );

  // --- 4 Design -------------------------------------------------------------------
  r.h1("4. System design");
  r.h2("4.1 Architecture");
  r.p(
    "The system is a three-tier web application. The React client is a single-page application with a route tree per role; it holds the JWT in memory and sends it as a Bearer header on every request. The Express API is the only component that talks to the database, and it is where every access rule lives. MongoDB stores six related collections through Mongoose models.",
  );
  r.figure(134, drawArchitecture, "System architecture");
  r.p(
    "One login serves three roles. The JWT carries the role; React renders the patient, doctor or admin portal from it; and Express middleware enforces the same role on every API route, so the interface hiding a button is never the only protection.",
  );
  r.h2("4.2 Data model");
  r.p(
    "Six collections. A user carries the credentials and the role; a doctor or patient document extends the user with role-specific fields. Appointments reference a doctor and a patient and carry the slot start time and status. A prescription and a bill each reference the appointment they belong to, so a patient's history is every prescription on their completed appointments — a query, not a text search.",
  );
  r.figure(206, drawDataModel, "Data model — collections and references");
  r.table(
    [
      { label: "Collection", w: 0.2 },
      { label: "Fields", w: 0.5 },
      { label: "Validation", w: 0.3 },
    ],
    [
      ["users", "name, email (unique), passwordHash, role", "role is an enum: patient, doctor, admin"],
      ["doctors", "user, department, fee, schedule (weekday -> start, end), slotMinutes", "fee is a non-negative number; schedule times are HH:MM"],
      ["patients", "user, dateOfBirth, phone, bloodGroup, allergies", "phone is 10 digits"],
      ["appointments", "doctor, patient, slotStart, status, createdAt", "status enum: booked, completed, cancelled; unique (doctor, slotStart)"],
      ["prescriptions", "appointment, medicines [name, dose, duration], notes, issuedAt", "at least one medicine; appointment must be completed"],
      ["bills", "appointment, consultationFee, services [name, amount], total, status, issuedAt", "total is computed server-side, never accepted from the client"],
    ],
    "Collections and validation rules",
  );
  r.h2("4.3 Data flow");
  r.p("At the context level, three external entities interact with one process that reads and writes a single data store.");
  r.figure(150, drawDfd0, "Level 0 data flow diagram");
  r.p(
    "At level 1 the process splits into authentication, appointment scheduling, clinical records (prescriptions) and billing, with the admin dashboard reading aggregates from the appointments collection. The delivered report carries the level 1 diagram; it is omitted here for length.",
  );
  r.h2("4.4 The appointment engine");
  r.p(
    "A doctor's availability is stored as weekly working hours — for example Monday 10:00 to 13:00 — and a slot length in minutes. Slots for a date are generated on request by walking that window in slot-length steps, then removing any slot that already has a booked appointment for that doctor. The generation is deterministic, so the client and server always agree on which instants are valid slot starts.",
  );
  r.code(
    [
      "function freeSlots(doctor, date):",
      "    window  = doctor.schedule[weekday(date)]        # e.g. 10:00-13:00, or none",
      "    if window is none: return []",
      "    slots   = every instant from window.start to window.end step doctor.slotMinutes",
      "    taken   = slotStart of appointments where doctor = doctor and date(slotStart) = date",
      "                                               and status != cancelled",
      "    return [s for s in slots if s not in taken]",
    ].join("\n"),
    "Slot generation, in pseudocode",
  );
  r.p(
    "Removing taken slots before showing them handles the normal case. It does not handle the race: two patients can load the same free list and both confirm. The guarantee comes from the database. A unique compound index on doctor and slotStart means the second insert fails with a duplicate-key error, and the API turns that error into HTTP 409 with a slot-taken message. The sequence below is the whole mechanism.",
  );
  r.figure(170, drawBookingSequence, "Booking an appointment — the conflict is resolved by the database");
  r.h2("4.5 API design");
  r.table(
    [
      { label: "Method and path", w: 0.38 },
      { label: "Role", w: 0.14 },
      { label: "Purpose", w: 0.48 },
    ],
    [
      ["POST /api/auth/register", "public", "Create a patient account."],
      ["POST /api/auth/login", "public", "Verify the password hash and issue a JWT."],
      ["GET /api/doctors?department=", "any", "List doctors, optionally by department."],
      ["GET /api/doctors/:id/slots?date=", "patient", "Free slots for a doctor on a date."],
      ["POST /api/appointments", "patient", "Book a slot; 409 if it has just been taken."],
      ["DELETE /api/appointments/:id", "patient", "Cancel before start time; only the owner may cancel."],
      ["GET /api/appointments/mine", "patient", "The signed-in patient's history."],
      ["GET /api/appointments/today", "doctor", "The signed-in doctor's appointments for a day."],
      ["PATCH /api/appointments/:id/complete", "doctor", "Mark the visit completed and generate the bill."],
      ["POST /api/prescriptions", "doctor", "Write a prescription against a completed appointment."],
      ["GET /api/bills/:id", "patient, admin", "View a bill; the patient must own it."],
      ["POST /api/admin/doctors", "admin", "Onboard a doctor."],
      ["GET /api/admin/load?date=", "admin", "Appointments per department and doctor for a day."],
    ],
    "API routes",
  );
  r.h2("4.6 Design decisions and their justification");
  r.list([
    "MongoDB rather than a relational database. The records are naturally document-shaped — a prescription with a list of medicines, a bill with a list of services — and Mongoose gives schema validation at the model layer. For heavy cross-record reporting or strict transactions across many tables a relational database would be a reasonable alternative, and that trade-off is stated rather than hidden.",
    "A unique index rather than an application-level check. Checking for a clash and then inserting leaves a gap where two requests both pass the check. The index makes the second insert fail atomically, which application code cannot guarantee.",
    "Role checks in middleware rather than in the interface. Anyone can call the API directly with a tool like Postman. Middleware that reads the role from a verified token is the real protection; hiding pages is only convenience.",
    "Filtering every query by the signed-in user's id rather than by an id sent from the browser. A patient's history endpoint takes no patient id parameter at all; the server derives it from the token.",
    "UTC storage with IST display. A server running in another region would otherwise shift every appointment by five and a half hours.",
    "Bill totals computed on the server. The client sends service names; the server looks up amounts and sums them, so a total can never be tampered with.",
  ]);

  // --- 5 Implementation -------------------------------------------------------------
  r.h1("5. Implementation");
  r.h2("5.1 Project structure");
  r.code(
    [
      "hospital-management/",
      "  client/                      React application (Vite)",
      "    src/routes/                patient/, doctor/, admin/ route trees",
      "    src/components/            shared UI: Protected, SlotPicker, InvoiceView",
      "    src/lib/api.js             fetch wrapper that attaches the Bearer token",
      "  server/",
      "    src/models/                User, Doctor, Patient, Appointment, Prescription, Bill",
      "    src/middleware/auth.js     requireAuth, requireRole",
      "    src/controllers/           auth, doctors, appointments, prescriptions, bills, admin",
      "    src/routes/                one router per resource",
      "    src/lib/slots.js           slot generation",
      "    src/app.js                 Express app, central error handler",
      "    seed.js                    sample departments, doctors and patients",
      "  .env.example                 MONGODB_URI, JWT_SECRET, PORT",
    ].join("\n"),
    "Repository layout",
  );
  r.h2("5.2 Authentication and role guards");
  r.p(
    "Registration hashes the password with bcrypt and a per-password salt; the plain password is never stored. Login compares the hash and, on success, signs a token carrying the user id and role. Two middleware functions then protect every route.",
  );
  r.code(
    [
      "// server/src/middleware/auth.js",
      "const jwt = require(\"jsonwebtoken\");",
      "",
      "function requireAuth(req, res, next) {",
      "  const header = req.headers.authorization || \"\";",
      "  const token = header.startsWith(\"Bearer \") ? header.slice(7) : null;",
      "  if (!token) return res.status(401).json({ error: \"Not signed in\" });",
      "  try {",
      "    // payload: { id, role, patientId?, doctorId? }",
      "    req.user = jwt.verify(token, process.env.JWT_SECRET);",
      "    return next();",
      "  } catch {",
      "    return res.status(401).json({ error: \"Session expired\" });",
      "  }",
      "}",
      "",
      "function requireRole(...roles) {",
      "  return (req, res, next) =>",
      "    roles.includes(req.user.role)",
      "      ? next()",
      "      : res.status(403).json({ error: \"Forbidden\" });",
      "}",
      "",
      "module.exports = { requireAuth, requireRole };",
    ].join("\n"),
    "JWT verification and role guard middleware",
  );
  r.p("Every protected route composes the two, and every query inside the handler is filtered by the id the token carries, never by an id from the request:");
  r.code(
    [
      "// server/src/routes/appointments.js",
      "router.get(",
      "  \"/mine\",",
      "  requireAuth,",
      "  requireRole(\"patient\"),",
      "  async (req, res) => {",
      "    const list = await Appointment.find({ patient: req.user.patientId })",
      "      .populate(\"doctor\", \"name department fee\")",
      "      .sort({ slotStart: -1 });",
      "    res.json(list);",
      "  },",
      ");",
    ].join("\n"),
    "A patient's history is filtered by the token, not by a parameter",
  );
  r.h2("5.3 Appointment booking and conflict detection");
  r.p("The model declares the unique compound index. Mongoose creates it when the model is first used; in production it is created once with createIndexes.");
  r.code(
    [
      "// server/src/models/Appointment.js",
      "const { Schema, model } = require(\"mongoose\");",
      "",
      "const appointmentSchema = new Schema(",
      "  {",
      "    doctor:    { type: Schema.Types.ObjectId, ref: \"Doctor\",  required: true },",
      "    patient:   { type: Schema.Types.ObjectId, ref: \"Patient\", required: true },",
      "    slotStart: { type: Date, required: true },                  // stored in UTC",
      "    status:    { type: String, enum: [\"booked\", \"completed\", \"cancelled\"], default: \"booked\" },",
      "  },",
      "  { timestamps: true },",
      ");",
      "",
      "// The database, not the application, refuses a second booking for a slot.",
      "appointmentSchema.index({ doctor: 1, slotStart: 1 }, { unique: true });",
      "",
      "module.exports = model(\"Appointment\", appointmentSchema);",
    ].join("\n"),
    "Appointment model with the unique compound index",
  );
  r.p("The controller validates that the requested instant is one of the doctor's generated slots, then inserts. A duplicate-key error (code 11000) is the signal that another booking won the race.");
  r.code(
    [
      "// server/src/controllers/appointments.js",
      "async function book(req, res, next) {",
      "  const { doctorId, slotStart } = req.body;",
      "  const start = new Date(slotStart);",
      "  const valid = await isGeneratedSlot(doctorId, start);   // from lib/slots.js",
      "  if (!valid) return res.status(400).json({ error: \"Not a bookable slot\" });",
      "  try {",
      "    const appt = await Appointment.create({",
      "      doctor: doctorId,",
      "      patient: req.user.patientId,",
      "      slotStart: start,",
      "    });",
      "    return res.status(201).json(appt);",
      "  } catch (err) {",
      "    if (err.code === 11000) {",
      "      return res.status(409).json({ error: \"That slot has just been taken\" });",
      "    }",
      "    return next(err);                                    // central error handler",
      "  }",
      "}",
    ].join("\n"),
    "Booking: the duplicate-key error becomes a 409",
  );
  r.p(
    "A cancelled appointment keeps its row with status cancelled, so the unique index would block re-booking that slot. The slot generator therefore treats cancelled appointments as free, and cancelling an appointment deletes the row rather than only changing its status, with the cancellation recorded on the patient's record. The delivered report discusses this trade-off in full.",
  );
  r.h2("5.4 Prescriptions and billing");
  r.p(
    "Marking a visit completed is a single endpoint that does two things in order: it sets the appointment status to completed, and it creates a bill whose consultation fee is copied from the doctor's record at that moment, so a later fee change does not alter an old bill. The doctor then writes the prescription against the completed appointment; the model refuses a prescription for an appointment that is still booked. The patient's portal shows the prescription and the bill under the visit, and the invoice view renders a printable page with the hospital header, line items and total.",
  );
  r.h2("5.5 Front end");
  r.p(
    "The React application keeps the token and decoded role in a context. A Protected component wraps each route tree and redirects to the login page when the role does not match; this is convenience, not security, which is why chapter 4 places the real check on the server. The slot picker calls the free-slots endpoint for the chosen date and renders IST times from the UTC instants the API returns. Forms validate required fields and formats before submission; the API validates again.",
  );
  r.h2("5.6 Deployment");
  r.p(
    "The React build is static files served from a free static host. The API runs on a free Node.js host with MONGODB_URI and JWT_SECRET set as environment variables, and the database is a MongoDB Atlas free-tier cluster with the API host's address allow-listed. The client's API base URL is set at build time. The delivered report includes the exact steps and the live URL of the deployed instance.",
  );

  // --- 6 Testing ------------------------------------------------------------------
  r.h1("6. Testing");
  r.h2("6.1 Strategy");
  r.p(
    "Three levels. Unit tests cover slot generation and the role middleware in isolation. API tests run against a test database and exercise each route with each role, including the roles that must be refused. Manual system tests walk the three portals end to end on seeded data. The table below maps test cases to the functional requirements in chapter 3; the delivered report carries the actual result column from the student's own run, which is why only the expected result is given here.",
  );
  r.h2("6.2 Test cases");
  r.table(
    [
      { label: "ID", w: 0.08 },
      { label: "Req.", w: 0.08 },
      { label: "Scenario and input", w: 0.46 },
      { label: "Expected result", w: 0.38 },
    ],
    [
      ["TC-01", "FR-01", "Register with a valid email and an 8-character password.", "201; user stored with a bcrypt hash, not the password."],
      ["TC-02", "FR-01", "Register with an email that already exists.", "409 with a clear message; no duplicate user."],
      ["TC-03", "FR-03", "Login with the correct password.", "200 with a JWT whose payload carries id and role."],
      ["TC-04", "FR-04", "Call GET /api/appointments/today with a patient's token.", "403 Forbidden."],
      ["TC-05", "FR-04", "Call any protected route with no token or an expired token.", "401."],
      ["TC-06", "FR-05", "Request slots for a doctor on a weekday outside their schedule.", "Empty list."],
      ["TC-07", "FR-06", "Book a listed free slot.", "201; the slot disappears from the free list."],
      ["TC-08", "FR-07", "Book the same slot for the same doctor a second time.", "409 'That slot has just been taken'."],
      ["TC-09", "FR-07", "Send two booking requests for the same slot concurrently (script).", "Exactly one 201 and one 409; one appointment in the database."],
      ["TC-10", "FR-06", "Book an instant that is not a generated slot start.", "400 'Not a bookable slot'."],
      ["TC-11", "FR-08", "Cancel another patient's appointment by id.", "403 or 404; the appointment is unchanged."],
      ["TC-12", "FR-10", "Write a prescription against an appointment still in status booked.", "400; prescription refused."],
      ["TC-13", "FR-12", "Complete a visit for a doctor with fee 500 and one service of 200.", "Bill created with total 700, computed on the server."],
      ["TC-14", "NFR-02", "Request GET /api/bills/:id for a bill owned by another patient.", "403; no bill data returned."],
      ["TC-15", "NFR-04", "Book a 10:00 IST slot; read it back from the database.", "Stored as 04:30 UTC; displayed as 10:00 IST."],
      ["TC-16", "FR-14", "Filter appointments by department and date in the admin portal.", "Only matching appointments listed."],
      ["TC-17", "NFR-05", "Submit the registration form with a letter in the phone field.", "Client-side validation message; API also rejects it with 400."],
    ],
    "Test cases mapped to requirements",
  );
  r.h2("6.3 Known limitations");
  r.list([
    "Cancelling deletes the appointment row so the slot can be re-booked; an audit of cancellations is kept on the patient record rather than in the appointments collection.",
    "Slot generation assumes one continuous working window per weekday; split shifts need a schedule with multiple windows.",
    "Bills are recorded and printed, not paid online.",
    "The free-tier API host sleeps when idle, so the first request after a pause is slow; this is a hosting limit, not a code limit.",
  ]);

  // --- 7 Results ---------------------------------------------------------------------
  r.h1("7. Results");
  r.p("Against the objectives in section 1.3:");
  r.list(
    [
      "Three portals behind one login — delivered. The same credentials route a user to the patient, doctor or admin tree based on the role in the token.",
      "Server-enforced roles — delivered. Every route composes requireAuth and requireRole; TC-04 and TC-05 exercise the refusals.",
      "Slot generation and conflict detection — delivered. Free slots are generated from the weekly schedule; booked ones are removed.",
      "No double booking under concurrency — delivered by the unique compound index; TC-09 exercises the race with two simultaneous requests.",
      "Prescriptions against completed visits, visible in the patient's history — delivered.",
      "Bills from fee plus services with a printable invoice — delivered; totals are computed on the server.",
      "Admin onboarding, departments and daily load — delivered.",
      "Search and filtering — delivered.",
    ],
    { ordered: true },
  );
  r.p(
    "The delivered report for a purchased build includes screenshots of each portal on seeded data: the patient's slot picker with taken slots greyed out, the 409 message when a slot is lost, the doctor's day list and prescription form, the printable invoice, and the admin load view. They are described rather than pasted in this sample so that nothing shown here can be mistaken for a submission.",
  );

  // --- 8 Conclusion ---------------------------------------------------------------------
  r.h1("8. Conclusion and future scope");
  r.p(
    "The project set out to build the most familiar final year topic the way it should be built, and the difference is in two places a demo never shows: the database refusing a double booking that application code cannot reliably prevent, and the server refusing a request the interface would never have made. Those two mechanisms, with a data model whose references make history a query rather than a search, are what make the system defensible rather than merely runnable.",
  );
  r.p("Concrete extensions, each building on the existing layers:");
  r.list([
    "Multiple working windows per day in the doctor schedule, extending the slot generator without changing the index.",
    "Online bill payment through a test-mode payment gateway, writing a payment record against the bill.",
    "Reminder notifications by email or SMS from a scheduled job over the appointments collection.",
    "A pharmacy module that decrements stock from the medicines on a prescription.",
    "Per-branch scoping by adding a branch reference to doctors and appointments.",
  ]);

  // --- References -------------------------------------------------------------------------
  r.h1("References");
  r.list(
    [
      "MongoDB Inc. MongoDB Manual: Unique Indexes. https://www.mongodb.com/docs/manual/core/index-unique/",
      "OpenJS Foundation. Express — Using middleware. https://expressjs.com/en/guide/using-middleware.html",
      "Mongoose documentation: Schemas, validation and indexes. https://mongoosejs.com/docs/guide.html",
      "Meta Open Source. React documentation. https://react.dev/",
      "M. Jones, J. Bradley and N. Sakimura. JSON Web Token (JWT). RFC 7519, IETF, May 2015.",
      "N. Provos and D. Mazieres. A Future-Adaptable Password Scheme. Proceedings of the USENIX Annual Technical Conference, 1999.",
      "OWASP Foundation. OWASP Top Ten. https://owasp.org/www-project-top-ten/",
      "IEEE. IEEE Std 830-1998, Recommended Practice for Software Requirements Specifications.",
      "Tailwind Labs. Tailwind CSS documentation. https://tailwindcss.com/docs",
    ],
    { ordered: true },
  );

  // --- Appendix A -------------------------------------------------------------------------
  r.h1("Appendix A: Viva questions on this project");
  r.p("The questions a panel asks about this system, with the answers the design supports. These are the same questions listed on the project page.");
  const viva = [
    ["How do you prevent two patients booking the same slot?", "A unique compound index on doctor id and slot start time. The database rejects the second insert atomically, which a check-then-insert in application code cannot guarantee."],
    ["Why enforce roles on the server if the UI already hides pages?", "Anyone can call the API directly with a tool like Postman. Middleware that checks the role from the verified JWT is the real protection; hiding pages is only convenience."],
    ["How is a prescription linked to the patient?", "Through the appointment. The prescription references the appointment, which references both doctor and patient, so a patient's history is every prescription on their completed appointments."],
    ["Why MongoDB for hospital data?", "The records are naturally document-shaped, such as a prescription with a list of medicines. For heavy cross-record reporting or strict transactions across many tables, a relational database would be a reasonable alternative, and that trade-off is worth stating."],
    ["How are passwords stored?", "Hashed with bcrypt and a per-password salt. The plain password is never stored, and login compares the hash."],
    ["What happens if the server runs in a different time zone?", "Nothing changes for the user. Slots are stored in UTC and converted to IST for display, so the stored instant is the same wherever the server runs."],
  ];
  for (const [q, a] of viva) {
    r.h3(q);
    r.p(a);
  }
}

// ---------------------------------------------------------------------------
// Two-pass render
// ---------------------------------------------------------------------------
async function render(tocMap) {
  const doc = await PDFDocument.create();
  doc.setTitle(`${PROJECT} — sample final year project report`);
  doc.setAuthor("Yaseen Nurmahammad Khatib");
  doc.setSubject("Sample final year project report (BCA / MCA / B.Tech), published by DefendIt");
  doc.setKeywords(["final year project report", "sample", "BCA", "MCA", "MERN", "hospital management system"]);
  doc.setProducer("campus.streamerosai.com");
  doc.setCreator("scripts/generate-sample-report.mjs");

  const fonts = {
    regular: await doc.embedFont(StandardFonts.Helvetica),
    bold: await doc.embedFont(StandardFonts.HelveticaBold),
    mono: await doc.embedFont(StandardFonts.Courier),
  };

  const r = new Report(doc, fonts, tocMap);
  titlePage(r);
  r.toc(tocEntries());
  body(r);

  const map = new Map(r.headings.map((h) => [h.text, h.page]));
  return { bytes: await doc.save(), map, pages: doc.getPageCount() };
}

const first = await render(new Map());
const second = await render(first.map);

// The TOC must not have changed length between passes.
for (const [k, v] of first.map) {
  if (second.map.get(k) !== v) {
    throw new Error(`Heading "${k}" moved between passes (${v} -> ${second.map.get(k)})`);
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, second.bytes);
console.log(`generate-sample-report: wrote ${OUT} (${second.pages} pages, ${(second.bytes.length / 1024).toFixed(0)} KB)`);
