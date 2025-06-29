import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelSms extends BaseModel {
  public static table = 'channel_sms';

  @column({ isPrimary: true })
  public id: number
}
