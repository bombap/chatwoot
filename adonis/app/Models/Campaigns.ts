import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Campaigns extends BaseModel {
  public static table = 'campaigns';

  @column({ isPrimary: true })
  public id: number
}
