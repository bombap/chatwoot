import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmailTemplates extends BaseModel {
  public static table = 'email_templates';

  @column({ isPrimary: true })
  public id: number
}
