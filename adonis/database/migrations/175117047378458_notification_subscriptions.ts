import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NotificationSubscriptions extends BaseSchema {
  protected tableName = 'notification_subscriptions';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('user_id')
      table.integer('subscription_type')
      table.jsonb('subscription_attributes')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.text('identifier')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
