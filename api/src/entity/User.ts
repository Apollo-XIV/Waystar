import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { Book, Entry, Log } from "@entities";


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

    @OneToMany(() => Log, (log) => log.user)
    logs: Log[]

    @Column()
    imgURL: string

    // @OneToMany((() => UserLikes))
    // likes: UserLikes[]

    // @Column()
    // followers: FollowedBy[]

    // @Column()
    // following: Follower[]

}
