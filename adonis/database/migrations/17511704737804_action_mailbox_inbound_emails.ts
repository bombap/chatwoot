import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActionMailboxInboundEmails extends BaseSchema {
  protected tableName = 'action_mailbox_inbound_emails';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('status')
      table.string('message_id')
      table.string('message_checksum')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
