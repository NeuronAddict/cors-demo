// https://vuejs.org/guide/scaling-up/state-management.html

import type {Message} from "@/core/message";
import type {Provider} from "@/core/provider";
import type LogEntry from "@/core/log-entry";
import type {InjectionKey} from "vue";
import type {UnwrapNestedRefs} from "@vue/reactivity";

export class AddOnlyStore<T extends { id: number }> {

    set items(value: Array<T>) {
        this._items = value;
    }

    get items(): Array<T> {
        return this._items;
    }

    private _items: Array<T>;

    constructor() {
        this._items = [];
    }

    add(item: T) {
        this._items.push(item);
    }

}

export class Store<T extends { id: number }> extends AddOnlyStore<T> {

    modify(newItem: T) {
        this.items = this.items.map(value => value.id === newItem.id ? newItem : value);
    }

    delete(item: T) {
        this.items = this.items.filter(value => value.id !== item.id);
    }
}

export const messageStoreProvider: Provider<Store<Message>> = () => new Store<Message>();
export const messageStoreProviderKey: InjectionKey<UnwrapNestedRefs<Store<Message>>> = Symbol("messageStoreProvider");

export const logStoreProvider: Provider<Store<LogEntry>> = () => new Store<LogEntry>();
export const logStoreProviderKey: InjectionKey<UnwrapNestedRefs<Store<LogEntry>>> = Symbol("logStoreProvider");
