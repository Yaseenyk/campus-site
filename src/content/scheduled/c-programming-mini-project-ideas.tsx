import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import GuideTable from "@/components/campus/GuideTable";

export const meta: GuideMeta = {
  slug: "c-programming-mini-project-ideas",
  title: "Mini Project in C: Ideas, Structure and Viva Prep",
  h1: "Mini project in C: ideas that show real C skills, and how to structure one",
  description:
    "C programming mini project ideas for first and second year students, each tied to the C concept it shows (structs, files, pointers, linked lists), with a working file-handling skeleton, debugging tools and viva questions.",
  tldr: "A C mini project is marked on whether you understand C, not on how many menu options it has. Choose an idea that uses structs, file handling and at least one of pointers, dynamic memory or a linked list, keep the data in a binary or text file so it survives a restart, split the code into functions and files, compile with warnings on (gcc -Wall -Wextra), and be ready to explain every pointer. A record-management skeleton and twelve ideas are below. Your lab's rules on compilers and submission format come first.",
  category: "Mini projects",
  publishedAt: "2026-12-11",
  readingMinutes: 9,
  ogImage: "/og/campus/hub.jpg",
  faq: [
    {
      question: "What is a good mini project in C for a first year student?",
      answer:
        "One that stores records in a file using structs and lets the user add, search, update and delete them, with input validation: a student record system, a library book tracker or a bank account simulator. Add one extra concept, such as sorting by different fields or a linked list in memory, and it becomes a solid project.",
    },
    {
      question: "Can I use Turbo C for my C mini project?",
      answer:
        "If your lab requires it, yes, but avoid relying on conio.h functions such as clrscr() and getch(), which are not standard C and fail on GCC. Writing standard C means the project compiles on any modern compiler, which is safer if your examiner runs it elsewhere. Ask your lab instructor which compiler they will use.",
    },
    {
      question: "How many lines of code should a C mini project have?",
      answer:
        "There is no fixed number, and line count is a poor measure. A clear project split into well-named functions, with file handling and validation, is better than a long one with repeated code. If your college specifies a minimum, follow it, but spend the effort on structure, not padding.",
    },
    {
      question: "Should I use graphics.h in a C project?",
      answer:
        "Only if your syllabus asks for it. graphics.h comes from the old Borland Turbo C environment and is not part of standard C, so it does not work with modern compilers without extra libraries. A clean console interface is accepted almost everywhere.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        The C mini project usually arrives in the first or second year, when you
        have just met pointers and are not sure you like them. Most students pick
        a famous title and write one long <code>main()</code> with a menu. This
        guide aims a little higher: ideas chosen for the C concept they let you
        show, a skeleton for the file handling nearly every project needs, and the
        questions an examiner asks to see whether you understand your own pointers.
        Your lab&apos;s rules on compiler and format come first, so confirm them.
      </p>

      <h2>What a C mini project is really marked on</h2>
      <ul>
        <li><strong>Structs</strong> to model the data, not parallel arrays.</li>
        <li><strong>Functions</strong> with one job each, and a <code>main()</code> that reads like a summary.</li>
        <li><strong>File handling</strong> so data survives closing the program.</li>
        <li><strong>Input validation</strong>: what happens when someone types a letter where you expected a number.</li>
        <li><strong>At least one deeper concept</strong>: pointers, dynamic memory, a linked list, recursion or sorting.</li>
        <li><strong>Your explanation</strong>: being able to say what each line does, especially the pointer ones.</li>
      </ul>

      <h2>C mini project ideas, by the concept they show</h2>
      <GuideTable
        head={["Idea", "C concept it shows", "The tricky part"]}
        rows={[
          ["Student record system", "Structs, binary files with fread/fwrite, search and update in place", "Updating one record in the middle of a file with fseek"],
          ["Library book tracker with due dates", "Structs with dates, date arithmetic, file storage", "Computing days overdue across month ends"],
          ["Bank account simulator", "Functions, validation, transaction log file", "Never letting the balance go below zero; logging every change"],
          ["Contact book with sorting", "Arrays of structs, qsort with a comparator function", "Writing comparator functions; sorting by name or by phone"],
          ["To-do list as a linked list", "Dynamic memory (malloc/free), singly linked list", "Deleting a node without leaking memory or losing the list"],
          ["Text editor for one line at a time", "Doubly linked list of lines, string handling", "Insert and delete in the middle; saving to a file"],
          ["Hotel room booking", "2D arrays or structs, file persistence", "Preventing a double booking of the same room and date"],
          ["Quiz game from a question file", "Reading formatted text files, random order, scoring", "Parsing a file format you designed; shuffling fairly"],
          ["Tic-tac-toe with a computer player", "2D arrays, game loop, simple recursion (minimax)", "Making the recursion terminate and explaining it"],
          ["Matrix calculator", "Dynamic 2D arrays, pointers to pointers", "Allocating and freeing a 2D array correctly"],
          ["Simple file compressor (run-length encoding)", "Byte-level file I/O, bit thinking", "Handling runs longer than one byte can count"],
          ["Electricity bill calculator with slabs", "Conditionals, functions, formatted output, file of customers", "Slab rules applied correctly at the boundaries"],
        ]}
      />
      <p>
        The first one or two make a safe beginner project. The linked list,
        matrix and compressor ideas are good if you want to show more. If your
        teacher allows other languages, the{" "}
        <Link href="/guides/mini-project-ideas/">mini project ideas list</Link>{" "}
        and the{" "}
        <Link href="/guides/python-project-ideas-with-source-code/">
          Python project ideas
        </Link>{" "}
        cover web, data and automation ideas.
      </p>

      <h2>A skeleton for file-based records</h2>
      <p>
        Most C mini projects store records in a file. This is the core pattern,
        written in standard C, which you can adapt to students, books or accounts.
        Read it line by line until you could rewrite it from memory.
      </p>
      <pre>
        <code>{`#include <stdio.h>
#include <string.h>

#define DATA_FILE "students.dat"

typedef struct {
    int  roll;
    char name[50];
    float marks;
} Student;

/* Append one record to the end of the file. Returns 1 on success. */
int add_student(const Student *s) {
    FILE *fp = fopen(DATA_FILE, "ab");
    if (fp == NULL) return 0;
    size_t ok = fwrite(s, sizeof(Student), 1, fp);
    fclose(fp);
    return ok == 1;
}

/* Find by roll number; copies the record into *out. Returns 1 if found. */
int find_student(int roll, Student *out) {
    FILE *fp = fopen(DATA_FILE, "rb");
    if (fp == NULL) return 0;
    Student s;
    while (fread(&s, sizeof(Student), 1, fp) == 1) {
        if (s.roll == roll) { *out = s; fclose(fp); return 1; }
    }
    fclose(fp);
    return 0;
}

/* Read a line safely and strip the newline. */
void read_line(char *buf, int size) {
    if (fgets(buf, size, stdin) != NULL) buf[strcspn(buf, "\\n")] = '\\0';
}`}</code>
      </pre>
      <p>
        Points an examiner may ask about: why the functions take a pointer to the
        struct (to avoid copying it), why the file is opened in binary mode, why{" "}
        <code>fgets</code> instead of <code>gets</code> (it limits the length;{" "}
        <code>gets</code> was removed from the C standard because it cannot), and
        what happens if the file does not exist yet.
      </p>

      <h2>Organise the code into files</h2>
      <pre>
        <code>{`project/
  main.c        menu and the loop, nothing else
  student.h     the struct and function declarations
  student.c     add, find, update, delete, list
  input.c       safe input helpers and validation
  README.md     what it does, how to compile and run`}</code>
      </pre>
      <p>
        Compile with <code>gcc -Wall -Wextra -o project main.c student.c input.c</code>.
        Splitting into files is a small step that makes the project look, and be,
        properly engineered, and it gives you something to say about header files
        in the viva.
      </p>

      <h2>Debug like you mean it</h2>
      <ul>
        <li><strong>Turn on warnings</strong> (<code>-Wall -Wextra</code>) and fix every one. Many C bugs are warnings you ignored.</li>
        <li><strong>Use a debugger</strong>: gdb, or the one in VS Code or Code::Blocks. Step through your linked list insert once; it removes the mystery.</li>
        <li><strong>Check memory</strong>: on Linux, run under Valgrind, or compile with <code>-fsanitize=address</code> on GCC or Clang to catch out-of-bounds access and leaks.</li>
        <li><strong>Test bad input</strong>: letters for numbers, a very long name, an empty file, a roll number that does not exist.</li>
      </ul>

      <h2>Scope it to two or three weeks</h2>
      <GuideTable
        head={["Week", "Goal"]}
        rows={[
          ["1", "Design the struct and the file format; write add and list; compile with no warnings"],
          ["2", "Search, update and delete; input validation; split into files"],
          ["3", "One deeper feature (sorting, linked list, report); test bad input; README and a short demo"],
        ]}
      />

      <h2>Questions to prepare</h2>
      <ol>
        <li>What is the difference between a struct and an array? Why did you use a struct?</li>
        <li>What does this pointer point to, and what happens if it is NULL?</li>
        <li>Why do you call <code>free()</code>, and what is a memory leak?</li>
        <li>How does your program update one record in the middle of the file?</li>
        <li>What is the difference between text and binary file modes?</li>
        <li>What happens if the user types a letter when you ask for a roll number?</li>
        <li>Why did you split the code into header and source files?</li>
      </ol>
      <p>
        For the presentation itself, the{" "}
        <Link href="/guides/how-to-explain-your-project-in-the-viva/">
          viva explanation guide
        </Link>{" "}
        applies to mini projects too. When the final year comes, the{" "}
        <Link href="/guides/how-to-choose-a-final-year-project/">
          guide to choosing a final year project
        </Link>{" "}
        and the{" "}
        <Link href="/guides/diploma-final-year-project-topics/">diploma topics</Link>{" "}
        and <Link href="/guides/bca-final-year-project/">BCA</Link> guides take it
        from there.
      </p>

      <hr />

      <p>
        A C mini project is best done on your own; it is how you learn the
        language. When your final year project comes round, DefendIt runs project
        classes: Starter gives you a design document, a starter repository and a
        module-by-module build plan; Guided adds a review of every module and report
        chapter you write; Mentored adds live Google Meet classes where we build the
        project together, one module per class, with you writing part of every
        module, plus viva prep and a mock viva. Check your college&apos;s rules on
        outside help before you decide.
      </p>
    </>
  );
}
