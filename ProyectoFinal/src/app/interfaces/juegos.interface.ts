export interface JuegoInterface{
    id: number;
    name: string;
    rating: number;
    released: string;
    background_image: string;
}

export interface JuegosResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: JuegoInterface[];
}