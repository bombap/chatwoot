import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ConversationParticipants extends BaseModel {
  public static table = 'conversation_participants';

  @column({ isPrimary: true })
  public id: number
}
