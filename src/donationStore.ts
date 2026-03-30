import { create } from "zustand";
import { persist } from "zustand/middleware";

type FormData = {
    email: string;
    amount: number;
} 

const InitialState: FormData = {
    email: "",
    amount: 0,
}

type FormStore = {
    formData: FormData,
    setFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void,
}

export const useFormData = create<FormStore>()(
    persist(
        (set) => ({
            formData: {
                ...InitialState,
            },
            setFormData: (field, value) => {
                set((state) => ({
                    formData: {
                        ...state.formData,
                        [field]: value
                    }
                }))
            }
        }),
        {
            name: "payment-store"
        }
    )
)      
  
