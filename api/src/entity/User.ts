import { Entity, PrimaryColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import * as e from "@entities";


@Entity()
export class User {

    @PrimaryColumn()
    id: string

    @Column()
    handle: string

    @Column()
    name: string

    @Column()
    email: string

    @Column("text", {array: true})
    roles: string[]

    @OneToMany(() => e.Log, (log) => log.user)
    logs: e.Log[]

    @Column()
    imgURL: string

    @ManyToMany(() => e.Entry, (entry) => entry.likedBy)
    likes: e.Entry[]

    @ManyToMany(() => e.User, (user) => user.followers)
    @JoinTable()
    following: e.User[]

    @ManyToMany(() => e.User, (user) => user.following)
    followers: e.User[]

}
