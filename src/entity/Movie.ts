const { Entity, Column, PrimaryGeneratedColumn, ManyToOne } = require('typeorm')
import { User } from './User'

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    movieId: number

    @ManyToOne(() => User, (user:any) => user.movies)
    user: User
}