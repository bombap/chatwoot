import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PortalsMembers extends BaseModel {
  public static table = 'portals_members';

  @column({ isPrimary: true })
  public id: number
}
