import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TeamMembers extends BaseSchema {
  protected tableName = 'team_members';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('team_id')
      table.bigInteger('user_id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
