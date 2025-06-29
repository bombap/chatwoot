import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Campaigns extends BaseSchema {
  protected tableName = 'campaigns';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('display_id')
      table.string('title')
      table.text('description')
      table.text('message')
      table.integer('sender_id')
      table.boolean('enabled')
      table.bigInteger('account_id')
      table.bigInteger('inbox_id')
      table.jsonb('trigger_rules')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('campaign_type')
      table.integer('campaign_status')
      table.jsonb('audience')
      table.timestamp('scheduled_at')
      table.boolean('trigger_only_during_business_hours')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
