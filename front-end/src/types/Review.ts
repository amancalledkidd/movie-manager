export type Review = {
    id: number | null;
    reviewerName: string;
    reviewText: string;
    rating: number;
    dateCreated: string | null;
    filmId: number;
}