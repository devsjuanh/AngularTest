import { NgModule } from "@angular/core";
import { CofeeListComponent } from "../cofee-list/cofee-list.component";
import { CofeeComponent } from "./cofee.component";

@NgModule({
    declarations: [
        CofeeListComponent,
        CofeeComponent
    ],
    exports: [CofeeComponent],
  })
  export class CofeeModule { }
  