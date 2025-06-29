import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Macros extends BaseModel {
  public static table = 'macros';

  @column({ isPrimary: true })
  public id: number
}
