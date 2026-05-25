export function formatCurrency(value: number): string {
  if (value === 0) return "Not Available";
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatLPA(value: number): string {
  if (value === 0) return "N/A";
  if (value >= 10000000) {
    const cr = value / 10000000;
    return `₹${cr.toFixed(2)} Cr`;
  }
  const lpa = value / 100000;
  return `₹${lpa.toFixed(1)} LPA`;
}

export function formatRank(rank: number): string {
  if (rank <= 0) return "N/A";
  return new Intl.NumberFormat('en-IN').format(rank);
}
