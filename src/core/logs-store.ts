// https://vuejs.org/guide/scaling-up/state-management.html

import {reactive} from 'vue'
import type LogEntry from "@/core/log-entry";

export const logStore = reactive({

    logs: [] as Array<LogEntry>,

    addEntry(logEntry: LogEntry) {
        this.logs.push(logEntry);
    }

});