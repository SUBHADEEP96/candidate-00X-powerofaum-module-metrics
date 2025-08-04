export default function handler(req, res) {
  res.status(200).json({
    totalGrossRevenueCents: 123456789,
    totalCommissionCents: 23456789,
  });
}
