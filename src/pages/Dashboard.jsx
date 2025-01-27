import React from "react";
import recettes from "../assets/recettes.json";
import Header from "../components/Header";
import HeroDashboard from "../components/HeroDashboard";
import Section from "../components/Section";
import Footer from "../components/Footer";
import DashboardContent from "../components/DashboardContent";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <HeroDashboard />
      <div className="bg-gradient-to-b from-white via-white/80 to-[#D1CFCF] min-h-screen">
        <DashboardContent />
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
