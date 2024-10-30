import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Post } from '../post.model';

export const selectPostState = createFeatureSelector<Post[]>('post');

export const selectPosts = createSelector(
  selectPostState,
  (state: Post[]) => state
);

export const selectPostById = (id: number) => createSelector(
  selectPosts,
  (posts: Post[]) => posts.find(post => post.id === id)
);

export const selectPostCount = createSelector(
  selectPosts,
  (posts: Post[]) => posts.length
);

export const selectPostNames = createSelector(
  selectPosts,
  (posts: Post[]) => posts.map(post => post.nombre)
);
