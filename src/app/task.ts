import { Client } from "src/client";

export interface Task{
    id: number;
    description: string;
    body: string;
    client: Client;
}