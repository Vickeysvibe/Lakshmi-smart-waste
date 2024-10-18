import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Layout from "../layout";
import RealTimeAnalysis from "../Components/RealTimeAnalysis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify-icon/react";

const Homepage = () => {
  // Example data
  const topLocations = [
    {
      Location: "Location A",
      "Weight (kg)": 50,
      "Fill Level (%)": 80,
      Latitude: 11.931,
      Longitude: 79.833,
    },
    {
      Location: "Location B",
      "Weight (kg)": 60,
      "Fill Level (%)": 70,
      Latitude: 11.935,
      Longitude: 79.837,
    },
    {
      Location: "Location C",
      "Weight (kg)": 30,
      "Fill Level (%)": 60,
      Latitude: 11.938,
      Longitude: 79.84,
    },
    {
      Location: "Location D",
      "Weight (kg)": 30,
      "Fill Level (%)": 60,
      Latitude: 11.938,
      Longitude: 79.84,
    },
    {
      Location: "Location E",
      "Weight (kg)": 30,
      "Fill Level (%)": 60,
      Latitude: 11.938,
      Longitude: 79.84,
    },
  ];

  const apiKey = "AIzaSyAZUGoqEFEKNUM30vpCm4Qs1pZkeacFVsA"; // Replace with your API key
  return (
    <Layout>
      <div className="flex h-full flex-col justify-evenly items-center ">
        <h1 className="text-[40px] text-left w-[90%] font-bold">Dashboard</h1>
        <div className=" min-w-[90%] h-auto grid grid-cols-4 gap-4">
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="fluent:bin-recycle-20-regular"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Bins"}</p>
                <h4 className="text-[30px] font-semibold">{"81"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="ph:truck-light"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Trucks"}</p>
                <h4 className="text-[30px] font-semibold">{"16"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="material-symbols:event-outline"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Events"}</p>
                <h4 className="text-[30px] font-semibold">{"3"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="lucide-lab:bowl-overflow"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Overflow"}</p>
                <h4 className="text-[30px] font-semibold">{"10"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="clarity:fuel-line"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Fuel"}</p>
                <h4 className="text-[30px] font-semibold">{"2324"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="lsicon:order-done-outline"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Garbage Collected"}</p>
                <h4 className="text-[30px] font-semibold">{"244"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="mage:money-exchange"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Costs"}</p>
                <h4 className="text-[30px] font-semibold">{"Rs. 5200"}</h4>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="p-6 flex items-center">
              <div className="w-28 h-28 flex items-center justify-center bg-green-700 text-white rounded-3xl shadow-lg">
                <Icon
                  icon="material-symbols-light:distance-outline-rounded"
                  width="40"
                  height="40"
                  style={{ color: "white" }}
                />
              </div>
              <div className="ml-10">
                <p className="text-gray-500 text-2xl">{"Distance"}</p>
                <h4 className="text-[30px] font-semibold">{"350 KM"}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* real time analysis components */}

        <RealTimeAnalysis apiKey={apiKey} topLocations={topLocations} />
      </div>
    </Layout>
  );
};
export default Homepage;
