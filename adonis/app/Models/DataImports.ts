import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DataImports extends BaseModel {
  public static table = 'data_imports';

  @column({ isPrimary: true })
  public id: number
}
