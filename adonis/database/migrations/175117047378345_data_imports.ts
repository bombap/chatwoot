import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DataImports extends BaseSchema {
  protected tableName = 'data_imports';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('account_id')
      table.string('data_type')
      table.integer('status')
      table.text('processing_errors')
      table.integer('total_records')
      table.integer('processed_records')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
