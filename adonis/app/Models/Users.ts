import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Users extends BaseModel {
  public static table = 'users';

  @column({ isPrimary: true })
  public id: number
}
