import { JuegoInterface } from './juegos.interface';

export interface JuegosExterno {
    count: number;
    next: string | null;
    previous: string | null;
    results: JuegoInterface[];
}