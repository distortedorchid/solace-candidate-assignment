import db from "..";
import { advocates } from "../schema";

const specialties = [
  //Mental Health
  "Anxiety",
  "Depression",
  "Grief",
  "Stress",
  "Life transitions",
  "Suicidal ideation",
  "Bipolar disorder",
  "Personality disorders",
  "Obsessive-compulsive disorder (OCD)",
  "Schizophrenia",
  "Post-traumatic stress disorder (PTSD)",

  //Neurodevelopmental & Cognitive
  "ADHD",
  "Learning disorders",
  "Cognitive assessments",
  "Neuropsychological testing",

  //Sleep & Chronic Conditions
  "Sleep issues",
  "Chronic pain",
  "Weight management",
  "Nutrition counseling",
  "Diabetic nutrition",
  "Eating disorders",

  //Substance Use & Recovery
  "Substance use",
  "Substance abuse",
  "Addiction recovery",

  //Gender-Specific Care
  "Women's health",
  "Men's health",
  "LGBTQ+ affirming care",

  //Women's Health
  "Post-partum support",
  "Infertility counseling",
  "Family planning",
  "Domestic abuse recovery",

  //Men's Health
  "Emotional expression",
  "Anger management",
  "Fatherhood & parenting",
  "Career stress",
  "Relationship communication",

  //LGBTQ+
  "Coming out support",
  "Gender identity",
  "Sexual orientation",

  //Relationships & Family
  "Couples counseling",
  "Family issues",
  "Friendship difficulties",
  "Divorce/separation support",
  "Parenting support",
  "Domestic abuse",

  //Pediatrics
  "Behavioral issues",
  "ADHD (children)",
  "Family dynamics",
  "School-related stress",

  //Coaching & Personal Growth
  "Life coaching",
  "Career coaching",
  "Leadership coaching",
  "Academic performance",
  "Goal setting & motivation",
  "Personal growth",

  //Medication Management
  "Medication adherence",
  "Psychiatric medication education",
  "Prescription monitoring",
];

const getRandomTags = (min = 2, max = 5) => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  return [...specialties].sort(() => 0.5 - Math.random()).slice(0, count);
};

const advocateData = [
  {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    degree: "MD",
    specialties: getRandomTags(),
    yearsOfExperience: 10,
    phoneNumber: 5551234567,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    city: "Los Angeles",
    degree: "PhD",
    specialties: getRandomTags(),
    yearsOfExperience: 8,
    phoneNumber: 5559876543,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    city: "Chicago",
    degree: "MSW",
    specialties: getRandomTags(),
    yearsOfExperience: 5,
    phoneNumber: 5554567890,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    city: "Houston",
    degree: "MD",
    specialties: getRandomTags(),
    yearsOfExperience: 12,
    phoneNumber: 5556543210,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    city: "Phoenix",
    degree: "PhD",
    specialties: getRandomTags(),
    yearsOfExperience: 7,
    phoneNumber: 5553210987,
  },
  {
    firstName: "Chris",
    lastName: "Martinez",
    city: "Philadelphia",
    degree: "MSW",
    specialties: getRandomTags(),

    yearsOfExperience: 9,
    phoneNumber: 5557890123,
  },
  {
    firstName: "Jessica",
    lastName: "Taylor",
    city: "San Antonio",
    degree: "MD",
    specialties: getRandomTags(),
    yearsOfExperience: 11,
    phoneNumber: 5554561234,
  },
  {
    firstName: "David",
    lastName: "Harris",
    city: "San Diego",
    degree: "PhD",
    specialties: getRandomTags(),
    yearsOfExperience: 6,
    phoneNumber: 5557896543,
  },
  {
    firstName: "Laura",
    lastName: "Clark",
    city: "Dallas",
    degree: "MSW",
    specialties: getRandomTags(),
    yearsOfExperience: 4,
    phoneNumber: 5550123456,
  },
  {
    firstName: "Daniel",
    lastName: "Lewis",
    city: "San Jose",
    degree: "MD",
    specialties: getRandomTags(),
    yearsOfExperience: 13,
    phoneNumber: 5553217654,
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    city: "Austin",
    degree: "PhD",
    specialties: getRandomTags(),
    yearsOfExperience: 10,
    phoneNumber: 5551238765,
  },
  {
    firstName: "James",
    lastName: "King",
    city: "Jacksonville",
    degree: "MSW",
    specialties: getRandomTags(),
    yearsOfExperience: 5,
    phoneNumber: 5556540987,
  },
  {
    firstName: "Megan",
    lastName: "Green",
    city: "San Francisco",
    degree: "MD",
    specialties: getRandomTags(),
    yearsOfExperience: 14,
    phoneNumber: 5559873456,
  },
  {
    firstName: "Joshua",
    lastName: "Walker",
    city: "Columbus",
    degree: "PhD",
    specialties: getRandomTags(),
    yearsOfExperience: 9,
    phoneNumber: 5556781234,
  },
  {
    firstName: "Amanda",
    lastName: "Hall",
    city: "Fort Worth",
    degree: "MSW",
    specialties: getRandomTags(),
    yearsOfExperience: 3,
    phoneNumber: 5559872345,
  },
];

export { advocateData };
