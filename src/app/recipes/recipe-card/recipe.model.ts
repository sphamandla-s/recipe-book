export class Recipe {
    public name: string
    public description: string
    public imgUrl: string
    public ingredients: string[]

    constructor(name : string, desc : string, img : string, ingredients : string[]){
        this.name = name,
        this.description = desc,
        this.imgUrl = img,
        this.ingredients = ingredients
    }
}