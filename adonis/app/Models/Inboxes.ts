import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Inboxes extends BaseModel {
  public static table = 'inboxes';

  @column({ isPrimary: true })
  public id: number
}
