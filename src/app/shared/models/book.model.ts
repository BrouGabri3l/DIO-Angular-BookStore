import { BookCategory } from "../enums/book-category";

export class Book {
    id?: number;
    title!: string;
    price!: number;
    quantity!: number;
    image?: string;
    category!: number;
}