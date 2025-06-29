import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomFilters extends BaseModel {
  public static table = 'custom_filters';

  @column({ isPrimary: true })
  public id: number
}
