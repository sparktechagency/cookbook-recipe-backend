/* eslint-disable no-unused-vars */
export enum ENUM_USER_ROLE {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
  RECIPE_CREATOR = 'RECIPE_CREATOR',
}

export enum ENUM_SOCKET_EVENT {
  CONNECT = "connection",
  NOTIFICATION = "notification",
  NEW_NOTIFICATION = "new-notification",
  SEEN_NOTIFICATION = "seen-notification",
  MESSAGE_NEW = "new-message",
  MESSAGE_GETALL = "message",
  CONVERSION = "conversion",
  PARTNER_LOCATION = "partner-location",
};

export enum ENUM_MEAL_TYPE {
  NONE = "none",
  BREAKFASTS = "breakfast",
  LUNCHES_AND_DINNERS = "lunches-and-dinners",
  DESSERTS = "desserts",
  SNACKS = "snacks",
  SIDES = "sides",
}

// 'breakfast', 'lunches-and-dinners', 'desserts', 'snacks', 'sides'