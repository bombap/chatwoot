import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CaptainInboxes extends BaseSchema {
  protected tableName = 'captain_inboxes';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('captain_assistant_id')
      table.bigInteger('inbox_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
