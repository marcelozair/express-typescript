import { Column,CreateDateColumn,DeleteDateColumn,Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @CreateDateColumn()
  created_at: string;

  @DeleteDateColumn()
  deleted_at: string;
}