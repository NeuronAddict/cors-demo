import type {Message} from "@/core/message";

export default interface LogEntry {
    id: number,
    type: "delete" | "add" | "done" | "undone",
    message: Message,
    initiator: string
}
