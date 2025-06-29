import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Notes extends BaseModel {
  public static table = 'notes';

  @column({ isPrimary: true })
  public id: number
}
