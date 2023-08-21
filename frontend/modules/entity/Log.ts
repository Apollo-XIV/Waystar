import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Book, Entry, User } from "../entity";
import { createHash } from "crypto";

export interface Log {

    id: number

    index: number

    user: User

    book: Book

    entries: Entry[]

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

