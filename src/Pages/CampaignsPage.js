import React from "react";
import { Route, Routes } from "react-router-dom";
import CampaignsHomePage from "./CampaignsHomePage";
import { CampaignsNewPage } from "./CampaignsNewPage";
function CampaignsPage() {
  return (
    <div className="m-8">
      <Routes>
        <Route index path="" element={<CampaignsHomePage />} />
        <Route path="new" element={<CampaignsNewPage />} />
      </Routes>
    </div>
  );
}

export default CampaignsPage;
