import { create } from "zustand";

interface TimerMode {
    id: string;
    name: string;
    phrases: string[];
    durationInSeconds: number;
}

interface TimerStore {
    timerMode: TimerMode;
    timeInSeconds: number;
    setTimerMode: (mode: TimerMode) => void;
}

export const TIMER_MODES: Record<string, TimerMode> = {
    foco: {
        id: "foco",
        name: "Foco",
        phrases: ["Foco", "Concentração", "Trabalho"],
        durationInSeconds: 30,
    },
    energia: {
        id: "energia",
        name: "Energia",
        phrases: ["Energia", "Concentração", "Trabalho"],
        durationInSeconds: 20,
    },
};

export const useTimerStore = create<TimerStore>()((set, get) => ({
    timerMode: TIMER_MODES.foco,
    timeInSeconds: TIMER_MODES.foco.durationInSeconds,
    setTimerMode: (mode) => set({ timerMode: mode, timeInSeconds: mode.durationInSeconds }),
}));
