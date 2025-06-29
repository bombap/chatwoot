import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contacts extends BaseSchema {
  protected tableName = 'contacts';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.string('phone_number')
      table.integer('account_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.jsonb('additional_attributes')
      table.string('identifier')
      table.jsonb('custom_attributes')
      table.timestamp('last_activity_at')
      table.integer('contact_type')
      table.string('middle_name')
      table.string('last_name')
      table.string('location')
      table.string('country_code')
      table.boolean('blocked')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
