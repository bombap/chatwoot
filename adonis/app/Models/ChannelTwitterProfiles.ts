import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ChannelTwitterProfiles extends BaseModel {
  public static table = 'channel_twitter_profiles';

  @column({ isPrimary: true })
  public id: number
}
