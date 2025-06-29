import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RelatedCategories extends BaseModel {
  public static table = 'related_categories';

  @column({ isPrimary: true })
  public id: number
}
