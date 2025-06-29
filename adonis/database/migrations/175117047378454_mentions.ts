import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mentions extends BaseSchema {
  protected tableName = 'mentions';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('user_id')
      table.bigInteger('conversation_id')
      table.bigInteger('account_id')
      table.timestamp('mentioned_at')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
