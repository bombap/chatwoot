import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ContactInboxes extends BaseModel {
  public static table = 'contact_inboxes';

  @column({ isPrimary: true })
  public id: number
}
