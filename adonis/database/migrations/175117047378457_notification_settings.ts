import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NotificationSettings extends BaseSchema {
  protected tableName = 'notification_settings';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.integer('user_id')
      table.integer('email_flags')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('push_flags')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
