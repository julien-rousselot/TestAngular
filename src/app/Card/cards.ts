export interface Cards {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
          lat: string;
          lng: string;
      }
  };
  phone?: string;
  birthday?: string;
  password?: string;
}

export interface UserInfo {
  gender: string;
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
  location: { country: string };
  phone: string;
  dob: { age: number };
}
