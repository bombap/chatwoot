import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelTelegram extends BaseSchema {
  protected tableName = 'channel_telegram';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('bot_name')
      table.integer('account_id')
      table.string('bot_token')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
