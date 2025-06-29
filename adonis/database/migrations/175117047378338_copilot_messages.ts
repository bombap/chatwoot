import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CopilotMessages extends BaseSchema {
  protected tableName = 'copilot_messages';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('copilot_thread_id')
      table.bigInteger('account_id')
      table.jsonb('message')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('message_type')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
