import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../../common/enums/role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  phone!: string;

  @Column()
  idNumber!: string;

  @Column()
  university!: string;

  @Column()
  program!: string;

  @Column()
  academicLevel!: string;

  @Column()
  graduationYear!: number;

  @Column()
  constituency!: string;

  @Column()
  ward!: string;

  @Column({ type: 'enum', enum: Role, default: Role.VISITOR })
  role!: Role;

  @Column({ default: false })
  isEmailVerified!: boolean;

  @Column({ default: false })
  isApproved!: boolean;

  @Column({ nullable: true })
  approvedBy!: string;

  @Column({ nullable: true })
  residencyProofUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}