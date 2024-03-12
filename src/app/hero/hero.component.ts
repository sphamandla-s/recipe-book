import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe-card/recipe.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Tandoori Tofu Scramble",
      "A flavorful and protein-packed vegan breakfast option bursting with Indian spices.",
      "Link to Image",
      [
        "Block of firm tofu, crumbled",
        "Tandoori masala spice blend",
        "Chickpeas",
        "Bell pepper (any color)",
        "Red onion",
        "Vegetable broth",
        "Chopped fresh cilantro",
        "Naan bread (optional)",
      ]
    ),
    new Recipe(
      "Greek Yogurt Parfait with Berries and Granola",
      "A layered and refreshing parfait perfect for a healthy breakfast or snack.",
      "Link to Image",
      [
        "Plain Greek yogurt",
        "Honey",
        "Mixed berries (fresh or frozen)",
        "Granola",
        "Sliced almonds",
      ]
    )
    ,
    new Recipe(
      "One-Pan Lemon Herb Salmon with Roasted Asparagus",
      "A simple and elegant dish with minimal cleanup. Perfect for a weeknight meal.",
      "Link to Image",
      [
        "Salmon fillets",
        "Lemon slices",
        "Fresh herbs (thyme, rosemary, parsley)",
        "Asparagus spears",
        "Olive oil",
        "Salt and pepper",
      ]
    )
    ,
    new Recipe(
      "Black Bean and Corn Salsa with Avocado",
      "A vibrant and flavorful salsa, perfect for dipping chips or topping tacos.",
      "Link to Image",
      [
        "Black beans, rinsed and drained",
        "Corn kernels (fresh or canned)",
        "Roma tomatoes, diced",
        "Red onion, diced",
        "Jalapeno pepper, seeded and minced (optional)",
        "Cilantro, chopped",
        "Lime juice",
        "Olive oil",
        "Salt and pepper",
        "Avocado, diced",
      ]
    )
    ,
    new Recipe(
      "Shrimp Scampi with Zucchini Noodles",
      "A lighter take on the classic shrimp scampi with a delicious garlicky sauce.",
      "Link to Image",
      [
        "Shrimp, peeled and deveined",
        "Zucchini, spiralized",
        "Garlic, minced",
        "Butter",
        "Lemon juice",
        "White wine (optional)",
        "Fresh parsley, chopped",
        "Salt and pepper",
      ]
    ),

    new Recipe(
      "Mango Salsa with Grilled Chicken",
      "A refreshing and flavorful salsa with a touch of sweetness, perfect with grilled chicken.",
      "Link to Image",
      [
        "Mango, diced",
        "Red onion, diced",
        "Jalapeño pepper, seeded and minced (optional)",
        "Cilantro, chopped",
        "Lime juice",
        "Olive oil",
        "Salt and pepper",
        "Grilled chicken breasts or thighs",
      ]
    )


  ]
}
