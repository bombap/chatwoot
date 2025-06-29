import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InstallationConfigs extends BaseSchema {
  protected tableName = 'installation_configs';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.jsonb('serialized_value')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('locked')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
