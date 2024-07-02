'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: '1',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '2',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '3',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '4',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '5',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '6',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '7',
    total: Math.floor(Math.random() * 5) + 1
  },
  {
    name: '8',
    total: Math.floor(Math.random() * 5) + 1
  }
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
