// ============================================================
//  BOOKS
//  Two lists. `ongoing` is your bookmark shelf, `finished` is
//  the archive, grouped by year automatically.
// ============================================================

export type OngoingBook = {
  title: string;
  author: string;
  /** Where you left off, in your own words */
  bookmark: string;
  /** Optional page numbers — drives the progress bar */
  page?: number;
  pages?: number;
  /** YYYY-MM-DD, the last day you actually read it */
  lastRead: string;
  /** Optional note to yourself */
  note?: string;
};

export type FinishedBook = {
  title: string;
  author: string;
  /** Year you finished it */
  year: number;
  /** Optional one-line verdict */
  note?: string;
};

export const ongoing: OngoingBook[] = [
  {
    title: 'The C++ Programming Language, 4th Edition',
    author: 'Bjarne Stroustrup',
    bookmark: 'Chapter 2 — A Tour of C++: The Basics',
    page: 50,
    pages: 1277,
    lastRead: '2026-10-12',
    note: 'Trying to hammer down my foundations in C++.',
  },
];

export const finished: FinishedBook[] = [
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 2025,
    note: 'I read this during a very stressful period of my life and found an odd comfort in it. I\’d recommend it during a low period in your life. It won\'t solve anything but it will show you how to look at things from a different perspective.',
  },
  {
    title: 'Faust',
    author: 'Johann Wolfgang von Goethe',
    year: 2025,
    note: 'A really odd book. It sort of made sense until Part Two.',
  },
];
