import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Macros extends BaseSchema {
  protected tableName = 'macros';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.string('name')
      table.integer('visibility')
      table.bigInteger('created_by_id')
      table.bigInteger('updated_by_id')
      table.jsonb('actions')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
