import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelLine extends BaseModel {
  public static table = 'channel_line';

  @column({ isPrimary: true })
  public id: number
}
