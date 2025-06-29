import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Categories extends BaseModel {
  public static table = 'categories';

  @column({ isPrimary: true })
  public id: number
}
