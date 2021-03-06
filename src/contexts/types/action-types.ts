export enum ActionTypesUser {
  CLEAR_ERROR = 'CLEAR_ERROR',
  GET_SINGLE_USER = 'GET_SINGLE_USER',
  FETCH_USERS_FAILED = 'FETCH_USERS_FAILED',
  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
}

export enum ActionTypesPost {
  CLEAR_ERROR = 'CLEAR_ERROR',
  GET_SINGLE_POST = 'GET_SINGLE_POST',
  FETCH_POST_FAILED = 'FETCH_POST_FAILED',
  FETCH_POST_REQUEST = 'FETCH_POST_REQUEST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  ADD_NEW_POST_TO_THE_LIST = 'ADD_NEW_POST_TO_THE_LIST',
  REMOVE_POST_FROM_THE_LIST = 'REMOVE_POST_FROM_THE_LIST',
}

export enum ActionTypeComment {
  CLEAR_ERROR = 'CLEAR_ERROR',
  FETCH_COMMENT_FAILED = 'FETCH_COMMENT_FAILED',
  FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST',
  FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS',
}

export enum ActionTypeAddPost {
  ADD_POST_FAILED = 'ADD_POST_FAILED',
  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
}
