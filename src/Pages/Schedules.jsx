import { useState } from "react";
import Calendar from "../Components/Calander";
import Layout from "../layout";
import EventTable from "../Components/EventTable";
import Loading from "../Components/Loading";
import Queries from "../Components/Queries";
const Schedules = () => {
  const events = [
    {
      date: "2024-10-19",
      type: "Hackathon",
      address: "https://maps.google.com/?q=Tech+Park,+Block+B",
      vehicleNeeded: 3,
      personnelNeeded: 10,
    },
    {
      date: "2024-10-21",
      type: "Team Meeting",
      address: "https://maps.google.com/?q=Room+101",
      vehicleNeeded: 2,
      personnelNeeded: 5,
    },
    {
      date: "2024-10-25",
      type: "Project Deadline",
      address: "https://maps.google.com/?q=Main+Office",
      vehicleNeeded: 1,
      personnelNeeded: 0,
    },
  ];

  const [selectedDate, setSelectedDate] = useState();
  return (
    <Layout>
      {!events ? (
        <Loading />
      ) : (
        <div className="w-[92%] mx-auto">
          <h1 className=" text-[40px] font-bold pt-10">Schedules</h1>
          <div className="w-full rounded-3xl py-10 flex justify-between items-center">
            <Calendar events={events} />
            <EventTable events={events} />
          </div>
          <Queries />
        </div>
      )}
    </Layout>
  );
};
export default Schedules;
