import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SlaEvents extends BaseModel {
  public static table = 'sla_events';

  @column({ isPrimary: true })
  public id: number
}
