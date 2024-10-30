import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../post.service';
import { PostApiActions, PostActions } from './post.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
  private actions$ = inject(Actions);
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.load),
    switchMap(() => this.postService.getPosts().pipe(
      map(posts => PostApiActions.loadSuccess({ posts })),
      catchError(error => of(PostApiActions.loadError({ error })))
    ))
  ));

  constructor(
    private postService: PostService
  ) {}
}


