export type FoodCategory =
  | "proteins"
  | "grains"
  | "vegetables"
  | "fruits"
  | "nuts_seeds"
  | "legumes"
  | "dairy"
  | "meat"
  | "seafood"
  | "supplement"
  | "sweeteners"
  | "oil"
  | "condiments";

export type Food = {
  id: string;
  name: string;
  category: FoodCategory;
  servingSize: string;
  unit: "g" | "ml" | "cup" | "tbsp" | "tsp" | "portion" | "egg" | "clove";
  density?: number; // g/ml for volume-based foods
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    vitaminA: number;
    vitaminC: number;
    vitaminD: number;
    vitaminE: number;
    calcium: number;
    iron: number;
    magnesium: number;
    zinc: number;
    omega3: number;
    fiber: number;
  };
};

export const foods: Food[] = [
  // Proteins
  {
    id: "chicken_breast",
    name: "Chicken Breast",
    category: "proteins",
    servingSize: "100g",
    unit: "g",
    nutrients: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      vitaminA: 0.06,
      vitaminC: 0,
      vitaminD: 0.01,
      vitaminE: 0.3,
      calcium: 15,
      iron: 1,
      magnesium: 29,
      zinc: 1,
      omega3: 0.05,
      fiber: 0,
    },
  },
  {
    id: "beef",
    name: "Beef",
    category: "proteins",
    servingSize: "100g",
    unit: "g",
    nutrients: {
      calories: 250,
      protein: 26,
      carbs: 0,
      fat: 17,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0.003,
      vitaminE: 0.2,
      calcium: 11,
      iron: 2.6,
      magnesium: 20,
      zinc: 5,
      omega3: 0.03,
      fiber: 0,
    },
  },
  {
    id: "tofu",
    name: "Tofu",
    category: "proteins",
    servingSize: "100g",
    unit: "g",
    nutrients: {
      calories: 144,
      protein: 14,
      carbs: 2,
      fat: 9,
      vitaminA: 0.001,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.6,
      calcium: 350,
      iron: 5.4,
      magnesium: 60,
      zinc: 2,
      omega3: 0.3,
      fiber: 0.6,
    },
  },
  {
    id: "salmon",
    name: "Salmon",
    category: "proteins",
    servingSize: "100g",
    unit: "g",
    nutrients: {
      calories: 208,
      protein: 22,
      carbs: 0,
      fat: 13,
      vitaminA: 0.149,
      vitaminC: 0,
      vitaminD: 11,
      vitaminE: 3.55,
      calcium: 9,
      iron: 0.3,
      magnesium: 27,
      zinc: 0.4,
      omega3: 2.2,
      fiber: 0,
    },
  },
  {
    id: "eggs",
    name: "Eggs",
    category: "proteins",
    servingSize: "1 large",
    unit: "portion",
    nutrients: {
      calories: 70,
      protein: 6,
      carbs: 0.6,
      fat: 5,
      vitaminA: 0.08,
      vitaminC: 0,
      vitaminD: 1,
      vitaminE: 0.5,
      calcium: 28,
      iron: 0.9,
      magnesium: 6,
      zinc: 0.6,
      omega3: 0.04,
      fiber: 0,
    },
  },

  // Vegetables
  {
    id: "spinach",
    name: "Spinach",
    category: "vegetables",
    servingSize: "1 cup",
    unit: "cup",
    density: 0.94,
    nutrients: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      vitaminA: 9.377,
      vitaminC: 28.1,
      vitaminD: 0,
      vitaminE: 2,
      calcium: 99,
      iron: 2.7,
      magnesium: 79,
      zinc: 0.5,
      omega3: 0.138,
      fiber: 2.2,
    },
  },
  {
    id: "sweet_potato",
    name: "Sweet Potato",
    category: "vegetables",
    servingSize: "1 cup",
    unit: "cup",
    density: 1.06,
    nutrients: {
      calories: 180,
      protein: 4,
      carbs: 41.4,
      fat: 0.3,
      vitaminA: 14.187,
      vitaminC: 2.4,
      vitaminD: 0,
      vitaminE: 0.26,
      calcium: 76,
      iron: 1.4,
      magnesium: 54,
      zinc: 0.6,
      omega3: 0,
      fiber: 6.6,
    },
  },
  {
    id: "broccoli",
    name: "Broccoli",
    category: "vegetables",
    servingSize: "1 cup",
    unit: "cup",
    density: 0.91,
    nutrients: {
      calories: 55,
      protein: 3.7,
      carbs: 11.2,
      fat: 0.6,
      vitaminA: 0.567,
      vitaminC: 81.2,
      vitaminD: 0,
      vitaminE: 1.3,
      calcium: 42,
      iron: 0.7,
      magnesium: 19,
      zinc: 0.4,
      omega3: 0.1,
      fiber: 5.1,
    },
  },

  // Grains
  {
    id: "quinoa",
    name: "Quinoa",
    category: "grains",
    servingSize: "1 cup cooked",
    unit: "cup",
    density: 0.97,
    nutrients: {
      calories: 222,
      protein: 8.1,
      carbs: 39.4,
      fat: 3.6,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.63,
      calcium: 31,
      iron: 2.8,
      magnesium: 118,
      zinc: 2,
      omega3: 0.1,
      fiber: 5.2,
    },
  },
  {
    id: "oats",
    name: "Rolled Oats",
    category: "grains",
    servingSize: "1 cup",
    unit: "cup",
    density: 0.85,
    nutrients: {
      calories: 307,
      protein: 10.7,
      carbs: 54.8,
      fat: 5.3,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.4,
      calcium: 54,
      iron: 4.7,
      magnesium: 177,
      zinc: 3.2,
      omega3: 0.1,
      fiber: 8.2,
    },
  },
  {
    id: "brown_rice",
    name: "Brown Rice",
    category: "grains",
    servingSize: "1 cup cooked",
    unit: "cup",
    density: 0.96,
    nutrients: {
      calories: 218,
      protein: 5,
      carbs: 45,
      fat: 1.6,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.2,
      calcium: 20,
      iron: 0.8,
      magnesium: 83,
      zinc: 1.2,
      omega3: 0.1,
      fiber: 3.5,
    },
  },
  {
    id: "sticky_rice",
    name: "Sticky Rice",
    category: "grains",
    servingSize: "1 cup cooked",
    unit: "cup",
    density: 0.96,
    nutrients: {
      calories: 169,
      protein: 3.5,
      carbs: 36.7,
      fat: 0.3,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.1,
      calcium: 10,
      iron: 0.4,
      magnesium: 16,
      zinc: 0.2,
      omega3: 0.1,
      fiber: 0.6,
    },
  },

  // Fruits
  {
    id: "blueberries",
    name: "Blueberries",
    category: "fruits",
    servingSize: "1 cup",
    unit: "cup",
    density: 0.96,
    nutrients: {
      calories: 85,
      protein: 1.1,
      carbs: 21.5,
      fat: 0.5,
      vitaminA: 0.054,
      vitaminC: 14.4,
      vitaminD: 0,
      vitaminE: 0.84,
      calcium: 9,
      iron: 0.4,
      magnesium: 9,
      zinc: 0.2,
      omega3: 0.09,
      fiber: 3.6,
    },
  },
  {
    id: "banana",
    name: "Banana",
    category: "fruits",
    servingSize: "1 medium",
    unit: "portion",
    nutrients: {
      calories: 105,
      protein: 1.3,
      carbs: 27,
      fat: 0.4,
      vitaminA: 0.0,
      vitaminC: 10.3,
      vitaminD: 0,
      vitaminE: 0.1,
      calcium: 6,
      iron: 0.3,
      magnesium: 32,
      zinc: 0.2,
      omega3: 0.1,
      fiber: 3.1,
    },
  },
  {
    id: "apple",
    name: "Apple",
    category: "fruits",
    servingSize: "1 medium",
    unit: "portion",
    nutrients: {
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      vitaminA: 0.0,
      vitaminC: 8.4,
      vitaminD: 0,
      vitaminE: 0.2,
      calcium: 11,
      iron: 0.2,
      magnesium: 9,
      zinc: 0.1,
      omega3: 0.0,
      fiber: 4.4,
    },
  },

  // Nuts & Seeds
  {
    id: "almonds",
    name: "Almonds",
    category: "nuts_seeds",
    servingSize: "1/4 cup",
    unit: "cup",
    density: 0.88,
    nutrients: {
      calories: 207,
      protein: 7.6,
      carbs: 7.7,
      fat: 17.8,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 8.97,
      calcium: 96,
      iron: 1.3,
      magnesium: 96,
      zinc: 1.1,
      omega3: 0,
      fiber: 4.5,
    },
  },
  {
    id: "chia_seeds",
    name: "Chia Seeds",
    category: "nuts_seeds",
    servingSize: "1 tbsp",
    unit: "tbsp",
    density: 0.92,
    nutrients: {
      calories: 68,
      protein: 2.3,
      carbs: 5.8,
      fat: 4.4,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.1,
      calcium: 89,
      iron: 1.3,
      magnesium: 47,
      zinc: 0.6,
      omega3: 2.4,
      fiber: 4.1,
    },
  },
  {
    id: "walnuts",
    name: "Walnuts",
    category: "nuts_seeds",
    servingSize: "1 oz",
    unit: "portion",
    nutrients: {
      calories: 185,
      protein: 4.3,
      carbs: 3.9,
      fat: 18.5,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.2,
      calcium: 28,
      iron: 0.8,
      magnesium: 44,
      zinc: 0.9,
      omega3: 2.6,
      fiber: 1.9,
    },
  },

  // Legumes
  {
    id: "lentils",
    name: "Lentils (cooked)",
    category: "legumes",
    servingSize: "1 cup",
    unit: "cup",
    density: 0.96,
    nutrients: {
      calories: 230,
      protein: 17.9,
      carbs: 39.9,
      fat: 0.8,
      vitaminA: 0.008,
      vitaminC: 2.1,
      vitaminD: 0,
      vitaminE: 0.11,
      calcium: 38,
      iron: 6.6,
      magnesium: 71,
      zinc: 2.5,
      omega3: 0.07,
      fiber: 15.6,
    },
  },
  {
    id: "chickpeas",
    name: "Chickpeas (cooked)",
    category: "legumes",
    servingSize: "1 cup",
    unit: "cup",
    density: 0.95,
    nutrients: {
      calories: 269,
      protein: 14.5,
      carbs: 45,
      fat: 4.2,
      vitaminA: 0.009,
      vitaminC: 2.5,
      vitaminD: 0,
      vitaminE: 0.6,
      calcium: 80,
      iron: 4.7,
      magnesium: 78,
      zinc: 2.5,
      omega3: 0.15,
      fiber: 12.5,
    },
  },

  // Dairy
  {
    id: "greek_yogurt",
    name: "Greek Yogurt (plain)",
    category: "dairy",
    servingSize: "1 cup",
    unit: "cup",
    density: 1.03,
    nutrients: {
      calories: 130,
      protein: 13,
      carbs: 9,
      fat: 0.7,
      vitaminA: 0.149,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.1,
      calcium: 187,
      iron: 0.1,
      magnesium: 19,
      zinc: 0.9,
      omega3: 0.02,
      fiber: 0,
    },
  },
  {
    id: "cheddar_cheese",
    name: "Cheddar Cheese",
    category: "dairy",
    servingSize: "1 oz",
    unit: "portion",
    nutrients: {
      calories: 113,
      protein: 7,
      carbs: 0.4,
      fat: 9,
      vitaminA: 0.284,
      vitaminC: 0,
      vitaminD: 0.4,
      vitaminE: 0.2,
      calcium: 204,
      iron: 0.1,
      magnesium: 20,
      zinc: 0.4,
      omega3: 0.02,
      fiber: 0,
    },
  },
  {
    id: "milk",
    name: "Milk",
    category: "dairy",
    servingSize: "1 cup",
    unit: "cup",
    density: 1.03,
    nutrients: {
      calories: 103,
      protein: 8,
      carbs: 12,
      fat: 2.4,
      vitaminA: 0.105,
      vitaminC: 0,
      vitaminD: 2.9,
      vitaminE: 0.1,
      calcium: 276,
      iron: 0.1,
      magnesium: 24,
      zinc: 0.4,
      omega3: 0.05,
      fiber: 0,
    },
  },
  {
    id: "keifer",
    name: "Keifer",
    category: "dairy",
    servingSize: "1 cup",
    unit: "cup",
    density: 1.03,
    nutrients: {
      calories: 140,
      protein: 11,
      carbs: 20,
      fat: 3.5,
      vitaminA: 0.105,
      vitaminC: 0,
      vitaminD: 2.9,
      vitaminE: 0.1,
      calcium: 276,
      iron: 0.1,
      magnesium: 24,
      zinc: 0.4,
      omega3: 0.05,
      fiber: 0,
    },
  },

  // Meats
  {
    id: "organic_chicken_breast",
    name: "Organic Chicken Breast",
    category: "meat",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      vitaminA: 5,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.27,
      calcium: 15,
      iron: 1,
      magnesium: 29,
      zinc: 1,
      omega3: 0.05,
      fiber: 0,
    },
  },
  {
    id: "organic_chicken_thighs",
    name: "Organic Chicken Thighs",
    category: "meat",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 209,
      protein: 26,
      carbs: 0,
      fat: 10.9,
      vitaminA: 46,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.21,
      calcium: 12,
      iron: 0.9,
      magnesium: 20,
      zinc: 2,
      omega3: 0.11,
      fiber: 0,
    },
  },
  {
    id: "prime_rib_eye_steak",
    name: "Prime Rib Eye Steak",
    category: "meat",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 291,
      protein: 24.8,
      carbs: 0,
      fat: 21,
      vitaminA: 3,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.45,
      calcium: 18,
      iron: 2.6,
      magnesium: 21,
      zinc: 4.1,
      omega3: 0.05,
      fiber: 0,
    },
  },

  // Seafood
  {
    id: "wild_caught_salmon",
    name: "Wild Caught Salmon",
    category: "seafood",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      vitaminA: 50,
      vitaminC: 0,
      vitaminD: 9,
      vitaminE: 2.73,
      calcium: 9,
      iron: 0.34,
      magnesium: 26,
      zinc: 0.64,
      omega3: 2.5,
      fiber: 0,
    },
  },

  // Supplements
  {
    id: "whey_protein",
    name: "Whey Protein",
    category: "supplement",
    servingSize: "30g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 120,
      protein: 24,
      carbs: 3,
      fat: 1.5,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0,
      calcium: 150,
      iron: 0.36,
      magnesium: 20,
      zinc: 0.5,
      omega3: 0,
      fiber: 1,
    },
  },

  // Sweeteners
  {
    id: "honey",
    name: "Honey",
    category: "sweeteners",
    servingSize: "1 tbsp",
    unit: "tbsp",
    density: 21, // average weight of 1 tbsp honey in grams
    nutrients: {
      calories: 64,
      protein: 0.1,
      carbs: 17.3,
      fat: 0,
      vitaminA: 0,
      vitaminC: 0.1,
      vitaminD: 0,
      vitaminE: 0,
      calcium: 1,
      iron: 0.09,
      magnesium: 0.4,
      zinc: 0.04,
      omega3: 0,
      fiber: 0,
    },
  },

  // Oils
  {
    id: "olive_oil",
    name: "Olive Oil",
    category: "oil",
    servingSize: "1 tbsp",
    unit: "tbsp",
    density: 14, // average weight of 1 tbsp olive oil in grams
    nutrients: {
      calories: 119,
      protein: 0,
      carbs: 0,
      fat: 13.5,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 1.94,
      calcium: 0,
      iron: 0,
      magnesium: 0,
      zinc: 0,
      omega3: 0.1,
      fiber: 0,
    },
  },
  {
    id: "avocado_oil",
    name: "Avocado Oil",
    category: "oil",
    servingSize: "1 tbsp",
    unit: "tbsp",
    density: 14, // average weight of 1 tbsp avocado oil in grams
    nutrients: {
      calories: 124,
      protein: 0,
      carbs: 0,
      fat: 14,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 1.6,
      calcium: 0,
      iron: 0,
      magnesium: 0,
      zinc: 0,
      omega3: 0,
      fiber: 0,
    },
  },
  {
    id: "ghee",
    name: "Ghee",
    category: "oil",
    servingSize: "1 tbsp",
    unit: "tbsp",
    density: 13, // average weight of 1 tbsp ghee in grams
    nutrients: {
      calories: 112,
      protein: 0,
      carbs: 0,
      fat: 12.7,
      vitaminA: 391,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.36,
      calcium: 0,
      iron: 0,
      magnesium: 0,
      zinc: 0,
      omega3: 0.47,
      fiber: 0,
    },
  },

  // Condiments
  {
    id: "balsamic_vinegar",
    name: "Balsamic Vinegar",
    category: "condiments",
    servingSize: "1 tbsp",
    unit: "tbsp",
    density: 16, // average weight of 1 tbsp balsamic vinegar in grams
    nutrients: {
      calories: 14,
      protein: 0.1,
      carbs: 2.7,
      fat: 0,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0,
      calcium: 4,
      iron: 0.1,
      magnesium: 2,
      zinc: 0,
      omega3: 0,
      fiber: 0,
    },
  },

  // Additional Dairy
  {
    id: "organic_brown_eggs",
    name: "Organic Brown Eggs",
    category: "dairy",
    servingSize: "1 large egg",
    unit: "egg",
    density: 50, // average weight of a large egg in grams
    nutrients: {
      calories: 72,
      protein: 6.3,
      carbs: 0.4,
      fat: 4.8,
      vitaminA: 270,
      vitaminC: 0,
      vitaminD: 1.1,
      vitaminE: 0.5,
      calcium: 28,
      iron: 0.9,
      magnesium: 6,
      zinc: 0.6,
      omega3: 0.037,
      fiber: 0,
    },
  },
  {
    id: "cheese",
    name: "Cheese",
    category: "dairy",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 402,
      protein: 25,
      carbs: 1.3,
      fat: 33,
      vitaminA: 1002,
      vitaminC: 0,
      vitaminD: 0.6,
      vitaminE: 0.5,
      calcium: 721,
      iron: 0.7,
      magnesium: 28,
      zinc: 3.5,
      omega3: 0.75,
      fiber: 0,
    },
  },
  {
    id: "cottage_cheese",
    name: "Cottage Cheese",
    category: "dairy",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 98,
      protein: 11,
      carbs: 3.4,
      fat: 4.3,
      vitaminA: 37,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0.08,
      calcium: 83,
      iron: 0.07,
      magnesium: 8,
      zinc: 0.4,
      omega3: 0.07,
      fiber: 0,
    },
  },

  // Additional Fruits and Vegetables
  {
    id: "avocado",
    name: "Avocado",
    category: "fruits",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fat: 14.7,
      vitaminA: 7,
      vitaminC: 10,
      vitaminD: 0,
      vitaminE: 2.07,
      calcium: 12,
      iron: 0.55,
      magnesium: 29,
      zinc: 0.64,
      omega3: 0.11,
      fiber: 6.7,
    },
  },
  {
    id: "sweet_potatoes",
    name: "Sweet Potatoes",
    category: "vegetables",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 86,
      protein: 1.6,
      carbs: 20.1,
      fat: 0.1,
      vitaminA: 14187,
      vitaminC: 2.4,
      vitaminD: 0,
      vitaminE: 0.26,
      calcium: 30,
      iron: 0.61,
      magnesium: 25,
      zinc: 0.3,
      omega3: 0,
      fiber: 3,
    },
  },
  {
    id: "squash",
    name: "Squash",
    category: "vegetables",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 26,
      protein: 1,
      carbs: 6.5,
      fat: 0.2,
      vitaminA: 11155,
      vitaminC: 15.1,
      vitaminD: 0,
      vitaminE: 1.29,
      calcium: 21,
      iron: 0.8,
      magnesium: 12,
      zinc: 0.2,
      omega3: 0.01,
      fiber: 0.5,
    },
  },
  {
    id: "mixed_greens",
    name: "Mixed Greens",
    category: "vegetables",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      vitaminA: 9377,
      vitaminC: 28.1,
      vitaminD: 0,
      vitaminE: 2.03,
      calcium: 99,
      iron: 2.7,
      magnesium: 79,
      zinc: 0.53,
      omega3: 0.14,
      fiber: 2.2,
    },
  },
  {
    id: "cucumbers",
    name: "Cucumbers",
    category: "vegetables",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 15,
      protein: 0.7,
      carbs: 3.6,
      fat: 0.1,
      vitaminA: 105,
      vitaminC: 2.8,
      vitaminD: 0,
      vitaminE: 0.03,
      calcium: 16,
      iron: 0.28,
      magnesium: 13,
      zinc: 0.2,
      omega3: 0,
      fiber: 0.5,
    },
  },
  {
    id: "bell_peppers",
    name: "Bell Peppers",
    category: "vegetables",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 31,
      protein: 1,
      carbs: 6,
      fat: 0.3,
      vitaminA: 157,
      vitaminC: 127.7,
      vitaminD: 0,
      vitaminE: 1.58,
      calcium: 7,
      iron: 0.43,
      magnesium: 12,
      zinc: 0.25,
      omega3: 0.07,
      fiber: 2.1,
    },
  },
  {
    id: "sweet_onions",
    name: "Sweet Onions",
    category: "vegetables",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 32,
      protein: 0.9,
      carbs: 7.6,
      fat: 0.1,
      vitaminA: 2,
      vitaminC: 7.4,
      vitaminD: 0,
      vitaminE: 0.02,
      calcium: 23,
      iron: 0.21,
      magnesium: 10,
      zinc: 0.17,
      omega3: 0.01,
      fiber: 0.9,
    },
  },
  {
    id: "garlic",
    name: "Garlic",
    category: "vegetables",
    servingSize: "1 clove",
    unit: "clove",
    density: 3, // average weight of one clove in grams
    nutrients: {
      calories: 4,
      protein: 0.2,
      carbs: 1,
      fat: 0,
      vitaminA: 0,
      vitaminC: 0.9,
      vitaminD: 0,
      vitaminE: 0.02,
      calcium: 5,
      iron: 0.05,
      magnesium: 1,
      zinc: 0.04,
      omega3: 0,
      fiber: 0.1,
    },
  },

  // Additional Fruits
  {
    id: "bananas",
    name: "Bananas",
    category: "fruits",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fat: 0.3,
      vitaminA: 64,
      vitaminC: 8.7,
      vitaminD: 0,
      vitaminE: 0.1,
      calcium: 5,
      iron: 0.26,
      magnesium: 27,
      zinc: 0.15,
      omega3: 0.03,
      fiber: 2.6,
    },
  },
  {
    id: "apples",
    name: "Apples",
    category: "fruits",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 52,
      protein: 0.3,
      carbs: 13.8,
      fat: 0.2,
      vitaminA: 54,
      vitaminC: 4.6,
      vitaminD: 0,
      vitaminE: 0.18,
      calcium: 6,
      iron: 0.12,
      magnesium: 5,
      zinc: 0.04,
      omega3: 0.01,
      fiber: 2.4,
    },
  },
  {
    id: "oranges",
    name: "Oranges",
    category: "fruits",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 43,
      protein: 1,
      carbs: 8.3,
      fat: 0.2,
      vitaminA: 225,
      vitaminC: 53.2,
      vitaminD: 0,
      vitaminE: 0.18,
      calcium: 40,
      iron: 0.1,
      magnesium: 10,
      zinc: 0.07,
      omega3: 0,
      fiber: 2.2,
    },
  },
  {
    id: "persimmons",
    name: "Persimmons",
    category: "fruits",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 70,
      protein: 0.6,
      carbs: 18.6,
      fat: 0.2,
      vitaminA: 81,
      vitaminC: 7.5,
      vitaminD: 0,
      vitaminE: 0.73,
      calcium: 8,
      iron: 0.15,
      magnesium: 9,
      zinc: 0.11,
      omega3: 0,
      fiber: 3.6,
    },
  },

  // Additional Nuts
  {
    id: "mixed_nuts",
    name: "Mixed Nuts",
    category: "nuts_seeds",
    servingSize: "100g",
    unit: "g",
    density: 1.0,
    nutrients: {
      calories: 607,
      protein: 20,
      carbs: 21,
      fat: 54,
      vitaminA: 3,
      vitaminC: 0.7,
      vitaminD: 0,
      vitaminE: 9,
      calcium: 203,
      iron: 3.8,
      magnesium: 223,
      zinc: 3.3,
      omega3: 2.3,
      fiber: 7,
    },
  },
  {
    id: "peanut_butter",
    name: "Peanut Butter",
    category: "nuts_seeds",
    servingSize: "2 tbsp",
    unit: "tbsp",
    density: 32, // average weight of 2 tbsp peanut butter in grams
    nutrients: {
      calories: 188,
      protein: 7.7,
      carbs: 6.9,
      fat: 16,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 2.9,
      calcium: 17,
      iron: 0.6,
      magnesium: 49,
      zinc: 0.9,
      omega3: 0,
      fiber: 2,
    },
  },
];
