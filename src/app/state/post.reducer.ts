import { createReducer ,on } from '@ngrx/store';
import { Post } from '../post.model';
import { PostActions, PostApiActions } from './post.actions';

// Estado inicial para posts
export const initialState: Post[] = [];

// Reducer para posts (Traidos de la API) si no hay posts, se retorna el estado actual
export const postReducer = createReducer(
  initialState,
  on(PostApiActions.loadSuccess, (state, { posts }) => posts),
  on(PostApiActions.loadError, (state, { error }) => {
    console.error(error);
    return state;
  }),
  on(PostActions.add, (state, post) => [...state, post]),
  on(PostActions.remove, (state, { id }) => state.filter(post => post.id !== id)),
  on(PostActions.update, (state, post) => state.map(p => p.id === post.id ? post : p)),
);
