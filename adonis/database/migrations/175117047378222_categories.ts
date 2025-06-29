import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
  protected tableName = 'categories';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.integer('portal_id')
      table.string('name')
      table.text('description')
      table.integer('position')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('locale')
      table.string('slug')
      table.bigInteger('parent_category_id')
      table.bigInteger('associated_category_id')
      table.string('icon')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
