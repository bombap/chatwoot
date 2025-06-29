import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CopilotThreads extends BaseSchema {
  protected tableName = 'copilot_threads';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.bigInteger('user_id')
      table.bigInteger('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('assistant_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
