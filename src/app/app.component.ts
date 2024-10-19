import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuillEditorComponent } from 'ngx-quill';
import { EditorComponent } from './vistas/editor/editor.component';

@Component({
  selector: 'dse-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuillEditorComponent,
    EditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
