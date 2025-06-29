import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Articles extends BaseSchema {
  protected tableName = 'articles';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.integer('portal_id')
      table.integer('category_id')
      table.integer('folder_id')
      table.string('title')
      table.text('description')
      table.text('content')
      table.integer('status')
      table.integer('views')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.bigInteger('author_id')
      table.bigInteger('associated_article_id')
      table.jsonb('meta')
      table.string('slug')
      table.integer('position')
      table.string('locale')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
