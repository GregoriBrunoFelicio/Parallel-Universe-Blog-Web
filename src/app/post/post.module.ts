import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostComponent } from "./post.component";
import { PostRoutingModule } from "./post.routing.module";

@NgModule({
    declarations: [PostComponent, PostCreateComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
    ]
})
export class PostModule {  }