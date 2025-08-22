import { Timestamp } from "firebase/firestore";

type Memo = {
    id: string,
    bodyText: string,
    updatedAt: Timestamp,
}

export type { Memo }