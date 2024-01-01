import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0
  }

  addCharacter() {
    if(this.character.name === '') return;
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};
  }
}
