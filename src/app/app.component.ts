import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'posts-app';
}
