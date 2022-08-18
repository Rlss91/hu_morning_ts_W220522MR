export class RealEstate {
  title: string;
  price: number;
  imgUrl: string;
  id: number;
  constructor(title: string, price: number, imgUrl: string, id: number) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.id = id;
  }
}
