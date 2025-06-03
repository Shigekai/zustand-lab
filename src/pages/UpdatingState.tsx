import { create } from "zustand";
import style from "./updatingstate.module.scss";

type State = {
    firstName: string;
    lastName: string;
};

type Action = {
    updateFirstName: (firstName: State["firstName"]) => void;
    updateLastName: (lastName: State["lastName"]) => void;
};

const usePersonStore = create<State & Action>((set) => ({
    firstName: "",
    lastName: "",
    updateFirstName: (firstName) => set(() => ({ firstName })),
    updateLastName: (lastName) => set(() => ({ lastName })),
}));

export const UpdatingState = () => {
    const firstName = usePersonStore((state) => state.firstName);
    const lastName = usePersonStore((state) => state.lastName);

    const updateFirstName = usePersonStore((state) => state.updateFirstName);
    const updateLastName = usePersonStore((state) => state.updateLastName);

    return (
        <main className={style.main}>
            <label className={style.labelInput}>
                First Name
                <input onChange={(e) => updateFirstName(e.currentTarget.value)} value={firstName} />
            </label>
            <label className={style.labelInput}>
                Last Name
                <input onChange={(e) => updateLastName(e.currentTarget.value)} value={lastName} />
            </label>
            <div>
                <p>
                    Hello <strong>{firstName}</strong> <strong>{lastName}</strong>
                </p>
            </div>
        </main>
    );
};
