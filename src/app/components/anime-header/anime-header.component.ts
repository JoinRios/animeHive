import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-header',
  templateUrl: './anime-header.component.html',
  styleUrls: ['./anime-header.component.scss']
})
export class AnimeHeaderComponent {
  click() {
    console.log('click');
  }
}
