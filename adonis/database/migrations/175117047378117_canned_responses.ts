import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CannedResponses extends BaseSchema {
  protected tableName = 'canned_responses';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('short_code')
      table.text('content')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
