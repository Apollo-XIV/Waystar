import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import * as e from "@entities";
import { createHash } from "crypto";

@Entity()
export class Log {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    index: number

    @ManyToOne(() => e.User, (user) => user.logs, {
        cascade: true
    })
    user: e.User

    @ManyToOne(() => e.Book, {
        cascade: true
    })
    book: e.Book

    @OneToMany(() => e.Entry, (entry) => entry.log)
    entries: e.Entry[]

    @Column()
    gid: string;

    @ManyToMany(() => e.Category, (category) => category.logs)
    @JoinTable()
    categories: e.Category[]

    @Column()
    lastUpdated: Date;

}

export function generateBID(title: string, authors: string[]) {
    const authorString: string = authors.join()
    let prehash = title + authorString;
    const hash = createHash('sha256')
                    .update(prehash)
                    .digest('hex')
    return hash;
}

