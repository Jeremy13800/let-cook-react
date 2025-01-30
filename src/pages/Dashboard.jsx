import React from "react";
import recettesData from "../assets/recettes.json";
import Header from "../components/Header";
import HeroDashboard from "../components/HeroDashboard";
import Section from "../components/Section";
import Footer from "../components/Footer";
import DashboardContent from "../components/DashboardContent";
const Dashboard = ({ recettes, setRecettes }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900">
      <Header />
      <HeroDashboard />
      <div className="bg-gradient-to-b from-white via-white/80 to-[#D1CFCF] min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <DashboardContent recettes={recettes} setRecettes={setRecettes} />
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
