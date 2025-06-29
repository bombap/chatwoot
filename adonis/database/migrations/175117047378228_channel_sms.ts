import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelSms extends BaseSchema {
  protected tableName = 'channel_sms';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('phone_number')
      table.string('provider')
      table.jsonb('provider_config')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
