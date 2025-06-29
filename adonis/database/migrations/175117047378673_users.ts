import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('provider')
      table.string('uid')
      table.string('encrypted_password')
      table.string('reset_password_token')
      table.timestamp('reset_password_sent_at')
      table.timestamp('remember_created_at')
      table.integer('sign_in_count')
      table.timestamp('current_sign_in_at')
      table.timestamp('last_sign_in_at')
      table.string('current_sign_in_ip')
      table.string('last_sign_in_ip')
      table.string('confirmation_token')
      table.timestamp('confirmed_at')
      table.timestamp('confirmation_sent_at')
      table.string('unconfirmed_email')
      table.string('name')
      table.string('display_name')
      table.string('email')
      table.string('tokens')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('pubsub_token')
      table.integer('availability')
      table.jsonb('ui_settings')
      table.jsonb('custom_attributes')
      table.string('type')
      table.text('message_signature')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
