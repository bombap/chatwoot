import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Notifications extends BaseModel {
  public static table = 'notifications';

  @column({ isPrimary: true })
  public id: number
}
