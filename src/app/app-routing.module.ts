import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './presentation/history-page/history-page.component';
import { HistoryPageModule } from './presentation/history-page/history-page.module';
import { HomePageComponent } from './presentation/home-page/home-page.component';
import { HomePageModule } from './presentation/home-page/home-page.module';
import { MainPageComponent } from './presentation/main-page/main-page.component';
import { MainPageModule } from './presentation/main-page/main-page.module';

const routes: Routes = [
  {
    component: HomePageComponent,
    path: '',
  },
  {
    component: MainPageComponent,
    path: 'main',
  },
  {
    component: HistoryPageComponent,
    path: 'history',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainPageModule,
    HomePageModule,
    HistoryPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
