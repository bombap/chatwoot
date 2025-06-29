import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AppliedSlas extends BaseModel {
  public static table = 'applied_slas';

  @column({ isPrimary: true })
  public id: number
}
