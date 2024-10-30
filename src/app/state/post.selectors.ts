import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Post } from '../post.model';

export const selectPostState = createFeatureSelector<Post[]>('post');

export const selectPosts = createSelector(
  selectPostState,
  (state: Post[]) => state
);
