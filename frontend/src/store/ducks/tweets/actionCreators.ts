import { Action } from "redux";
import { TweetsState, LoadingState } from "./contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionInterface extends Action {
  type: TweetsActionsType.SET_TWEETS;
  payload?: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateInterface extends Action {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload?: LoadingState;
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload: payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload: payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions = 
  | SetTweetsActionInterface
  | SetTweetsLoadingStateInterface
  | FetchTweetsActionInterface;
