import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AutomationRules extends BaseSchema {
  protected tableName = 'automation_rules';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.string('name')
      table.text('description')
      table.string('event_name')
      table.jsonb('conditions')
      table.jsonb('actions')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('active')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
