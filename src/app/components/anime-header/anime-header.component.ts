import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-header',
  templateUrl: './anime-header.component.html',
  styleUrls: ['./anime-header.component.scss']
})
export class AnimeHeaderComponent {
  theme = 'light';
  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
  }
}
