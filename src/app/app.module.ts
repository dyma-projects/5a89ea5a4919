import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DirectiveComponent} from './directive.component';
import {LiaisonComponent} from './liaison.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        DirectiveComponent,
        LiaisonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
