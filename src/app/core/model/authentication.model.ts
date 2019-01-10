declare namespace Authentication {
  export interface LoginPayload {
    username: string;
    password: string;
  }

  export interface SignupPayload {
    username: string;
    email: string;
    password: string;
  }

  export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    emailVerified: boolean;
    emailHash: string;
    passwordLastUpdated?: any;
    lastLogin: Date;
    phone?: any;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Credentials {
    user: User;
    accessToken: string;
    session: string;
  }
}
