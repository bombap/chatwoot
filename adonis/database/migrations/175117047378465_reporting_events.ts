import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ReportingEvents extends BaseSchema {
  protected tableName = 'reporting_events';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.float('value')
      table.integer('account_id')
      table.integer('inbox_id')
      table.integer('user_id')
      table.integer('conversation_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.float('value_in_business_hours')
      table.timestamp('event_start_time')
      table.timestamp('event_end_time')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
