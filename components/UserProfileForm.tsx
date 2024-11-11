"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  convertWeight,
  convertHeight,
  POUNDS_TO_KG,
  INCHES_TO_CM,
} from "@/lib/units";

const formSchema = z.object({
  age: z.number().min(1).max(120),
  gender: z.enum(["male", "female"]),
  weight: z.number().min(20).max(300),
  height: z.number().min(36).max(250),
  activityLevel: z.enum([
    "sedentary",
    "light",
    "moderate",
    "active",
    "very_active",
  ]),
  macroGoals: z.object({
    protein: z.number().min(0),
    carbs: z.number().min(0),
    fat: z.number().min(0),
  }),
});

type UserProfileFormProps = {
  profile: z.infer<typeof formSchema>;
  onProfileUpdate: (values: z.infer<typeof formSchema>) => void;
};

export default function UserProfileForm({
  profile,
  onProfileUpdate,
}: UserProfileFormProps) {
  const [useMetric, setUseMetric] = useState(true);
  const [displayWeight, setDisplayWeight] = useState(profile.weight);
  const [displayHeight, setDisplayHeight] = useState(profile.height);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...profile,
      macroGoals: profile.macroGoals || {
        protein: Math.round(profile.weight * 1.6), // Default to 1.6g per kg
        carbs: Math.round((profile.weight * 1.6 * 4 * 0.45) / 4), // 45% of calories from carbs
        fat: Math.round((profile.weight * 1.6 * 4 * 0.3) / 9), // 30% of calories from fat
      },
    },
  });

  const handleUnitChange = (checked: boolean) => {
    setUseMetric(checked);
    if (checked) {
      // Convert from imperial to metric
      setDisplayWeight(Number((displayWeight * POUNDS_TO_KG).toFixed(1)));
      setDisplayHeight(Number((displayHeight * INCHES_TO_CM).toFixed(1)));
    } else {
      // Convert from metric to imperial
      setDisplayWeight(Number((displayWeight / POUNDS_TO_KG).toFixed(1)));
      setDisplayHeight(Number((displayHeight / INCHES_TO_CM).toFixed(1)));
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedValues = {
      ...values,
      weight: useMetric ? values.weight : convertWeight(values.weight, "lbs"),
      height: useMetric ? values.height : convertHeight(values.height, "in"),
    };
    onProfileUpdate(updatedValues);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center justify-end space-x-4 mb-6 px-2">
          <span className="text-sm">Imperial</span>
          <Switch checked={useMetric} onCheckedChange={handleUnitChange} />
          <span className="text-sm">Metric</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight ({useMetric ? "kg" : "lbs"})</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.1"
                    value={displayWeight}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setDisplayWeight(value);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height ({useMetric ? "cm" : "in"})</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.1"
                    value={displayHeight}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setDisplayHeight(value);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="activityLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary</SelectItem>
                    <SelectItem value="light">Light Activity</SelectItem>
                    <SelectItem value="moderate">Moderate Activity</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="very_active">Very Active</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Macro Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="macroGoals.protein"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Protein Goal (g)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="macroGoals.carbs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Carbs Goal (g)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="macroGoals.fat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fat Goal (g)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Update Profile
        </Button>
      </form>
    </Form>
  );
}
