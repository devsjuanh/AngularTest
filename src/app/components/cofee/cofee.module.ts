import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CofeeListComponent } from "../cofee-list/cofee-list.component";
import { CofeeComponent } from "./cofee.component";

@NgModule({
    declarations: [
        CofeeListComponent,
        CofeeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [CofeeComponent],
    bootstrap: [
        CofeeListComponent,
        CofeeComponent
    ]
  })
  export class CofeeModule { }
  