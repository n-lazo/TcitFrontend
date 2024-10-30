import { createActionGroup, emptyProps, props} from '@ngrx/store';
import { Post } from '../post.model';

export const PostActions = createActionGroup({
  source: 'Post',
  events: {
    add: props<Post>(),
    remove: props<{ id: number }>(),
    update: props<Post>(),
    load: emptyProps()
  },
});

export const PostApiActions = createActionGroup({
  source: 'Post',
  events: {
    loadSuccess: props<{ posts: Post[] }>(),
    loadError: props<{ error: string }>()
  },
});
