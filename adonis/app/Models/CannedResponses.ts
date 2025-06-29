import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CannedResponses extends BaseModel {
  public static table = 'canned_responses';

  @column({ isPrimary: true })
  public id: number
}
