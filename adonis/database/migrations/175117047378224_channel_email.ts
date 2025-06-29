import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChannelEmail extends BaseSchema {
  protected tableName = 'channel_email';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.string('email')
      table.string('forward_to_email')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('imap_enabled')
      table.string('imap_address')
      table.integer('imap_port')
      table.string('imap_login')
      table.string('imap_password')
      table.boolean('imap_enable_ssl')
      table.boolean('smtp_enabled')
      table.string('smtp_address')
      table.integer('smtp_port')
      table.string('smtp_login')
      table.string('smtp_password')
      table.string('smtp_domain')
      table.boolean('smtp_enable_starttls_auto')
      table.string('smtp_authentication')
      table.string('smtp_openssl_verify_mode')
      table.boolean('smtp_enable_ssl_tls')
      table.jsonb('provider_config')
      table.string('provider')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
