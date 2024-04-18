import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SplitCommaPipe } from './pipes/split-comma.pipe';


@NgModule({
  declarations: [
    Error404PageComponent,
    SplitCommaPipe
  ],
  imports: [
  ],
  exports: [
    Error404PageComponent,
    SplitCommaPipe
  ]
})
export class SharedModule { }
