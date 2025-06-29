import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Tags extends BaseModel {
  public static table = 'tags';

  @column({ isPrimary: true })
  public id: number
}
