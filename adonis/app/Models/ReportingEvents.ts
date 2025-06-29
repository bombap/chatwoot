import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ReportingEvents extends BaseModel {
  public static table = 'reporting_events';

  @column({ isPrimary: true })
  public id: number
}
