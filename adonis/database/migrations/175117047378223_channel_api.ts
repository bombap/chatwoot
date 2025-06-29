import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelApi extends BaseSchema {
  protected tableName = 'channel_api';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('webhook_url')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('identifier')
      table.string('hmac_token')
      table.boolean('hmac_mandatory')
      table.jsonb('additional_attributes')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
