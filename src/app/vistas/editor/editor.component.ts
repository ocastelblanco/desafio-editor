import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'dse-editor',
  standalone: true,
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
  @Input() contenido: string = '';
  @Output() cambiaContenido: EventEmitter<string> = new EventEmitter<string>();
  changedEditor(event: EditorChangeContent | EditorChangeSelection | any): void {
    if (event.html) this.cambiaContenido.emit(event.html);
  }
}
