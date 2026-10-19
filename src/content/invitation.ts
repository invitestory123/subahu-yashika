/**
 * All copy for the Subahu & Yashika wedding invitation.
 */

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  address?: string;
  description: string;
  dateISO: string;
  mapsQuery: string;
  mapsUrl?: string;
}

export const invitation = {
  invocations: [
    "॥ श्री महावीराय नमः ॥",
    "॥ जय श्री बाबा गज्जा जी ॥",
  ],
  tagline: "The Beginning of Our Forever",
  subTagline: "Until We Say Forever",
  couple: {
    groom: "Subahu",
    bride: "Yashika",
    initials: "S & Y",
    title: "Subahu Weds Yashika",
    hashtag: "#SYforever",
  },
  heavenlyBlessings: {
    title: "With Heavenly Blessings of",
    elders: [
      "Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain",
      "Smt. Usha Jain & Sh. Surinder Kumar Jain",
    ],
  },
  inviteLead:
    "together with their families, cordially invite you to celebrate the wedding celebrations of their beloved Grandson",
  story: {
    title: "Subahu & Yashika",
    subtitle: "Two souls, two families, one sacred journey",
    groom: {
      name: "Subahu",
      role: "The Groom",
      parentage: "",
      image: "https://media.invitestory.in/ever-after-bloom/src/assets/portrait-groom.jpg",
      text: "Beloved son of Mrs. Mukta Jain & Mr. Atul Jain. Walking towards forever with grace, love, and devotion.",
    },
    bride: {
      name: "Yashika",
      role: "The Bride",
      parentage: "",
      image: "https://media.invitestory.in/ever-after-bloom/src/assets/portrait-bride.jpg",
      text: "Cherished daughter of Mrs. Rashmi & Mr. Nilesh Jain, Samana. Bringing warmth, smiles, and grace as we begin our new chapter together.",
    },
  },
  shloka: {
    sanskrit: "मंगलम् भगवान वीरो, मंगलं गौतमो गणी।\nमंगलम् कुन्दकुन्दार्यो, जैन धर्मोऽस्तु मंगलम्॥",
    meaning: "Auspicious is Bhagwan Mahavira, auspicious is Ganadhara Gautama. Auspicious is Acharya Kundakunda, and auspicious is the Jain Dharma.",
  },
  /** ISO date-time of the main wedding ceremony, used by the countdown and calendar file. */
  dateISO: "2026-11-21T20:00:00+05:30",
  dateLabel: "Saturday, 21 November 2026",
  timeLabel: "8:00 PM onwards",
  venue: {
    name: "The Elysium Grand",
    address: "Arabia hall, the Elysium Grand",
    mapsQuery: "The Elysium Grand",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Elysium+Grand",
  },
  dressCode: "Traditional & Festive Indian Elegance",
  hero: {
    kicker: "The Beginning of Our Forever",
    eyebrow: "Save the Date",
    blessing: "Until We Say Forever",
  },
  celebrations: [
    {
      id: "wedding",
      name: "Wedding",
      date: "21 November 2026",
      time: "8:00 PM onwards",
      venue: "Arabia hall, the Elysium Grand",
      address: "Arabia hall, the Elysium Grand",
      description: "The sacred nuptials and joyous wedding celebrations as two souls unite for a lifetime of love and joy.",
      dateISO: "2026-11-21T20:00:00+05:30",
      mapsQuery: "The Elysium Grand",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Elysium+Grand",
    },
  ] as EventItem[],
  /** For backwards compatibility with timeline component if needed */
  chapters: [
    {
      no: "I",
      title: "Wedding",
      when: "21 November 2026 · 8:00 PM onwards",
      text: "Arabia hall, the Elysium Grand — Auspicious wedding ceremony and celebration.",
    },
  ],
  note: {
    heading: "",
    subheading: "",
  },
  compliments: {
    regards: "With Love and Regards,",
    family: "JAIN FAMILY",
    firm: "",
  },
  footer: {
    line1: "Come with your blessings, stay for the joy.",
    line2: "Celebrate the beginning of our forever.",
    signoff: "With Love & Regards, Jain Family",
  },
} as const;

export const wishes = [
  {
    from: "With Heavenly Blessings",
    text: "Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain",
  },
  {
    from: "Blessings of Elders",
    text: "Smt. Usha Jain & Sh. Surinder Kumar Jain",
  },
  {
    from: "Parents' Love",
    text: "Mrs. Mukta Jain & Mr. Atul Jain · Mr. Nilesh Jain & Mrs. Rashmi Jain, Samana",
  },
] as const;
