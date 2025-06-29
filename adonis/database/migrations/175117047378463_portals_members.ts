import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PortalsMembers extends BaseSchema {
  protected tableName = 'portals_members';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('portal_id')
      table.bigInteger('user_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
