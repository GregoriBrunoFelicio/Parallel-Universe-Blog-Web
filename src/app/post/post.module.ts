import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostComponent } from "./post.component";
import { PostRoutingModule } from "./post.routing.module";

@NgModule({
    declarations: [PostComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
    ]
})
export class PostModule {  }