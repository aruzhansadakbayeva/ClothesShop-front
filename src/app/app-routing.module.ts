import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WearComponent} from './wear/wear.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {AboutComponent} from './about/about.component';
import {WearDetailComponent} from './wear/wear-detail/wear-detail.component';
import {WearStartComponent} from './wear/wear-start/wear-start.component';
import {AccessoryStartComponent} from './accessories/accessory-start/accessory-start.component';
import {AccessoryDetailComponent} from './accessories/accessory-detail/accessory-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'wear', component: WearComponent, children: [
      { path: '', component: WearStartComponent},
      { path: ':id', component: WearDetailComponent}
    ]},
  {path: 'accessories', component: AccessoriesComponent, children: [
      {path: '', component: AccessoryStartComponent},
      {path: ':id', component: AccessoryDetailComponent}
    ]},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
