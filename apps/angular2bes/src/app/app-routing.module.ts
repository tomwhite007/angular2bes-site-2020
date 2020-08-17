import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollViewContainerComponent } from './scroll-view-container/scroll-view-container.component';

const routes: Routes = [
  { path: '', component: ScrollViewContainerComponent },
  { path: ':id', component: ScrollViewContainerComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
