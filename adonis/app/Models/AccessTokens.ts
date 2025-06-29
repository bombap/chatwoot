import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AccessTokens extends BaseModel {
  public static table = 'access_tokens';

  @column({ isPrimary: true })
  public id: number
}
