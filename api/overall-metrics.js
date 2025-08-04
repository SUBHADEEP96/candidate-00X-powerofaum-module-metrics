export default function handler(req, res) {
  res.status(200).json({
    totalUsers: 4521,
    totalSubscriptions: 1234,
    totalAddOnSales: 321,
    totalProTrials: 87,
  });
}
