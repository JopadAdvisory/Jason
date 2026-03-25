import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressStore = {
    donors: number;
    raised: number;
    goal:  number;
    getPercentage: () => number;        
}

export const useProgressStore = create<ProgressStore>()(
    persist (
        (set, get) => ({
            donors: 94,
            raised: 4_120_000,
            goal: 20_000_000,
            getPercentage: () => {
                const { raised, goal } = get();
                if (goal === 0) return 0;
                return Math.ceil((raised / goal) * 100);
            }
        }),
        {
            name: "progress-storage",
        }
    )
);