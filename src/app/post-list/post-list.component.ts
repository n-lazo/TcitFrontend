import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { selectPosts } from '../state/post.selectors';
import {PostActions, PostApiActions} from '../state/post.actions';



@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store) {
    this.posts$ = store.select(selectPosts);
  }

  ngOnInit() {
    this.store.dispatch(PostActions.load());
  }

  removePost(id: number) {
    this.store.dispatch(PostActions.remove({ id }));
  }

}
