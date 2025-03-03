import {Plataforma } from './plataformas.interface';

export interface JuegoInterface{
    id: number;
    name: string;
    rating: number;
    released: string;
    background_image: string;
    platforms: Plataforma[];
}

