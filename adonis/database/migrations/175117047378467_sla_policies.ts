import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SlaPolicies extends BaseSchema {
  protected tableName = 'sla_policies';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.float('first_response_time_threshold')
      table.float('next_response_time_threshold')
      table.boolean('only_during_business_hours')
      table.bigInteger('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('description')
      table.float('resolution_time_threshold')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
