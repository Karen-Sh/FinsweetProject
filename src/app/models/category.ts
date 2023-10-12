export interface Category{
    filter(arg0: (post: any) => any): Category;
    id: number,
    img:string,
    categoty: string,
    text:string
}