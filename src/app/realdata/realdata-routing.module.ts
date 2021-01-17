import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealdataPage } from './realdata.page';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: RealdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealdataPageRoutingModule {}
