import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AccountUsers extends BaseModel {
  public static table = 'account_users';

  @column({ isPrimary: true })
  public id: number
}
