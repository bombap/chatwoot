import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TeamMembers extends BaseModel {
  public static table = 'team_members';

  @column({ isPrimary: true })
  public id: number
}
