const { Entity, Column, PrimaryGeneratedColumn, ManyToOne } = require('typeorm')
import { User } from './User'

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    genreId: number

    @ManyToOne(() => User, (user:any) => user.genres)
    user: User
}