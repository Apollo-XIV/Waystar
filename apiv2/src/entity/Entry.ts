import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Entry {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    index: number // this measures how far through the book the entry is

}
