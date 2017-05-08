import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/core/navigation/navigation.component';
import { IndexComponent } from './pages/core/index/index.component';
import { router } from './app.router';
import { DashboardComponent } from './pages/core/dashboard/dashboard.component';
import { WalletComponent } from './pages/evedata/wallet/wallet.component';
import { CharacterGuard } from './pages/guards/character.guard';
import { Globals } from './shared/globals';
import { AuthGuard } from './pages/guards/auth.guard';
import { AppGuard } from './pages/guards/app.guard';
import { AssetsComponent } from './pages/evedata/assets/assets.component';
import { CharactersheetComponent } from './pages/evedata/charactersheet/charactersheet.component';
import { ContactsComponent } from './pages/evedata/contacts/contacts.component';
import { IndustryComponent } from './pages/evedata/industry/industry.component';
import { MailComponent } from './pages/evedata/mail/mail.component';
import { MarketComponent } from './pages/evedata/market/market.component';
import { PlanetsComponent } from './pages/evedata/planets/planets.component';
import { SkillsComponent } from './pages/evedata/skills/skills.component';
import { Logger, Options } from 'angular2-logger/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IndexComponent,
    DashboardComponent,
    AssetsComponent,
    CharactersheetComponent,
    ContactsComponent,
    IndustryComponent,
    MailComponent,
    MarketComponent,
    SkillsComponent,
    PlanetsComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
  ],
  providers: [
    AppGuard,
    AuthGuard,
    CharacterGuard,
    Globals,
    Logger,
    { provide: Options, useValue: { level: environment.logLevel } },
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
