import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AccessTokens extends BaseSchema {
  protected tableName = 'access_tokens';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('owner_type')
      table.bigInteger('owner_id')
      table.string('token')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
