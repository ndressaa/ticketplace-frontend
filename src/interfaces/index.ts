export enum UserType {
  BUYER = 'buyer',
  SELLER = 'seller',
}

export enum Screen {
  HOME = 'home',
  LOGIN = 'login',
  SIGNUP = 'signup',
  EVENTS = 'events',
  CART = 'cart',
  CHECKOUT = 'checkout',
  TICKETS = 'tickets',
  PROFILE = 'profile',
}

export type SwapTickets = {
  current: any;
  offered: any;
};
