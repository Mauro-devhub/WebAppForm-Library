import { NgModule } from "@angular/core";
import { TableDBComponent } from "./table-db/table-db.component";
import { CommonModule } from "@angular/common";
import { AlertModalComponent } from "./alert-modal/alert-modal.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [TableDBComponent, AlertModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TableDBComponent, AlertModalComponent]
})

export class ComponentsModule {}