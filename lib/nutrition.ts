// lib/nutrition.ts
import { foods } from "./foods";

export type UserProfile = {
  age: number;
  gender: "male" | "female";
  weight: number;
  height: number;
  activityLevel: "moderate" | "sedentary" | "light" | "active" | "very_active";
  macroGoals: {
    protein: number;
    carbs: number;
    fat: number;
  };
};

export type NutrientProgress = {
  name: string;
  current: number;
  target: number;
  percentage: number;
  unit: string;
  contributions: {
    foodId: string;
    foodName: string;
    amount: number;
    percentage: number;
  }[];
};

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export function calculateNutrientNeeds(profile: UserProfile) {
  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr;
  if (profile.gender === "male") {
    bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5;
  } else {
    bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;
  }

  // Calculate TDEE (Total Daily Energy Expenditure)
  const activityMultiplier =
    activityMultipliers[
      profile.activityLevel as keyof typeof activityMultipliers
    ];
  const tdee = bmr * activityMultiplier;

  // Calculate macro and micronutrient needs
  return {
    calories: tdee,
    protein: profile.weight * 1.6, // 1.6g per kg of body weight
    carbs: (tdee * 0.45) / 4, // 45% of calories from carbs
    fat: (tdee * 0.3) / 9, // 30% of calories from fat
    vitaminA: 0.9, // mg
    vitaminC: 90, // mg
    vitaminD: 15, // mcg
    vitaminE: 15, // mg
    calcium: 1000, // mg
    iron: profile.gender === "male" ? 8 : 18, // mg
    magnesium: profile.gender === "male" ? 420 : 320, // mg
    zinc: profile.gender === "male" ? 11 : 8, // mg
    omega3: 1.6, // g
    fiber: 25, // g
  };
}

export function calculateNutrientProgress(
  foodPortions: Record<string, number>,
  targetNutrients: Record<string, number>
): NutrientProgress[] {
  const nutrientContributions: Record<
    string,
    Array<{ foodId: string; foodName: string; amount: number }>
  > = {
    calories: [],
    protein: [],
    carbs: [],
    fat: [],
    vitaminA: [],
    vitaminC: [],
    vitaminD: [],
    vitaminE: [],
    calcium: [],
    iron: [],
    magnesium: [],
    zinc: [],
    omega3: [],
    fiber: [],
  };

  // Calculate contributions from each food
  Object.entries(foodPortions).forEach(([foodId, portion]) => {
    const food = foods.find((f) => f.id === foodId);
    if (food && portion > 0) {
      Object.entries(food.nutrients).forEach(([nutrient, value]) => {
        const amount = value * portion;
        if (nutrient in nutrientContributions) {
          nutrientContributions[nutrient].push({
            foodId,
            foodName: food.name,
            amount,
          });
        }
      });
    }
  });

  // Create progress array with contributions
  const createProgressEntry = (
    name: string,
    nutrientKey: string,
    target: number,
    unit: string
  ): NutrientProgress => {
    const contributions = nutrientContributions[nutrientKey]
      .filter((c) => c.amount > 0)
      .map((c) => ({
        ...c,
        percentage: (c.amount / target) * 100,
      }))
      .sort((a, b) => b.amount - a.amount);

    const current = contributions.reduce((sum, c) => sum + c.amount, 0);

    return {
      name,
      current,
      target,
      percentage: Math.min((current / target) * 100, 100),
      unit,
      contributions,
    };
  };

  return [
    createProgressEntry("Protein", "protein", targetNutrients.protein, "g"),
    createProgressEntry("Carbs", "carbs", targetNutrients.carbs, "g"),
    createProgressEntry("Fat", "fat", targetNutrients.fat, "g"),
    createProgressEntry(
      "Vitamin A",
      "vitaminA",
      targetNutrients.vitaminA,
      "mg"
    ),
    createProgressEntry(
      "Vitamin C",
      "vitaminC",
      targetNutrients.vitaminC,
      "mg"
    ),
    createProgressEntry(
      "Vitamin D",
      "vitaminD",
      targetNutrients.vitaminD,
      "mcg"
    ),
    createProgressEntry(
      "Vitamin E",
      "vitaminE",
      targetNutrients.vitaminE,
      "mg"
    ),
    createProgressEntry("Calcium", "calcium", targetNutrients.calcium, "mg"),
    createProgressEntry("Iron", "iron", targetNutrients.iron, "mg"),
    createProgressEntry(
      "Magnesium",
      "magnesium",
      targetNutrients.magnesium,
      "mg"
    ),
    createProgressEntry("Zinc", "zinc", targetNutrients.zinc, "mg"),
    createProgressEntry("Omega-3", "omega3", targetNutrients.omega3, "g"),
    createProgressEntry("Fiber", "fiber", targetNutrients.fiber, "g"),
  ];
}
