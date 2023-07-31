import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Book, Entry, Log } from "@entities";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column("text", {array: true})
    roles: string[]

    @OneToMany(() => Log, (log) => log.user)
    logs: Log[]

}
