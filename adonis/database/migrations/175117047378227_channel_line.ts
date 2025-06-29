import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelLine extends BaseSchema {
  protected tableName = 'channel_line';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('line_channel_id')
      table.string('line_channel_secret')
      table.string('line_channel_token')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
