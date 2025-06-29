import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomRoles extends BaseModel {
  public static table = 'custom_roles';

  @column({ isPrimary: true })
  public id: number
}
