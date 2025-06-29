import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ArticleEmbeddings extends BaseSchema {
  protected tableName = 'article_embeddings';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('article_id')
      table.text('term')
      table.string('embedding')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
