
export interface Client{
    id?: number | undefined;
    name: string;
    description: string;
    scope: string;
    email: string;
    notes: string;
    created?: string;
    updated?: string;
}