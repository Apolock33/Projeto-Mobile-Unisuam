export class Ratings {
    public gameId: string;
    public comment: string;
    public likes: number;
    public dislikes: number;

    constructor(gameId: string, comment: string, likes: number, dislikes: number) {
        this.gameId = gameId;
        this.comment = comment;
        this.likes = likes;
        this.dislikes = dislikes;
    }
}