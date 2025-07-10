import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Generate a line that starts low and rises to the top
const generateData = () => {
  const points = 12; // fewer points for wider boxes
  const start = 10;
  const end = 95;
  const step = (end - start) / (points - 1);
  return Array.from(
    { length: points },
    (_, i) => Math.round(start + i * step + (Math.random() - 0.5) * 6) // add a little noise
  );
};

const MovingLineChart = () => {
  const [visiblePoints, setVisiblePoints] = useState(0);
  const chartRef = useRef();
  const containerRef = useRef();
  const data = generateData();

  // Scroll-based animation: as user scrolls, reveal more points
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      // Calculate how much of the chart is visible in the viewport
      const visible = Math.max(
        0,
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      );
      const percentVisible = Math.max(0, Math.min(1, visible / rect.height));
      // Reveal points based on scroll progress (from 0 to 1)
      setVisiblePoints(Math.ceil(percentVisible * data.length));
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [data.length]);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#fff",
        borderRadius: 24,
        padding: 24,
        maxWidth: 1250,
        height: 700,
        margin: "40px auto",
      }}
    >
      <Line
        ref={chartRef}
        data={{
          labels: data.map((_, i) => ""), // no x-axis values
          datasets: [
            {
              label: "",
              data: data.slice(0, visiblePoints),
              borderColor: "#6f10ff",
              backgroundColor: "rgba(111,16,255,0.08)",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              fill: false,
            },
          ],
        }}
        options={{
          animation: false,
          plugins: { legend: { display: false } },
          maintainAspectRatio: false,
          responsive: true,
          elements: {
            line: {
              borderJoinStyle: "round",
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                color: "rgba(0,0,0,0.07)", // more subtle for white background
                drawBorder: true,
                borderColor: "#e0e0e0",
                lineWidth: 0.7,
              },
              ticks: {
                display: false, // hide x-axis values
              },
              // Fewer grid lines for wider boxes
              min: 0,
              max: data.length - 1,
              stepSize: 1,
            },
            y: {
              display: true,
              min: 0,
              max: 100,
              grid: {
                color: "rgba(0,0,0,0.07)", // more subtle for white background
                drawBorder: true,
                borderColor: "#e0e0e0",
                lineWidth: 0.7,
              },
              ticks: {
                color: "#666",
                font: { size: 16 },
                padding: 8,
                stepSize: 20,
              },
            },
          },
        }}
        height={650}
      />
    </div>
  );
};

export default MovingLineChart;
