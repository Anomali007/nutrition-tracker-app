// components/NutritionTracker.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfileForm from "./UserProfileForm";
import FoodSection from "./FoodSection";
import {
  calculateNutrientNeeds,
  calculateNutrientProgress,
  UserProfile,
  type NutrientProgress,
} from "@/lib/nutrition";
import { FoodCategory, foods } from "@/lib/foods";
import { Utensils, Apple, PieChart } from "lucide-react";
import NutrientProgressBar from "./NutrientProgressBar";
import { ChevronUp } from "lucide-react";
import { categoryIcons } from "./FoodSection";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Button } from "./ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function NutritionTracker() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    age: 30,
    gender: "male",
    weight: 70,
    height: 170,
    activityLevel: "moderate",
    macroGoals: {
      protein: 112, // 1.6g per kg
      carbs: 315, // 45% of calories
      fat: 93, // 30% of calories
    },
  });

  const [foodPortions, setFoodPortions] = useState<Record<string, number>>(
    Object.fromEntries(foods.map((food) => [food.id, 0]))
  );

  const [nutrientProgress, setNutrientProgress] = useState<NutrientProgress[]>(
    []
  );
  const [macroTotals, setMacroTotals] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  useEffect(() => {
    const targetNutrients = calculateNutrientNeeds(userProfile);
    const progress = calculateNutrientProgress(foodPortions, targetNutrients);
    setNutrientProgress(progress);

    const totals = foods.reduce(
      (acc, food) => {
        const portion = foodPortions[food.id];
        return {
          calories: acc.calories + food.nutrients.calories * portion,
          protein: acc.protein + food.nutrients.protein * portion,
          carbs: acc.carbs + food.nutrients.carbs * portion,
          fat: acc.fat + food.nutrients.fat * portion,
        };
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );

    setMacroTotals(totals);
  }, [userProfile, foodPortions]);

  const handleFoodPortionChange = (foodId: string, value: number) => {
    setFoodPortions((prev) => ({
      ...prev,
      [foodId]: value,
    }));
  };

  const foodCategories: { id: FoodCategory; title: string }[] = [
    { id: "proteins", title: "Proteins" },
    { id: "grains", title: "Grains" },
    { id: "vegetables", title: "Vegetables" },
    { id: "fruits", title: "Fruits" },
    { id: "nuts_seeds", title: "Nuts & Seeds" },
    { id: "legumes", title: "Legumes" },
    { id: "dairy", title: "Dairy" },
    { id: "meat", title: "Meat" },
    { id: "seafood", title: "Seafood" },
    { id: "supplement", title: "Supplements" },
    { id: "sweeteners", title: "Sweeteners" },
    { id: "oil", title: "Oils" },
    { id: "condiments", title: "Condiments" },
  ];

  // Build the items for the FloatingDock component
  const dockItems = foodCategories.map(({ id, title }) => ({
    title,
    icon: <span className="text-xl">{categoryIcons[id]}</span>,
    href: `#section-${id}`,
  }));

  // Add scroll tracking for "Back to Top" button visibility
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest < 100) {
      setVisible(false);
    } else if (previous !== undefined && latest < previous) {
      // Scrolling up
      setVisible(true);
    } else {
      // Scrolling down
      setVisible(false);
    }
  });

  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="flex w-full mb-8">
        <TabsTrigger
          value="profile"
          className="flex-1 flex justify-center gap-2"
        >
          <PieChart className="h-4 w-4" />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger
          value="nutrients"
          className="flex-1 flex justify-center gap-2"
        >
          <Apple className="h-4 w-4" />
          <span>Nutrients</span>
        </TabsTrigger>
        <TabsTrigger value="foods" className="flex-1 flex justify-center gap-2">
          <Utensils className="h-4 w-4" />
          <span>Foods</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card className="p-6">
          <UserProfileForm
            profile={userProfile}
            onProfileUpdate={setUserProfile}
          />
        </Card>
      </TabsContent>

      <TabsContent value="nutrients">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Nutrient Progress</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Macronutrients</h3>
                <div className="space-y-4">
                  {nutrientProgress
                    .filter((n) => ["Protein", "Carbs", "Fat"].includes(n.name))
                    .map((nutrient) => (
                      <NutrientProgressBar
                        key={nutrient.name}
                        name={nutrient.name}
                        current={nutrient.current}
                        target={nutrient.target}
                        unit={nutrient.unit}
                        contributions={nutrient.contributions}
                      />
                    ))}
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Daily Totals</h3>
                <div className="space-y-2">
                  <p>Calories: {Math.round(macroTotals.calories)} kcal</p>
                  <p>Protein: {Math.round(macroTotals.protein)}g</p>
                  <p>Carbs: {Math.round(macroTotals.carbs)}g</p>
                  <p>Fat: {Math.round(macroTotals.fat)}g</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Micronutrients</h3>
              {nutrientProgress
                .filter((n) => !["Protein", "Carbs", "Fat"].includes(n.name))
                .map((nutrient) => (
                  <NutrientProgressBar
                    key={nutrient.name}
                    name={nutrient.name}
                    current={nutrient.current}
                    target={nutrient.target}
                    unit={nutrient.unit}
                    contributions={nutrient.contributions}
                  />
                ))}
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="foods">
        <Card className="p-6 relative">
          <h2 className="text-2xl font-semibold mb-6">Food Selection</h2>

          {/* Floating category menu using FloatingDock */}
          <FloatingDock
            items={dockItems}
            desktopClassName="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8 z-10"
            mobileClassName="fixed bottom-2 right-4"
          />

          {/* Animated Back to Top button */}
          <AnimatePresence>
            {visible && (
              <motion.button
                key="back-to-top"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.2 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-4 right-4 p-3 bg-white rounded-full shadow-lg"
              >
                <ChevronUp className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="space-y-8">
            {foodCategories.map(({ id, title }) => (
              <div key={id} id={`section-${id}`}>
                <FoodSection
                  category={id}
                  title={title}
                  foods={foods.filter((food) => food.category === id)}
                  portions={foodPortions}
                  onPortionChange={handleFoodPortionChange}
                />
              </div>
            ))}
          </div>
          {/* Fixed back to top button */}
          <CardFooter>
            <div className="flex flex-col bg-yellow-300 z-10 w-full py-8 gap-y-4">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative p-3 rounded-full shadow-lg w-full"
              >
                Back to top
              </Button>
              <p className="text-sm text-muted-foreground">
                * Nutrient values are based on 100g serving size
              </p>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
