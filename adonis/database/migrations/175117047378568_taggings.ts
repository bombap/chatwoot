import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Taggings extends BaseSchema {
  protected tableName = 'taggings';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('tag_id')
      table.string('taggable_type')
      table.integer('taggable_id')
      table.string('tagger_type')
      table.integer('tagger_id')
      table.string('context')
      table.timestamp('created_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
