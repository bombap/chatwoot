import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelWhatsapp extends BaseModel {
  public static table = 'channel_whatsapp';

  @column({ isPrimary: true })
  public id: number
}
