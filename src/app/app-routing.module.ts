import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './presentation/main-page/main-page.component';
import { MainPageModule } from './presentation/main-page/main-page.module';

const routes: Routes = [
  {
    component: MainPageComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
