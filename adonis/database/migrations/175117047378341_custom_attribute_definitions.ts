import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CustomAttributeDefinitions extends BaseSchema {
  protected tableName = 'custom_attribute_definitions';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('attribute_display_name')
      table.string('attribute_key')
      table.integer('attribute_display_type')
      table.integer('default_value')
      table.integer('attribute_model')
      table.bigInteger('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.text('attribute_description')
      table.jsonb('attribute_values')
      table.string('regex_pattern')
      table.string('regex_cue')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
