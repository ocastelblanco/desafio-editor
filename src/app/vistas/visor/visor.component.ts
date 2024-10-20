import { Component, Input } from '@angular/core';
import { PipesModule } from '@modulos/pipes/pipes.module';

@Component({
  selector: 'dse-visor',
  standalone: true,
  imports: [
    PipesModule
  ],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.scss'
})
export class VisorComponent {
  @Input() contenido: string = '';
}
