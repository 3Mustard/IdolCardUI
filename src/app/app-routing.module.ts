import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdolCardComponent } from './idol-card/idol-card.component';
import { IdolGroupComponent } from './idol-group/idol-group.component';

const routes: Routes = [
  {path:'idolCard', component:IdolCardComponent},
  {path:'idolGroup',component:IdolGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
