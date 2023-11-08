import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from '@webed/angular-tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
