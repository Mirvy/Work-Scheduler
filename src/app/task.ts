import { Client } from "./client";

export interface Task{
    id: number;
    description: string;
    body: string;
    urgent: Boolean;
    created: string;
    updated: string;
    due: string;
    client: Client;
}