import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Mock data for platform commission metrics
const platformCommissionMetrics = {
  totalGrossRevenueCents: 15000000,
  totalCommissionCents: 3000000,
};

// Mock data for overall metrics
const overallMetrics = {
  totalUsers: 1200,
  totalSubscriptions: 800,
  totalAddOnSales: 150,
  totalProTrials: 200,
};

// API Routes
app.get("/api/platform-commission-metrics", (req, res) => {
  res.json(platformCommissionMetrics);
});

app.get("/api/overall-metrics", (req, res) => {
  res.json(overallMetrics);
});

app.listen(PORT, () => {
  console.log(`PowerOfAum Admin Metrics Dashboard running on port ${PORT}`);
  console.log(`Dashboard: http://localhost:${PORT}`);
  console.log(`API Endpoints:`);
  console.log(`  - GET /api/platform-commission-metrics`);
  console.log(`  - GET /api/overall-metrics`);
});
