import styles from "../styles/Cp.module.css";
import { LuTimerOff } from "react-icons/lu";

import {
  FaClipboardCheck,
  FaDollarSign,
  FaHome,
  FaRegClock,
  FaStar,
} from "react-icons/fa";
import { TbEyeCog, TbTriangleInvertedFilled } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { fetchStatsDashboard } from "../components/apiRoutes";
import { Chart } from "primereact/chart";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu } from "primereact/menu";
import Cookies from "js-cookie";
import user from "../images/icon_logo.png";

const Dashboard = () => {
  const { data: getStatsDashboard } = useQuery({
    queryKey: ["getStatsDashboard"],
    queryFn: fetchStatsDashboard,
  });

  const statsData = getStatsDashboard || {};
  const menuLeft = useRef(null);
  const realEstateData =
    statsData.byType?.map((item) => ({
      label: item.type.en,
      count: item.count,
    })) || [];

  const purposeData =
    statsData.byPrurpose?.map((item) => ({
      label: item.purpose.en,
      count: item.count,
    })) || [];

  const categoryData =
    statsData.byCategory?.map((item) => ({
      label: item.category.en,
      count: item.count,
    })) || [];
  const stats = useMemo(
    () => [
      {
        label: "Total Properties",
        count: getStatsDashboard?.totalProperties || 0,
        icon: <FaHome />,
      },
      {
        label: "Active Properties",
        count: getStatsDashboard?.totalActiveProperties || 0,
        icon: <FaClipboardCheck />,
      },
      {
        label: "Inactive Properties",
        count: getStatsDashboard?.totalInactiveProperties || 0,
        icon: <LuTimerOff />,
      },
      {
        label: "Total Value",
        count: getStatsDashboard?.totalValue || 0,
        icon: <FaDollarSign />,
      },
      {
        label: "Total Views",
        count: getStatsDashboard?.totalViews || 0,
        icon: <TbEyeCog />,
      },
      {
        label: "Total Ad Values",
        count: getStatsDashboard?.totalAdValues || 0,
        icon: <FaStar />,
      },
      {
        label: "Active Ad Values",
        count: getStatsDashboard?.totalActiveAdVAlues || 0,
        icon: <FaRegClock />,
      },
    ],
    [getStatsDashboard]
  );

  const generateChartConfig = (stats) => {
    return {
      data: {
        labels: stats.map((item) => item.label),
        datasets: [
          {
            label: "Statistics",
            data: stats.map((item) => item.count),
            backgroundColor: [
              "#D3D3D3FF", // White
              "#a0051c", // Dark Red
              "#040404", // Black
              "#765241", // Brown
              "#212745", // Dark Blue
              "#ffc700", // Yellow
              "#401460", // Purple
              "#ed4a59", // Pink
            ],
          },
        ],
      },
      options: {
        cutout: "0%",
        plugins: {
          tooltip: {
            callbacks: {
              label: ({ dataset, raw }) => {
                const total = dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((raw / total) * 100).toFixed(2);
                return `${raw}: ${percentage}%`;
              },
            },
          },
          legend: {
            labels: {
              font: {
                size: 16,
                weight: "bold",
              },
              boxWidth: 20,
              boxHeight: 20,
            },
            position: "right",
          },
        },
      },
    };
  };

  const chartConfig = useMemo(() => generateChartConfig(stats), [stats]);
  const Logout = () => {
    Cookies.remove("aqarToken");
    window.location.reload();
  };

  const items = [
    {
      label: "تسجيل الخروج",
      icon: "pi pi-sign-out",
      command: Logout,
    },
  ];

  return (
    <div className={styles.content_cp}>
      <div className="nav  mb-4">
        <div className="title ">
          <FaHome />
          <span>Dashboard</span>
        </div>
        <button
          className="user flex align-items-center gap-3"
          onClick={(event) => menuLeft.current.toggle(event)}
        >
          <span className="icon user_icon">
            <img alt="user" src={user} />
          </span>
          <TbTriangleInvertedFilled />
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
        </button>
      </div>

      {/* Real Estate Types */}
      <div className="grid">
        {stats.map((item, index) => (
          <div
            className={`col-12 md:col-3 lg:col-3 ${styles.cardDash}`}
            key={index}
          >
            <div className={styles.flex_details_card}>
              <div className={styles.icon}>{item.icon}</div>
              <p>{item.label}</p>
              <h3>{item.count}</h3>
            </div>
          </div>
        ))}

        <div className="col-12 md:col-4 lg:col-4">
          <div className={styles.real_estate_list}>
            <h3 className={styles.title}>Real Estate Types</h3>
            {realEstateData.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.label_icon}>
                  <span className={styles.label}>{item.label}</span>
                </div>
                <span className={styles.count}>{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose Data */}
        <div className="col-12 md:col-4 lg:col-4">
          <div className={styles.real_estate_list}>
            <h3 className={styles.title}>Purpose</h3>
            {purposeData.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.label_icon}>
                  <span className={styles.label}>{item.label}</span>
                </div>
                <span className={styles.count}>{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Data */}
        <div className="col-12 md:col-4 lg:col-4">
          <div className={styles.real_estate_list}>
            <h3 className={styles.title}>Categories</h3>
            {categoryData.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.label_icon}>
                  <span className={styles.label}>{item.label}</span>
                </div>
                <span className={styles.count}>{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Data */}
        <div className="col-12  ">
          <div className={styles.real_estate_list}>
            <h3 className={styles.title}>Statistics Overview</h3>
            <Chart
              type="doughnut"
              data={chartConfig.data}
              options={chartConfig.options}
              className="w-full"
            />
          </div>
        </div>
        {/*   */}
      </div>
    </div>
  );
};

export default Dashboard;
