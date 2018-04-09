// export class Entry {
//   title: string;
//   category: string;
//   ingredients: any[];
//   instructions: string;
//   pic: string;
// }

export class Recipe {
  title: string;
  _id: string;
  ingredients: Array<string>;
  directions: Array<string>;
  pic: string;
  href: string;
}
