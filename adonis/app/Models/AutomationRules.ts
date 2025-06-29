import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AutomationRules extends BaseModel {
  public static table = 'automation_rules';

  @column({ isPrimary: true })
  public id: number
}
