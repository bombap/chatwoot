import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PlatformApps extends BaseModel {
  public static table = 'platform_apps';

  @column({ isPrimary: true })
  public id: number
}
