import type {Message} from "@/core/message";

export type LogEntryType = "delete" | "add" | "done" | "undone";

export default interface LogEntry {
    id: number,
    type: LogEntryType,
    message: Message,
    initiator: string
}
