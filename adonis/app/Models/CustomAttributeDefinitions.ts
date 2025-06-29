import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomAttributeDefinitions extends BaseModel {
  public static table = 'custom_attribute_definitions';

  @column({ isPrimary: true })
  public id: number
}
