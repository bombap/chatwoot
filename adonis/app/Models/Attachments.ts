import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Attachments extends BaseModel {
  public static table = 'attachments';

  @column({ isPrimary: true })
  public id: number
}
