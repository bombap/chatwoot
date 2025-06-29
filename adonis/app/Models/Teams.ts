import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Teams extends BaseModel {
  public static table = 'teams';

  @column({ isPrimary: true })
  public id: number
}
