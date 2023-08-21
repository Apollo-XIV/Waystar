import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

import { Book, Log, User } from "../entity";


export interface Entry {

    id: number

    log: Log

    title: string

    content: string

    index: number // this measures how far through the book the entry is

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