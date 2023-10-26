import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbilityModule } from '@casl/angular';
import { RandomizeLettersPipe } from './pipes/randomize-letters.pipe';
import { AppAbility } from './casl/appAbility';
import { PureAbility } from '@casl/ability';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [AppComponent, RandomizeLettersPipe, OrderPipe],
  imports: [BrowserModule, AbilityModule],
  providers: [
    {
      provide: AppAbility,
      useValue: new AppAbility([]),
    },
    { provide: PureAbility, useExisting: AppAbility },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
