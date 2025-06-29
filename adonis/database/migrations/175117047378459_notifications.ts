import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notifications extends BaseSchema {
  protected tableName = 'notifications';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.bigInteger('user_id')
      table.integer('notification_type')
      table.string('primary_actor_type')
      table.bigInteger('primary_actor_id')
      table.string('secondary_actor_type')
      table.bigInteger('secondary_actor_id')
      table.timestamp('read_at')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('snoozed_until')
      table.timestamp('last_activity_at')
      table.jsonb('meta')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
