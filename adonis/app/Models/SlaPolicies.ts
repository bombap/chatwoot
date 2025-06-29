import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SlaPolicies extends BaseModel {
  public static table = 'sla_policies';

  @column({ isPrimary: true })
  public id: number
}
