import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./authors"
import { Favourite } from "./Favourite"

@Entity('books')
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: 'title'})
    title!: string

    
    @Column({name: 'description'})
    description!: string

    
    @Column({name: 'author_id'})
    authorId!:number

    @ManyToMany(()=> Author, author => author.books)
    @JoinColumn({name:"author:id"})
    author!: Author


    @OneToMany(() => Favourite, favourite => favourite.book)
    book_favs!: Favourite[]

}