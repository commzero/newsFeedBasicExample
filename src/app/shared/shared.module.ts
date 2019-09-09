import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { RoundedDirective } from './directives/rounded.directive';


@NgModule({
    declarations: [
        PageNotFoundComponent,
        ReversePipe,
        RoundedDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [
    ],
    exports: [
        PageNotFoundComponent,
        ReversePipe,
        RoundedDirective
    ],
    bootstrap: []
})
export class SharedModule { }
