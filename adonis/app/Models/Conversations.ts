import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Conversations extends BaseModel {
  public static table = 'conversations';

  @column({ isPrimary: true })
  public id: number
}
