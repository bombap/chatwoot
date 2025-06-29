import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CustomFilters extends BaseSchema {
  protected tableName = 'custom_filters';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('filter_type')
      table.jsonb('query')
      table.bigInteger('account_id')
      table.bigInteger('user_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
