import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelWhatsapp extends BaseSchema {
  protected tableName = 'channel_whatsapp';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('phone_number')
      table.string('provider')
      table.jsonb('provider_config')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.jsonb('message_templates')
      table.timestamp('message_templates_last_updated')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
