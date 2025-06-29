import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WorkingHours extends BaseSchema {
  protected tableName = 'working_hours';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('inbox_id')
      table.bigInteger('account_id')
      table.integer('day_of_week')
      table.boolean('closed_all_day')
      table.integer('open_hour')
      table.integer('open_minutes')
      table.integer('close_hour')
      table.integer('close_minutes')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('open_all_day')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
