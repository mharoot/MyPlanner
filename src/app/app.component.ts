import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'My Planner';
  home : boolean = true;

  setHomeFalse() : void {
    this.home = false;
  }
}
