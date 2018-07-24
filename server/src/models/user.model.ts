import { Column, Entity, OneToMany, OneToOne, SelectQueryBuilder } from 'typeorm';

import { BaseModel } from './base.model';
import { Character } from './character.model';
import { Settings } from './settings.model';

@Entity()
export class User extends BaseModel {

    public static doQuery(): SelectQueryBuilder<User> {
        return this.createQueryBuilder('user');
    }

    @Column({
        unique: true,
    })
    public username!: string;

    @Column({
        unique: true,
    })
    public passwordHash!: string;

    @Column({
        unique: true,
    })
    public email!: string;

    @Column({
        default: 0,
    })
    public timesLogin!: number;

    @OneToOne(() => Settings, (settings) => settings.user)
    public settings: Settings;

    @Column({
        default: () => 'CURRENT_TIMESTAMP',
    })
    public lastLogin!: Date;

    @OneToMany(() => Character, (character) => character.user)
    public characters!: Character[];

    constructor() {
        super();

        this.settings = new Settings();
    }
}