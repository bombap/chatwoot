import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CopilotThreads extends BaseModel {
  public static table = 'copilot_threads';

  @column({ isPrimary: true })
  public id: number
}
