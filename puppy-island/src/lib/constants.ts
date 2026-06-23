import { Service, TeamMember, Stat, Package, ProofDog } from "@/types";

export const CONSTANTS = {
  PROJECT_NAME: "Puppy Island",
};

export const SERVICES: Service[] = [
  {
    id: "boarding",
    name: "Luxury Boarding",
    emoji: "🏨",
    description: "Climate-controlled suites with 24/7 care.",
    price: 45,
    priceUnit: "night",
  },
  {
    id: "daycare",
    name: "Daycare",
    emoji: "🎾",
    description: "Full day of play and socialization.",
    price: 30,
    priceUnit: "day",
  },
  {
    id: "grooming",
    name: "Spa & Grooming",
    emoji: "✂️",
    description: "Full service bath, trim, and styling.",
    price: 60,
    priceUnit: "session",
  },
];

export const TEAM: TeamMember[] = [
  { 
    name: "Marcus Chen", 
    role: "Head of Play & Fitness", 
    funFact: "I can identify over 150 breeds by their bark alone!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
  },
  { 
    name: "Elena Rodriguez", 
    role: "Master Groomer", 
    funFact: "I once gave a haircut to a celebrity's Samoyed!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
  },
  { 
    name: "Dr. David Kim", 
    role: "On-Site Wellness Director", 
    funFact: "I've run three marathons with my husky, Blue.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
  },
  { 
    name: "Sophie White", 
    role: "Island Concierge", 
    funFact: "I make a mean pup-friendly coconut latte!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
  },
];

export const STATS: Stat[] = [
  { value: "500+", label: "Happy Pups" },
  { value: "24/7", label: "Professional Care" },
  { value: "10k+", label: "Treats Given" },
  { value: "15+", label: "Years Experience" },
];

export const PACKAGES: Package[] = [
  {
    name: "The Weekend Warrior",
    emoji: "⛺",
    contents: ["2 Nights Boarding", "Unlimited Play", "Luxury Bath"],
    originalPrice: 150,
    discountedPrice: 120,
    savings: 30,
  },
  {
    name: "The Monthly Mate",
    emoji: "📅",
    contents: ["10 Daycare Passes", "2 Grooming Sessions", "Priority Booking"],
    originalPrice: 420,
    discountedPrice: 350,
    savings: 70,
  },
];

export const DOG_SIZES = ["All Pups", "Pocket Pups", "Mid-Sized", "Gentle Giants"] as const;

export const PROOF_DOGS: ProofDog[] = [
  { name: "Buddy", breed: "Golden Retriever", size: "Gentle Giants", sizeKey: "gentle-giants" },
  { name: "Luna", breed: "French Bulldog", size: "Pocket Pups", sizeKey: "pocket-pups" },
  { name: "Max", breed: "Beagle", size: "Mid-Sized", sizeKey: "mid-sized" },
  { name: "Bella", breed: "Siberian Husky", size: "Gentle Giants", sizeKey: "gentle-giants" },
  { name: "Charlie", breed: "Poodle", size: "Mid-Sized", sizeKey: "mid-sized" },
  { name: "Daisy", breed: "Chihuahua", size: "Pocket Pups", sizeKey: "pocket-pups" },
];
