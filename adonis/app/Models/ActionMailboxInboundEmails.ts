import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ActionMailboxInboundEmails extends BaseModel {
  public static table = 'action_mailbox_inbound_emails';

  @column({ isPrimary: true })
  public id: number
}
