import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RelatedCategories extends BaseSchema {
  protected tableName = 'related_categories';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('category_id')
      table.bigInteger('related_category_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
