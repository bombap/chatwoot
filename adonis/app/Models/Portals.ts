import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Portals extends BaseModel {
  public static table = 'portals';

  @column({ isPrimary: true })
  public id: number
}
