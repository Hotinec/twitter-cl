import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectTagsItems = createSelector(selectTags, tags => tags.items);

export const selectIsTagsLoading = (state: RootState): boolean => 
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state: RootState): boolean => 
  selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootState): LoadingState | undefined => selectTags(state).loadingState;
