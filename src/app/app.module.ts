import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './pages/sign-up/sign-up.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SignUpModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
