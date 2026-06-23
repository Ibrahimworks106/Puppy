export interface Service {
  id: string;
  name: string;
  emoji: string;
  description: string;
  price: number;
  priceUnit: string;
}

export interface TeamMember {
  name: string;
  role: string;
  funFact: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Package {
  name: string;
  emoji: string;
  contents: string[];
  originalPrice: number;
  discountedPrice: number;
  savings: number;
}

export interface ProofDog {
  name: string;
  breed: string;
  size: string;
  sizeKey: string;
}

export interface PricingRow {
  label: string;
  basic: string;
  pro: string;
  luxury: string;
}

export interface BookingStep {
  id: number;
  label: string;
  isCompleted: boolean;
}

export type Dog = {
  name: string;
  breed: string;
};
