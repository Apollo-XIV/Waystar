import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm"

import * as e from "@entities";


@Entity()
export class Entry {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => e.Log, (log) => log.entries, {
        cascade: true
    })
    log: e.Log

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    index: number // this measures how far through the book the entry is

    @Column()
    uploadDate: Date

    @ManyToMany(()=> e.User, (user) => user.likes)
    @JoinTable()
    likedBy: e.User[]

}

/**
 * ==== ENTRY ENTITY ====
 * The Entry Entity is a representation of an individual post
 * in a log.
 * 
 * Each Entry in a log has a index value that is used to measure
 * how far through the book the entry was when it was made.
 * 
 * The Object itself is to primarily serve as a reference for logs and posts 
 * 
 */