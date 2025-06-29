import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Messages extends BaseModel {
  public static table = 'messages';

  @column({ isPrimary: true })
  public id: number
}
