import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";

@NgModule({
    declarations: [
      EventsComponent,
    ],
    imports: [
        CommonModule,
        EventsRoutingModule
    ],
    providers: [],
  })
  export class EventsModule { }