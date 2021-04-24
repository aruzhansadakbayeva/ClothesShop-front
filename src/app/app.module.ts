import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WearComponent } from './wear/wear.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutComponent } from './about/about.component';
import { WearDetailComponent } from './wear/wear-detail/wear-detail.component';
import { WearListComponent } from './wear/wear-list/wear-list.component';
import { WearItemComponent } from './wear/wear-list/wear-item/wear-item.component';
import { AccessoryItemComponent } from './accessories/accessory-list/accessory-item/accessory-item.component';
import { AccessoryDetailComponent } from './accessories/accessory-detail/accessory-detail.component';
import { AccessoryListComponent } from './accessories/accessory-list/accessory-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { WearStartComponent } from './wear/wear-start/wear-start.component';
import { AccessoryStartComponent } from './accessories/accessory-start/accessory-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WearComponent,
    AccessoriesComponent,
    AboutComponent,
    WearDetailComponent,
    WearListComponent,
    WearItemComponent,
    AccessoryItemComponent,
    AccessoryDetailComponent,
    AccessoryListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    WearStartComponent,
    AccessoryStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
