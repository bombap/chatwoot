import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelTwilioSms extends BaseSchema {
  protected tableName = 'channel_twilio_sms';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('phone_number')
      table.string('auth_token')
      table.string('account_sid')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('medium')
      table.string('messaging_service_sid')
      table.string('api_key_sid')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
