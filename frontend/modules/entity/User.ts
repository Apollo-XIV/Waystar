import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { Book, Entry, Log } from "../entity";


export interface User {

    id: number

    handle: string

    name: string

    email: string

    roles: string[]

    logs: Log[]

}
