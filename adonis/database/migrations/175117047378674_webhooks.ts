import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Webhooks extends BaseSchema {
  protected tableName = 'webhooks';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.integer('inbox_id')
      table.string('url')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('webhook_type')
      table.jsonb('subscriptions')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
