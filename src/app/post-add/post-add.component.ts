import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../post.model';
import { PostActions } from '../state/post.actions';

@Component({
  selector: 'app-post-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  postForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  addPost() {
    const post: Post = this.postForm.value;
    this.store.dispatch(PostActions.add(post));
  }
}
