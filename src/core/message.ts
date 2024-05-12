export interface Message {
    author: string,
    message: string,
    dueDate: string
}

export type FormDTO<Type> = {
    [Property in keyof Type]: Type[Property] | null;
};