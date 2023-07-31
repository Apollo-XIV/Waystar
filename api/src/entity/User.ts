import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Book, Entry, Log } from "./";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    roles: string[]

    @OneToMany(() => Log, (log) => log.user)
    logs: Log[]

}
