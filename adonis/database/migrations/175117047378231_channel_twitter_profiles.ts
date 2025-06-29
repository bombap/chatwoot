import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelTwitterProfiles extends BaseSchema {
  protected tableName = 'channel_twitter_profiles';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('profile_id')
      table.string('twitter_access_token')
      table.string('twitter_access_token_secret')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('tweets_enabled')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
