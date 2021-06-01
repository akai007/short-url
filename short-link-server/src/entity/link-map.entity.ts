import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 64, default: '', comment: '短链url' })
  @Length(4, 64)
  shortUrl: string;

  @Column({ length: 2048, default: '', comment: '原始url' })
  @Length(4, 2048)
  rawUrl: string;

  @Column({ length: 1, default: 1, comment: 'URL状态,1:正常,2:已失效' })
  urlStatus: number;

  @Column({ length: 256, default: '', comment: '描述' })
  @Length(0, 256)
  desc: string;
}
