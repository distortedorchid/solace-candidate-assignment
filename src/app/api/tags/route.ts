const TAG_HIERARCHY = {
  "Mental Health": [
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
  ],

  "Neurodevelopmental & Cognitive": [
    "ADHD",
    "Learning disorders",
    "Cognitive assessments",
    "Neuropsychological testing",
  ],

  "Sleep & Chronic Conditions": [
    "Sleep issues",
    "Chronic pain",
    "Weight management",
    "Nutrition counseling",
    "Diabetic nutrition",
    "Eating disorders",
  ],

  "Substance Use & Recovery": [
    "Substance use",
    "Substance abuse",
    "Addiction recovery",
  ],

  "Gender-Specific Care": [
    "Women's health",
    "Men's health",
    "LGBTQ+ affirming care",
  ],

  "Women's Health": [
    "Post-partum support",
    "Infertility counseling",
    "Family planning",
    "Domestic abuse recovery",
  ],

  "Men's Health": [
    "Emotional expression",
    "Anger management",
    "Fatherhood & parenting",
    "Career stress",
    "Relationship communication",
  ],

  "LGBTQ+ Affirming Care": [
    "Coming out support",
    "Gender identity",
    "Sexual orientation",
  ],

  "Relationships & Family": [
    "Couples counseling",
    "Family issues",
    "Friendship difficulties",
    "Divorce/separation support",
    "Parenting support",
    "Domestic abuse",
  ],

  Pediatrics: [
    "Behavioral issues",
    "ADHD (children)",
    "Family dynamics",
    "School-related stress",
  ],

  "Coaching & Personal Growth": [
    "Life coaching",
    "Career coaching",
    "Leadership coaching",
    "Academic performance",
    "Goal setting & motivation",
    "Personal growth",
  ],

  "Medication Management": [
    "Medication adherence",
    "Psychiatric medication education",
    "Prescription monitoring",
  ],
};

export async function GET() {
  return Response.json(TAG_HIERARCHY);
}
