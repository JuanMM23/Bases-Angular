import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-listado-personajes',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input() public characterList: Character[] = [];
  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    if(!id) return;
    this.onDelete.emit(id);
  }
}
