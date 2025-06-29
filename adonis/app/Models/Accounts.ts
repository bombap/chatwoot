import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Accounts extends BaseModel {
  public static table = 'accounts';

  @column({ isPrimary: true })
  public id: number
}
