import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelTwilioSms extends BaseModel {
  public static table = 'channel_twilio_sms';

  @column({ isPrimary: true })
  public id: number
}
