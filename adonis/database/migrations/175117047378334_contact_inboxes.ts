import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContactInboxes extends BaseSchema {
  protected tableName = 'contact_inboxes';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('contact_id')
      table.bigInteger('inbox_id')
      table.string('source_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('hmac_verified')
      table.string('pubsub_token')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
