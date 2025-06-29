import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelFacebookPages extends BaseSchema {
  protected tableName = 'channel_facebook_pages';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('page_id')
      table.string('user_access_token')
      table.string('page_access_token')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('instagram_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
