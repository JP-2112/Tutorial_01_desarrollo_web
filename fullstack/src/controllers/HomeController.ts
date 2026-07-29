import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Home";
    res.render('home/index', { viewData: viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "About";
    res.render('home/about', { viewData: viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Contact";
    res.render('home/contact', { viewData: viewData });
  }

  static Main_Point(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Books";
    viewData["books"] = books;
    res.render('home/books', { viewData: viewData });
  }

  static show(req: Request, res: Response): void {
    const idParam = req.params.id;

    if (typeof idParam !== 'string') {
      res.status(400).send('Invalid book id');
      return;
    }

    const id = parseInt(idParam);

    if (isNaN(id)) {
      res.status(400).send('Invalid book id');
      return;
    }

    const book = Book.findById(books, id);

    if (!book) {
      res.status(404).send('Book not found');
      return;
    }

    const viewData: { [key: string]: any } = {};
    viewData["title"] = book.title;
    res.render('home/show', { viewData: viewData, book: book });
  }
}
