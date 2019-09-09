export interface ArticleRequestModel {

    id: number;

    title: string;

    author: string;

    content: string;

    numberOfLikes?: number;

    numberOfDislikes?: number;
    
}