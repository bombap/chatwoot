import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DashboardApps extends BaseModel {
  public static table = 'dashboard_apps';

  @column({ isPrimary: true })
  public id: number
}
