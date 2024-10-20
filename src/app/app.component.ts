import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from './vistas/editor/editor.component';
import { VisorComponent } from "./vistas/visor/visor.component";
import { PrimengModule } from '@modulos/primeng/primeng.module';
import { DataService, Pagina, Respuesta } from '@servicios/data.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'dse-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EditorComponent,
    VisorComponent,
    PrimengModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  paginas: Pagina[] = Array.from({ length: 8 }, (_, i) => `pag${(i + 1).toString().padStart(2, '0')}.html`) as Pagina[];
  contenidosEditor: string[] = [];
  contenidosVisor: string[] = [];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.paginas.forEach((pagina: Pagina, numPagina: number) => {
      this.dataService.apiGet({ accion: 'cargar', target: pagina }).subscribe((resp: Respuesta) => {
        if (resp.error == null) {
          this.contenidosEditor[numPagina] = resp.datos;
          this.contenidosVisor[numPagina] = resp.datos;
        }
      });
    });
  }
}
