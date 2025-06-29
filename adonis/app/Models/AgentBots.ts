import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AgentBots extends BaseModel {
  public static table = 'agent_bots';

  @column({ isPrimary: true })
  public id: number
}
