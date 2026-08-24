import type { BookInterface } from '@/interfaces/BookInterface';

export type CreateBookDTO = Omit<BookInterface, 'id'>;
