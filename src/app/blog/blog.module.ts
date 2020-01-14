import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { MatSliderModule } from '@angular/material/slider'

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ComponentsModule, MatSliderModule],
})
export class BlogModule {}
