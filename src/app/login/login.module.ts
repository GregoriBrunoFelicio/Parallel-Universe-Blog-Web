import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "../home/home.routing.module";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
    ]
})
export class LoginModule { }