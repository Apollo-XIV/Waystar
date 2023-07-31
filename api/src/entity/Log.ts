import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Book, Entry, User } from "./";

@Entity()
export class Log {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    index: number

    @ManyToOne(() => User, (user) => user.logs, {
        cascade: true
    })
    user: User

    @ManyToOne(() => Book)
    book: Book

    @OneToMany(() => Entry, (entry) => entry.log)
    entries: Entry[]

}