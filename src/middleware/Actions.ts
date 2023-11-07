export const ActionList =
[
  "LOGIN",
  "LOGOUT",
  "MAIL_LOGIN",
  "START_MAP",
  "REMOVE_MAP",
  "UPDATE_USER",
  "ADD_BUILDING",
  "OPEN_BUILDING",
  "CLOSE_BUILDING",
  "UPDATE_BUILDING",
  "DELETE_BUILDING"
] as const;

type ActionListType = typeof ActionList;

export type ActionType= ActionListType[number];

export interface Action {
  type: ActionType;
  payload?: any;
}
