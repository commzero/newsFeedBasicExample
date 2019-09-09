import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ArticleRequestModel } from '../../models/article-request-model';

@Injectable()

export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllArticles(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'articles');
  }

  deleteArticle(articleId: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + `articles/${articleId}`);
  }

  addArticle(articleBody: ArticleRequestModel): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'articles', articleBody);
  }

  editArticle(articleBody: ArticleRequestModel): Observable<any> {
    return this.http.put<any>(environment.apiUrl + `articles/${articleBody.id}`, articleBody);
  }
}
