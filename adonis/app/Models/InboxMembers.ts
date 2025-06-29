import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class InboxMembers extends BaseModel {
  public static table = 'inbox_members';

  @column({ isPrimary: true })
  public id: number
}
