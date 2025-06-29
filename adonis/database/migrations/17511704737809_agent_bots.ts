import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AgentBots extends BaseSchema {
  protected tableName = 'agent_bots';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('description')
      table.string('outgoing_url')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.bigInteger('account_id')
      table.integer('bot_type')
      table.jsonb('bot_config')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
