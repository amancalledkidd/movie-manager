import { Review } from './Review';

export type Film = {
    id: number;
    title: string;
    apiId: string;
    haveWatched: boolean;
    posterPath: string;
    reviews: Review[];
}