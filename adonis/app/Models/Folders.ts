import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Folders extends BaseModel {
  public static table = 'folders';

  @column({ isPrimary: true })
  public id: number
}
