import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroNames: string[] = ['Arrow', 'Flash', 'Batman'];
  deletedHero?: string;

  deleteLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
