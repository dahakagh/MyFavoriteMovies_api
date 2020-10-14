const { Entity, Column, PrimaryGeneratedColumn, OneToMany } = require('typeorm')
import { Genre } from './Genre'
import { Movie } from './Movie'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    login: string

    @Column()
    password: string

    @OneToMany(() => Genre, (genre:any) => genre.user)
    genres: Genre[]

    @OneToMany(() => Movie, (movie:any) => movie.user)
    movies: Movie[]
}