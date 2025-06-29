import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Labels extends BaseModel {
  public static table = 'labels';

  @column({ isPrimary: true })
  public id: number
}
