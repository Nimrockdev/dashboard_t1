import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const SolarProductionChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let newChartInstance = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      newChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((entry) =>
            new Date(entry.timestamp).toLocaleDateString()
          ), // Mostrar solo la fecha en formato de cadena
          datasets: [
            {
              label: "Producción Solar (kWh)",
              data: data.map((entry) => entry.production),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 7, // Limitar el número de etiquetas en el eje X para evitar el amontonamiento
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      });
    }

    return () => {
      // Limpia al desmontar el componente
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default SolarProductionChart;
