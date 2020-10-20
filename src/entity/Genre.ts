import { ManyToOne } from 'typeorm'
import { User } from './User'


const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm')

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    genreId: number

    @Column()
    name: string

    @Column({ default: false })
    select: boolean = false

    @ManyToOne(() => User, user => user.genres)
    user: User

}