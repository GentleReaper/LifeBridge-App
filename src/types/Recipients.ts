export interface RecipientRecord {
  id: string;
  recipientCardId: string;

  fullName: string;
  email: string;
  phone: string;

  dateOfBirth: string;
  gender: string;

  organNeeded: string;
  bloodGroup: string;

  medicalCondition: string;
  medicalNotes: string;

  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
    email?: string;
  };

  city: string;
  country: string;

  status: "Pending Verification" | "Verified Recipient" | "In Review";

  registeredAt: string;
  consentAgreed: boolean;
}