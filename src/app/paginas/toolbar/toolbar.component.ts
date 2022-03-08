import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> ef3b8ed (Resolve as rotas)

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
<<<<<<< HEAD
  constructor() {}
=======
  constructor(private router: Router) {}
>>>>>>> ef3b8ed (Resolve as rotas)
}
