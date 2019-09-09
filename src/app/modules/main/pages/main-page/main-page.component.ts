import { Component, OnInit, Inject } from '@angular/core';
import { ArticlesService } from '../../services/http/articles-service.service';
import { ArticleRequestModel } from '../../models/article-request-model';
import { LoginService } from 'src/app/core/services/http/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: []
})

export class MainPageComponent implements OnInit {

  articles: any;

  article: ArticleRequestModel = {

    id: 0,

    title: '',

    author: '',

    content: '',

    numberOfLikes: 0,

    numberOfDislikes: 0

  }

  constructor(

    private articlesService: ArticlesService,

    private loginService: LoginService,

    private snackBar: MatSnackBar,

    public dialog: MatDialog,

    private router: Router

  ) { }

  ngOnInit() {

    this.getArticles();

  }

  getArticles() {

    this.articlesService.getAllArticles().subscribe(articlesResponse => {

      this.articles = articlesResponse;

      console.log(articlesResponse);

    }, err => { console.log(err) });

  }

  onAddArticle() {

    let confirmPost = confirm('Post a new article?');

    if (confirmPost) {

      this.articlesService.addArticle(this.article).subscribe(added => {

        console.log(added);

        this.snackBar.open('Article Posted!', 'Dismiss', { duration: 2000 });

        this.getArticles();

      });

    }

  }

  openDialog(selectedArticle): void {

    const dialogRef = this.dialog.open(EditPostComponent, {

      data: selectedArticle

    });

    dialogRef.afterClosed().subscribe(result => {

      this.getArticles();

      this.snackBar.open(result ? result : 'Canceled!', 'Dismiss', { duration: 2000 });

      console.log('The dialog was closed', result);

    });

  }

  onLikeDislikeArticle(articleBody: ArticleRequestModel, action: string) {

    switch (action) {
      
      case 'like': {

        articleBody.numberOfLikes++;

        break;

      } case 'dislike': {

        articleBody.numberOfDislikes++;

        break;

      }

    }

    this.articlesService.editArticle(articleBody).subscribe(response => {

      this.getArticles();

    }, err => { console.log(err); });

  }

  onDeleteArticle(articleId) {

    let confirmDelete = confirm('Are you sure?');

    if (confirmDelete) {

      this.articlesService.deleteArticle(articleId).subscribe(articleDeleted => {

        console.log(articleDeleted);

        this.snackBar.open('Article Deleted!', 'Dismiss', { duration: 2000 });

        this.getArticles();

      }, err => { console.log(err) });

    }

  }

  onLogOut() {

    let confirmLogout = confirm('Logout?');

    if (confirmLogout) {

      this.loginService.logout();

      console.log(localStorage.getItem('loggedIn'));

      this.router.navigate(['/login']);

      this.snackBar.open('Logged Out!', 'Dismiss', { duration: 2000 });

    }

  }

}
