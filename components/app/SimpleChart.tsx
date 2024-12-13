'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/SmallCharts';

const chartData = [
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: '#eba046',
  },
} satisfies ChartConfig;

export function SimpleChart() {
  return (
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[150px]" 
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={250}
          innerRadius={60} // Reduced inner radius
          outerRadius={80} // Reduced outer radius
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            polarRadius={[66, 54]} // Adjusted for smaller size
          />
          <RadialBar
            dataKey="visitors"
            background
            cornerRadius={8} // Reduced corner radius
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-brown text-3xl font-medium" // Smaller font size
                      >
                        {chartData[0].visitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 18} // Adjusted vertical position
                        className="fill-brown text-xs py-1" // Smaller font size
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
  );
}
