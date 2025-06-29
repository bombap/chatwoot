import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CaptainAssistants extends BaseSchema {
  protected tableName = 'captain_assistants';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.bigInteger('account_id')
      table.string('description')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.jsonb('config')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
