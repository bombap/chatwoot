import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InboxMembers extends BaseSchema {
  protected tableName = 'inbox_members';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
      table.integer('inbox_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
