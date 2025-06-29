import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class WorkingHours extends BaseModel {
  public static table = 'working_hours';

  @column({ isPrimary: true })
  public id: number
}
