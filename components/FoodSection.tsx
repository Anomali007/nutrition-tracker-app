"use client";

import { Food, FoodCategory } from "@/lib/foods";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { convertVolume, type VolumeUnit } from "@/lib/units";

type FoodSectionProps = {
  category: FoodCategory;
  title: string;
  foods: Food[];
  portions: Record<string, number>;
  onPortionChange: (foodId: string, value: number) => void;
};

export const categoryIcons: Record<FoodCategory, string> = {
  proteins: "🥩",
  grains: "🌾",
  vegetables: "🥬",
  fruits: "🍎",
  nuts_seeds: "🥜",
  legumes: "🫘",
  dairy: "🥛",
  meat: "🍖",
  seafood: "🐟",
  supplement: "💊",
  sweeteners: "🍯",
  oil: "🛢️",
  condiments: "🧂",
};

export default function FoodSection({
  category,
  title,
  foods,
  portions,
  onPortionChange,
}: FoodSectionProps) {
  const [selectedUnits, setSelectedUnits] = useState<
    Record<string, VolumeUnit>
  >(
    Object.fromEntries(foods.map((food) => [food.id, food.unit])) as Record<
      string,
      VolumeUnit
    >
  );

  const handleUnitChange = (foodId: string, unit: VolumeUnit) => {
    const food = foods.find((f) => f.id === foodId);
    if (!food) return;

    const currentValue = portions[foodId];
    const newValue = food.density
      ? convertVolume(currentValue, selectedUnits[foodId], unit, food.density)
      : currentValue;

    setSelectedUnits((prev) => ({ ...prev, [foodId]: unit }));
    onPortionChange(foodId, newValue);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <span>{categoryIcons[category]}</span>
        {title}
      </h3>
      <div className="space-y-6">
        {foods.map((food) => (
          <div key={food.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{food.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {food.servingSize} ({food.nutrients.calories} kcal)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {portions[food.id].toFixed(1)}
                </span>
                <Select
                  value={selectedUnits[food.id]}
                  onValueChange={(value) =>
                    handleUnitChange(food.id, value as VolumeUnit)
                  }
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {food.unit === "portion" ? (
                      <SelectItem value="portion">portions</SelectItem>
                    ) : (
                      <>
                        <SelectItem value="g">g</SelectItem>
                        <SelectItem value="cup">cup</SelectItem>
                        <SelectItem value="tbsp">tbsp</SelectItem>
                        <SelectItem value="tsp">tsp</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Slider
              value={[portions[food.id]]}
              onValueChange={(value) => onPortionChange(food.id, value[0])}
              max={food.unit === "portion" ? 10 : 500}
              step={food.unit === "portion" ? 1 : 10}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
