import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Entry, Log, User } from "./";


@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    bid: number

    @Column()
    title: string

    @Column()
    authors: string[]

    @OneToMany(() => Log, (log) => log.book)
    logs: Log[]
}


/**
 * ==== BOOK ENTITY ====
 * The Book Entity is a representation of a book, 
 * regardless of edition.
 * 
 * The key to the Book entity is its ID, a value
 * formed by hashing the Author's Name and Book Title together
 * and applying any trimming operations to make this process
 * smoother.
 * 
 * The Object itself is to primarily serve as a reference for logs and posts 
 * 
 */