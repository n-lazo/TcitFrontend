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
    )),
  ));

  removePost$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.remove),
    switchMap(({ id }) => this.postService.removePost(id).pipe(
      map(() => PostApiActions.removeSuccess({ id })),
      catchError(error => of(PostApiActions.removeError({ error })))
    )),
  ));

  addPost$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.add),
    switchMap(post => this.postService.addPost(post).pipe(
      map(addedPost => PostApiActions.addSuccess(addedPost)),
      catchError(error => of(PostApiActions.addError({ error })))
    )),
  ));


  constructor(
    private postService: PostService
  ) {}
}


