import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArticleRequestModel } from '../../../models/article-request-model';
import { ArticlesService } from '../../../services/http/articles-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styles: []
})

export class EditPostComponent implements OnInit {

  originalTitle: string = '';


  constructor(

    public dialogRef: MatDialogRef<EditPostComponent>,

    @Inject(MAT_DIALOG_DATA) public article: ArticleRequestModel,

    private articleService: ArticlesService

  ) { }

  ngOnInit() {

    console.log(this.article);

    this.originalTitle = this.article.title;

  }

  onNoClick(): void {

    this.dialogRef.close();

  }

  onEditArticle() {

    let confirmEdit = confirm('Save changes to ' + this.originalTitle + '?');

    if (confirmEdit) {

      this.articleService.editArticle(this.article).subscribe(edited => {

        this.dialogRef.close('Saved changes to ' + this.article.title);

      }, err => {

        this.dialogRef.close('Cannot save changes to ' + this.article.title);

        console.log(err);

      });

    }

  }

}
