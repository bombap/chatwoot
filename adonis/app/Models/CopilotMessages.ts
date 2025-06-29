import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CopilotMessages extends BaseModel {
  public static table = 'copilot_messages';

  @column({ isPrimary: true })
  public id: number
}
