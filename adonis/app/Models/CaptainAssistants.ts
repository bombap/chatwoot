import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CaptainAssistants extends BaseModel {
  public static table = 'captain_assistants';

  @column({ isPrimary: true })
  public id: number
}
