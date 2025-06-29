import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CsatSurveyResponses extends BaseModel {
  public static table = 'csat_survey_responses';

  @column({ isPrimary: true })
  public id: number
}
