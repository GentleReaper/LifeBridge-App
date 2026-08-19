export interface Donor {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  donationType: string;
  organs: string[];
  medicalNotes: string;

  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };

  city: string;
  country: string;
  status: string;
  registeredAt: string;
  consentAgreed: boolean;
}
