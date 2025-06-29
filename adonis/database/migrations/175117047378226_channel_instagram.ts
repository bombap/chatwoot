import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelInstagram extends BaseSchema {
  protected tableName = 'channel_instagram';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('access_token')
      table.timestamp('expires_at')
      table.integer('account_id')
      table.string('instagram_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
