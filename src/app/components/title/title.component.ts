import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,

  template: `
    <p>
      Title works!
    </p>
  `,
  styles: `
   h1 {
    text-decoration : underline ;
   }
  `
})
export class TitleComponent {

}
