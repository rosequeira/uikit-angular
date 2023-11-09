import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from '@webed/angular-tooltip';
import { TagsComponent } from './components/tags/tags.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MessageComponent } from './components/message/message.component';
import { TogglesTitleComponent } from './components/toggles-title/toggles-title.component';
import { IconmoonComponent } from './common/iconmoon/iconmoon.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    TooltipComponent,
    TagsComponent,
    TabsComponent,
    MessageComponent,
    TogglesTitleComponent,
    IconmoonComponent,
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
