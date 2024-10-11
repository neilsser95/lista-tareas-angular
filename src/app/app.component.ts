import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareasServices = inject(TareasService);
  
  ngOnInit(): void {
    this.listaTareas = this._tareasServices.getTareas();
  }

  agregarTarea(){
    this._tareasServices.agregartarea(this.nuevaTarea);
    this.nuevaTarea='';
    this.listaTareas = this._tareasServices.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasServices.eliminarTarea(index);
    this.listaTareas = this._tareasServices.getTareas(); 
  }
}
