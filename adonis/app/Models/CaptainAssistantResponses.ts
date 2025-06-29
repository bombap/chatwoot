import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CaptainAssistantResponses extends BaseModel {
  public static table = 'captain_assistant_responses';

  @column({ isPrimary: true })
  public id: number
}
