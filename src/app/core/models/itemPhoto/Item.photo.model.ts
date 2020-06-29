export class ItemPhoto {
    id: number;
    photo: string;
    text: string;

    constructor(id: number, text: string){
        this.id = id;
        this.photo = 'https://picsum.photos/id/'+  id + '/500/500.jpg';
        this.text = text;
    }

}
