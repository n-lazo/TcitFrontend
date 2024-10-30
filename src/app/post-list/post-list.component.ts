import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from '../post.model';
import { selectPosts } from '../state/post.selectors';
import { PostActions } from '../state/post.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  filterForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      nombre: ['']
    });
    this.posts$ = this.filterForm.valueChanges.pipe(
      startWith({ nombre: '' }),
      switchMap(filter =>
        this.store.select(selectPosts).pipe(
          map(posts => posts.filter(post => post.nombre.includes(filter.nombre)))
        )
      )
    );
  }

  ngOnInit() {
    this.store.dispatch(PostActions.load());
  }

  removePost(id: number) {
    this.store.dispatch(PostActions.remove({ id }));
  }
}
