import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Portals extends BaseSchema {
  protected tableName = 'portals';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('name')
      table.string('slug')
      table.string('custom_domain')
      table.string('color')
      table.string('homepage_link')
      table.string('page_title')
      table.text('header_text')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.jsonb('config')
      table.boolean('archived')
      table.bigInteger('channel_web_widget_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
