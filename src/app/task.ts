import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Client } from "./client";

export interface Task{
    id: number;
    description: string;
    body: string;
    urgent: boolean;
    created: string;
    updated: string;
    due: string;
    client: string;
}