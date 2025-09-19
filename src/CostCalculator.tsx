import { useState } from "react";

type Props = {
  priceOfSingleVMPerHour: number;
};

export default function CostCalculator({ priceOfSingleVMPerHour }: Props) {
  const [vmNumber, setVmNumber] = useState<number>(1);

  const costPerHour = vmNumber * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;
  const costPerYear = costPerHour * 8760;

  return (
    <div>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmNumber}
        onChange={(e) => setVmNumber(Number(e.target.value) || 0)}
      />
      <div>
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
      </div>
    </div>
  );
}

