import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SlaEvents extends BaseSchema {
  protected tableName = 'sla_events';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('applied_sla_id')
      table.bigInteger('conversation_id')
      table.bigInteger('account_id')
      table.bigInteger('sla_policy_id')
      table.bigInteger('inbox_id')
      table.integer('event_type')
      table.jsonb('meta')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
