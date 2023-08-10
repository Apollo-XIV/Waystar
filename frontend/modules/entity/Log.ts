import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Book, Entry, User } from "@/modules/entities";
import { createHash } from "crypto";

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

    @ManyToOne(() => Book, {
        cascade: true
    })
    book: Book

    @OneToMany(() => Entry, (entry: Entry) => entry.log)
    entries: Entry[]

    @Column()
    gid: string

}

export function generateBID(title: string, authors: string[]) {
    const authorString: string = authors.join()
    let prehash = title + authorString;
    const hash = createHash('sha256')
                    .update(prehash)
                    .digest('hex')
    return hash;
}

