// বাংলা রূপান্তরের শেয়ার্ড হেল্পার

export const banglaMonths: Record<string, string> = {
  JAN: "জানু",
  FEB: "ফেব",
  MAR: "মার্চ",
  APR: "এপ্রি",
  MAY: "মে",
  JUN: "জুন",
  JUL: "জুলাই",
  AUG: "আগ",
  SEP: "সেপ্ট",
  OCT: "অক্টো",
  NOV: "নভে",
  DEC: "ডিসে",
};

const banglaDesignations: Record<string, string> = {
  Professor: "অধ্যাপক",
  "Associate Professor": "সহযোগী অধ্যাপক",
  "Assistant Professor": "সহকারী অধ্যাপক",
  Lecturer: "প্রভাষক",
  "Head of the Department": "বিভাগীয় প্রধান",
  "Computer Operator & Office Assistant": "কম্পিউটার অপারেটর ও অফিস সহকারী",
  "Laboratory Attendant": "ল্যাবরেটরি অ্যাটেনডেন্ট",
  "Office Peon (MLSS)": "অফিস পিয়ন (এমএলএসএস)",
};

const banglaCategories: Record<string, string> = {
  All: "সব",
  Exam: "পরীক্ষা",
  Admission: "ভর্তি",
  General: "সাধারণ",
  Scholarship: "বৃত্তি",
};

export const toBanglaDesignation = (designation: string): string =>
  banglaDesignations[designation] ?? designation;

export const toBanglaCategory = (category: string): string =>
  banglaCategories[category] ?? category;

export const toBanglaNumber = (value: string | number): string =>
  String(value).replace(/[0-9]/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
