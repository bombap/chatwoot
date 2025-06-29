import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class IntegrationsHooks extends BaseModel {
  public static table = 'integrations_hooks';

  @column({ isPrimary: true })
  public id: number
}
