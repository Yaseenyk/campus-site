# Final Year Project Report Template

Replace every line in [square brackets]. Delete the prompts once a section is written.
The chapter structure follows the report format guide at
https://campus.streamerosai.com/guides/final-year-project-report-format/ and matches the
sample report at https://campus.streamerosai.com/sample-project-report/.
Check your college's own format sheet first; where it differs, the college wins.

---

## Front matter

### Title page
- Project title: [exact title as approved in the synopsis]
- Submitted by: [name, roll number]
- Degree and semester: [BCA / MCA / B.Tech, semester]
- Department and college: [as on your ID card]
- University: [affiliating university]
- Internal guide: [name and designation]
- Month and year of submission: [e.g. April 2027]

### Certificate
[The college's certificate text, signed by the guide and head of department. Copy it from the format sheet; do not write your own.]

### Declaration
[One paragraph in your own words stating the work is yours, the sources are cited, and it has not been submitted elsewhere for a degree.]

### Acknowledgement
[Three to five sentences. Guide, department, anyone who gave data or hardware. Keep it plain.]

### Abstract
[150 to 250 words: the problem, what you built, the stack, the one result that proves it works. No citations here.]

### Table of contents, list of figures, list of tables
[Generate these from headings after the report is finished. Every figure and table needs a number and a caption.]

---

## Chapter 1: Introduction

### 1.1 Background
[Who has the problem and in what setting.]

### 1.2 Problem statement
[One paragraph. What goes wrong today without your system.]

### 1.3 Objectives
[Three to five objectives, each one testable. "Reduce booking conflicts to zero through a unique index" is testable; "improve the hospital" is not.]

### 1.4 Scope
[What the system does. Then a short "out of scope" list, so the examiner does not ask for it.]

### 1.5 Organisation of the report
[One line per chapter.]

---

## Chapter 2: Literature survey and existing system

### 2.1 Existing system
[How the task is done today: manual, spreadsheet, or an existing product. Its limitations, in a table if there are more than three.]

### 2.2 Related work
[Three to six sources: papers, documentation, products. One paragraph each: what it does, what it lacks for your case.]

### 2.3 Proposed system
[How yours differs from 2.1 and 2.2. A comparison table works well here.]

---

## Chapter 3: System analysis

### 3.1 Requirement gathering
[Where the requirements came from: interviews, observation, documents.]

### 3.2 Functional requirements
[Numbered list, FR-01 onward. One sentence each. These are what Chapter 6 tests.]

### 3.3 Non-functional requirements
[NFR-01 onward: performance, security, usability, availability. Give a number where you can.]

### 3.4 Hardware and software requirements
[Two short tables: development machine and deployment target; languages, frameworks, database, tools with versions.]

### 3.5 Feasibility study
[Technical, operational and economic feasibility, one paragraph each.]

### 3.6 Use case diagram and descriptions
[Figure, then one table per main use case: actor, precondition, main flow, alternate flow, postcondition.]

---

## Chapter 4: System design

### 4.1 Architecture
[Figure: client, server, database, external services. One paragraph on why this architecture.]

### 4.2 Data design
[ER diagram or collection schema. Table per entity with fields, types, constraints, indexes.]

### 4.3 Data flow diagrams
[Level 0 and level 1 DFDs as figures.]

### 4.4 Sequence or activity diagrams
[One per critical flow, for example login, booking, payment.]

### 4.5 Interface design
[Wireframes or screenshots of the main screens with a sentence on each.]

### 4.6 Design decisions
[Three to five decisions with the alternative you rejected and why. Examiners mark this section.]

---

## Chapter 5: Implementation

### 5.1 Project structure
[Folder tree with a line on each top-level folder.]

### 5.2 Module-wise implementation
[One subsection per module: what it does, the key function or endpoint, a short code excerpt of the part that matters, not the whole file.]

### 5.3 Security
[Authentication, authorisation, input validation, secrets handling. Say what you did, not what is possible.]

### 5.4 Deployment
[Where it runs, how it is built, environment variables, the URL if public.]

---

## Chapter 6: Testing

### 6.1 Test strategy
[Unit, integration, manual: which you used and why.]

### 6.2 Test cases
[Table: ID, requirement tested (FR-xx), input, expected result, actual result, pass/fail. Every functional requirement from 3.2 appears at least once.]

### 6.3 Defects found and fixed
[Short table. A report with zero defects is not believed.]

---

## Chapter 7: Results and discussion

### 7.1 Screenshots of the working system
[Numbered figures with captions that say what the screen proves.]

### 7.2 Performance or measurement
[Whatever you measured: response time, load handled, accuracy. State the method and the numbers you actually got.]

### 7.3 Limitations
[Honest list. This is where the examiner's hardest questions get answered in advance.]

---

## Chapter 8: Conclusion and future scope

### 8.1 Conclusion
[Objectives from 1.3, one by one: met, partly met, or not met, with evidence from Chapters 6 and 7.]

### 8.2 Future scope
[Three to five concrete extensions, each one sentence.]

---

## Back matter

### References
[IEEE or APA, as your college requires. Every source cited in the text appears here and nowhere else. Documentation URLs count; include the access date.]

### Appendices
- Appendix A: [full data dictionary or schema]
- Appendix B: [installation and user manual]
- Appendix C: [source code listing, if required by the college]
- Appendix D: [viva questions you prepared, with answers]

---

Free template from DefendIt, https://campus.streamerosai.com/. Use it for any project.
If you want the project itself built and explained so you can defend it, see
https://campus.streamerosai.com/projects/.
