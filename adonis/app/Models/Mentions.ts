import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mentions extends BaseModel {
  public static table = 'mentions';

  @column({ isPrimary: true })
  public id: number
}
