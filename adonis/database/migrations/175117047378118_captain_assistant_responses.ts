import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CaptainAssistantResponses extends BaseSchema {
  protected tableName = 'captain_assistant_responses';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('question')
      table.text('answer')
      table.string('embedding')
      table.bigInteger('assistant_id')
      table.bigInteger('documentable_id')
      table.bigInteger('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('status')
      table.string('documentable_type')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
