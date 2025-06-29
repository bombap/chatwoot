import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AgentBotInboxes extends BaseModel {
  public static table = 'agent_bot_inboxes';

  @column({ isPrimary: true })
  public id: number
}
