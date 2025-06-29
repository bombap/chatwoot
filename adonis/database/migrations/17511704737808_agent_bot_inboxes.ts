import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AgentBotInboxes extends BaseSchema {
  protected tableName = 'agent_bot_inboxes';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('inbox_id')
      table.integer('agent_bot_id')
      table.integer('status')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('account_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
