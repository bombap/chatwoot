import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class InstallationConfigs extends BaseModel {
  public static table = 'installation_configs';

  @column({ isPrimary: true })
  public id: number
}
