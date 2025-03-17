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
