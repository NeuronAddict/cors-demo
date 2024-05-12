export type CreateDTO<Type> = {
    [Property in keyof Type as Exclude<Property, "id">]: Type[Property];
};

export type FormDTO<Type> = {
    [Property in keyof CreateDTO<Type>]: Type[Property] | null;
}