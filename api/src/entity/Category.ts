import { Entity, PrimaryColumn, Column, OneToMany, JoinTable, ManyToMany } from "typeorm"
import * as e from "@entities";


@Entity()
export class Category {

    @PrimaryColumn()
    id: string

    @Column()
    label: string

    @ManyToMany(() => e.Log, (log) => log.categories)
    logs: e.Log[]
}