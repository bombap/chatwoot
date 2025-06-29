import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Audits extends BaseModel {
  public static table = 'audits';

  @column({ isPrimary: true })
  public id: number
}
