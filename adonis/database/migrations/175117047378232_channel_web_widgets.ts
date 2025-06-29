import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelWebWidgets extends BaseSchema {
  protected tableName = 'channel_web_widgets';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('website_url')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('website_token')
      table.string('widget_color')
      table.string('welcome_title')
      table.string('welcome_tagline')
      table.integer('feature_flags')
      table.integer('reply_time')
      table.string('hmac_token')
      table.boolean('pre_chat_form_enabled')
      table.jsonb('pre_chat_form_options')
      table.boolean('hmac_mandatory')
      table.boolean('continuity_via_email')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
