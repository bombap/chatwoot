import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Taggings extends BaseModel {
  public static table = 'taggings';

  @column({ isPrimary: true })
  public id: number
}
