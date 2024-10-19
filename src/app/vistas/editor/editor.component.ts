import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'dse-editor',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    QuillEditorComponent,
    FormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  contenido: string = '<strong>Pepe Pepino</strong>';
  changedEditor(event: EditorChangeContent | EditorChangeSelection | any): void {
    if (event.html) console.log(event.html);
  }
}
