import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Contacts extends BaseModel {
  public static table = 'contacts';

  @column({ isPrimary: true })
  public id: number
}
