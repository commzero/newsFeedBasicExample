import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EditPostComponent } from './pages/main-page/edit-post/edit-post.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ArticlesService } from './services/http/articles-service.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        MainPageComponent,
        EditPostComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        SharedModule
    ],
    providers: [
        ArticlesService
    ],
    entryComponents: [
        EditPostComponent
    ],
    bootstrap: []
})
export class MainModule { }
