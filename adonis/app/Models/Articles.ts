import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Articles extends BaseModel {
  public static table = 'articles';

  @column({ isPrimary: true })
  public id: number
}
