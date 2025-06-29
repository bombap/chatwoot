import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CaptainInboxes extends BaseModel {
  public static table = 'captain_inboxes';

  @column({ isPrimary: true })
  public id: number
}
