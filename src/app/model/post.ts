export class Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
    created_at_ts: number;

    constructor() {
        this.loveIts = 0;
        this.created_at = new Date();
        this.created_at_ts = this.created_at.getTime();
    }
}