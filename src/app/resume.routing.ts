import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

let route: Routes = [
  //   {
  //     path: '',
  //     component:
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(route, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouting { }
