import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelWebWidgets extends BaseModel {
  public static table = 'channel_web_widgets';

  @column({ isPrimary: true })
  public id: number
}
