'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

type PricePoint = {
  date: string;
  price: number;
};

const PriceChart = ({ priceHistory }: { priceHistory: PricePoint[] }) => {
  const data = {
    labels: priceHistory.map((p) => p.date),
    datasets: [
      {
        label: 'Price Over Time',
        data: priceHistory.map((p) => p.price),
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index' as const, intersect: false },
    },
    scales: {
      y: { beginAtZero: false },
      x: { title: { display: true, text: 'Date' } },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
      <h3 className="text-2xl font-semibold text-secondary mb-4">Price History</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceChart;
