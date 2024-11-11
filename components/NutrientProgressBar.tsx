'use client';

import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export type NutrientContribution = {
  foodId: string;
  foodName: string;
  amount: number;
  percentage: number;
};

type NutrientProgressBarProps = {
  name: string;
  current: number;
  target: number;
  unit: string;
  contributions: NutrientContribution[];
};

const COLORS = [
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-red-500',
  'bg-orange-500',
];

export default function NutrientProgressBar({
  name,
  current,
  target,
  unit,
  contributions,
}: NutrientProgressBarProps) {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const totalPercentage = Math.min((current / target) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">
          {Math.round(current)}/{Math.round(target)} {unit}
        </span>
      </div>
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        {contributions.map((contribution, index) => {
          const prevWidth = contributions
            .slice(0, index)
            .reduce((acc, curr) => acc + curr.percentage, 0);

          return (
            <TooltipProvider key={contribution.foodId}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`absolute h-full ${COLORS[index % COLORS.length]} transition-opacity duration-200 ${
                      hoveredSegment === index ? 'opacity-100' : 'opacity-80'
                    }`}
                    style={{
                      left: `${prevWidth}%`,
                      width: `${contribution.percentage}%`,
                    }}
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-sm">
                    <p className="font-medium">{contribution.foodName}</p>
                    <p>
                      {Math.round(contribution.amount * 10) / 10} {unit} (
                      {Math.round(contribution.percentage)}%)
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}