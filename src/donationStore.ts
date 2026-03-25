import { create } from "zustand";
import { persist } from "zustand/middleware";

type DonationStore = {
    amount: number;
    setAmount: () => void;
} 

const usePaymentStore = create<DonationStore>()(
    persist(
        (set) => ({
            amount: 0,
            setAmount: () => {
                set((state) => ({
               
                }))
            }
        }),
        {
            name: "payment-store"
        }
    )
)    
  
