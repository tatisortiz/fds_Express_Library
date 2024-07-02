import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number


    @Column ({name: 'name'})
    name!: string


    @Column ({name: 'email'})
    email!: string

    @Column ({name: 'password'})
    password!: string


    @Column ({name: 'is_active'})
    is_active!: boolean

    @Column ({name: 'role'})
    role!: string


    
    @Column ({name: 'created_at'})
    created_at!: Date

    @Column ({name: 'update_at'})
    update_at!: Date

}
