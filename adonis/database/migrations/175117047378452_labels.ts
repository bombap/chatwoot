import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Labels extends BaseSchema {
  protected tableName = 'labels';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.text('description')
      table.string('color')
      table.boolean('show_on_sidebar')
      table.bigInteger('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
