import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RealdataPageRoutingModule } from './realdata-routing.module';
import { RealdataPage } from './realdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealdataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RealdataPage]
})
export class RealdataPageModule {}
