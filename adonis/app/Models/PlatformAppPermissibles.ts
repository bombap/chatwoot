import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PlatformAppPermissibles extends BaseModel {
  public static table = 'platform_app_permissibles';

  @column({ isPrimary: true })
  public id: number
}
