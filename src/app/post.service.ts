import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post.model';

@Injectable()
export class PostService {
  getPosts(): Observable<Post[]> {
    return of([
      { id: 1, nombre: 'Post 1', descripcion: 'Descripción 1' },
      { id: 2, nombre: 'Post 2', descripcion: 'Descripción 2' },
      { id: 3, nombre: 'Post 3', descripcion: 'Descripción 3' },
    ]);
  }
}
