import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Inboxes extends BaseSchema {
  protected tableName = 'inboxes';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('channel_id')
      table.integer('account_id')
      table.string('name')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('channel_type')
      table.boolean('enable_auto_assignment')
      table.boolean('greeting_enabled')
      table.string('greeting_message')
      table.string('email_address')
      table.boolean('working_hours_enabled')
      table.string('out_of_office_message')
      table.string('timezone')
      table.boolean('enable_email_collect')
      table.boolean('csat_survey_enabled')
      table.boolean('allow_messages_after_resolved')
      table.jsonb('auto_assignment_config')
      table.boolean('lock_to_single_conversation')
      table.bigInteger('portal_id')
      table.integer('sender_name_type')
      table.string('business_name')
      table.jsonb('csat_config')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
